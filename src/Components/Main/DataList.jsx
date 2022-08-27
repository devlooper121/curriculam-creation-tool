import BreakerBox from "../Modal/Breaker"
import Control from "../Modal/ControlModal"
import TextFieldEditable from "../UI/TextFieldEditable";
import { useDispatch } from "react-redux";
import Ul from "../UI/Ul"
// import { useRef } from "react";
const DataList = (props) => {
    const dispatch = useDispatch();
    // const dragItem = useRef();
    const indentMe = () => {
        dispatch({type:"INDENT", payload:props.id})
    }
    const outdentMe = () => {
        console.log("click");
        dispatch({type:"OUTDENT", payload:props.id})
    }
    const deleteMe = () => {
        dispatch({type:"DELETE", payload:props.id})
    }
    
    return(
        <Ul 
            draggable="true" 
            id={props.id} 
            onDragStart={props.onDragStart}
            onDragEnter={props.onDragEnter}
            onDragEnd={props.onDragEnd}
            >
            <Control onIndent = {indentMe} onOutdent={outdentMe} onDelete={deleteMe} id={props.id}/>
            <BreakerBox indent={props.indent}/>
            <TextFieldEditable 
                value={props.value}
                id={props.id}
                setData={(data)=> data}
                default={"New element"}
            />
        </Ul>
    )
}

export default DataList