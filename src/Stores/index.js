import {createStore} from "redux";
import {nanoid} from "nanoid";

function DataModal(value="", indent=1) {
    this.value = value;
    this.indent = indent;
    this.id = nanoid();
}
const saveToLocal = (value, key="data")=>{
    localStorage.setItem(key,JSON.stringify(value))
}
const downloadFunction = (data) =>{
    let date = new Date()
    const fileName = data.heading+"_data_file_"+date.toLocaleDateString();
    const jsonFile = JSON.stringify(data, {}, 2);
    const fileBlob = new Blob([jsonFile], {type:"application/json"});
    const fileHref = URL.createObjectURL(fileBlob);
    // create a HTML link tag
    const link = document.createElement("a");
    link.href = fileHref;
    link.download = fileName+".json";
    document.body.appendChild(link);
    link.click();
    // clean link
    document.body.removeChild(link);
    URL.revokeObjectURL(fileHref);
}
let dataState = {heading:"HEADING", listData:[]};
const dataFromLocal = localStorage.getItem("data");
if(dataFromLocal){
    dataState=JSON.parse(dataFromLocal)
}

const reducers = (state=dataState, action)=>{
    let id;
    let existingListIndex;
    let newState;
    switch (action.type) {
        case "INDENT":
            id = action.payload;
            
            existingListIndex = state.listData.findIndex(
                (item) => item.id === id
            );

            if(existingListIndex >= 1){
                const upperItem = state.listData[existingListIndex-1];
                const item = state.listData[existingListIndex];
                
                const upperItemIndent = upperItem.indent;
                const itemIndent = item.indent;
                if(upperItemIndent >= itemIndent){
                    const updatedItem = {...item, indent:item.indent+1};
                    const updatedListData = [...state.listData];
                    updatedListData[existingListIndex]=updatedItem;
                    const newState = {...state, listData:updatedListData};
                    // console.log(newState);
                    saveToLocal(newState);
                    return newState
                }
                return state;
            }
            return state;
        case "OUTDENT":
            id = action.payload;
            existingListIndex = state.listData.findIndex(
                (item) => item.id === id
            );
            if(existingListIndex >= 1){
                const item = state.listData[existingListIndex];

                const itemIndent = item.indent;
                if(itemIndent>1){
                    const updatedItem = {...item, indent:item.indent-1};
                    const updatedListData = [...state.listData];
                    updatedListData[existingListIndex]=updatedItem;
                    const newState = {...state, listData:updatedListData};
                    saveToLocal(newState);
                    return newState;
                }
                return state;
            }
            return state;
        case "UPDATE":
            id = action.payload.id;
            if(id==="HEAD"){
                return {...state, heading:action.payload.value}
            }
            existingListIndex = state.listData.findIndex(
                (item) => item.id === id
            );
            if(existingListIndex>=0){
                const item = state.listData[existingListIndex];
                const updatedItem = {...item, value:action.payload.value};
                const updatedListData = [...state.listData];
                updatedListData[existingListIndex]=updatedItem;
                const newState = {...state, listData:updatedListData};
                saveToLocal(newState);
                return newState
            }
            return state
        case "ADDDATA":
            console.log(state);
            let value = action.payload;
            let lastElementIndent
            // console.log(state.listData.length);
            if(state.listData.length > 0)
                lastElementIndent = state.listData[state.listData.length-1].indent;
            // console.log(lastElementIndent);
            const newItem = new DataModal(value + " ("+(state.listData.length+1)+")", lastElementIndent);
            newState = {...state, listData:[...state.listData,newItem]};
            saveToLocal(newState);
            return newState;
        case "DELETE":
            id = action.payload;
            existingListIndex = state.listData.findIndex(
                (item) => item.id === id
            );
            const item = state.listData[existingListIndex];
            const itemIndent = item.indent;
            const updatedListData = [];
            let childEnded = false;
            for(let i=0; i < state.listData.length; i++){
                console.log(i);
                if (i < existingListIndex){
                    updatedListData.push(state.listData[i])
                }
                else if(!childEnded &&  i > existingListIndex && state.listData[i].indent <= itemIndent){
                    childEnded = true;
                }
                if(childEnded){
                    updatedListData.push(state.listData[i])
                }
            }
            // console.log(updatedListData);
            saveToLocal({...state, listData:updatedListData} );
            return {...state, listData:updatedListData} 

        case "SWAP":
            const id1 = action.payload.id1;
            const id2 = action.payload.id2;

            let element1idx = state.listData.findIndex(
                (item) => item.id === id1
            );
            let element2idx = state.listData.findIndex(
                (item) => item.id === id2
            );
            let newListData = state.listData;
            let el1 = newListData[element1idx]; 
            let el2 = newListData[element2idx]; 
            
            //make indent transferable
            let tempIndent = el1.indent;
            el1.indent = el2.indent;
            el2.indent = tempIndent;
            // swap
            newListData[element1idx] = el2;
            newListData[element2idx] = el1;

            saveToLocal({...state, listData:newListData});
            return {...state, listData:newListData};

        case "DOWNLOAD":
            downloadFunction(state);
            return state;
        case "UPLOAD":
            newState = JSON.parse(action.payload);
            saveToLocal(newState);
            return newState;

        default:
            return state;
    }
}

const store = createStore(reducers);
export default store;