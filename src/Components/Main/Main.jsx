import React, { useRef} from "react"
import TextFieldEditable from "../UI/TextFieldEditable"
import Ul from "../UI/Ul"
import styles from "./Main.module.css"
import Button from "../UI/Button"
import DataList from "./DataList"

import { useSelector, useDispatch } from "react-redux"

const Main = () => {
    const { listData, heading } = useSelector(state => state);
    const inputFileRef = useRef();
    // console.log(listData);
    const dispatch = useDispatch();
    const dragItem = useRef();
    const dragOverItem = useRef();  

    const addTaskHandler = () => {
        dispatch({ type: "ADDDATA", payload: "New element" })
    }

    let Heading = heading;
    // console.log(styles.heading);
    const capitalize = (data) => {
        return data.trim().toUpperCase();
    }
    const dragStart = (e, id) => {
        dragItem.current = id;
    }
    const dragEnter = (e, id) => {
        dragOverItem.current = id;
    }
    const drop = () => {
        dispatch({ type: "SWAP", payload: { id1: dragItem.current, id2: dragOverItem.current } })
    }
    const downloadFile = () => {
        dispatch({ type: "DOWNLOAD" });
    }
    const uploadFile = (e) => {
        const fileReader = new FileReader();
        let file = e.target.files[0];
        console.log(file);
        console.log("hh");
        fileReader.readAsText(file, "UTF-8")
        fileReader.onload = (e) =>{
            console.log(e.target.result);
            dispatch({ type: "UPLOAD", payload:e.target.result});
        }
        
        
    }
    const clickOnInput = () => {
        
        inputFileRef.current.click()
    }
    return (
        <div className={styles.main}>
            <Ul className={styles.heading} >
                <TextFieldEditable
                    className={styles.headingTxt}
                    value={Heading}
                    id="HEAD"
                    setData={capitalize}
                    default="HEADING"
                />
                <div className={styles.btnContainer}>
                    <Button
                        className={`${styles.exportBtn} ${styles.addBtn}`}
                        onClick={downloadFile}
                    >
                        <span className={`material-symbols-outlined`}>file_download</span>Export to Json
                    </Button>
                    <input ref={inputFileRef} onChange={uploadFile} type="file" accept="application/JSON" hidden/>
                    <Button
                        className={`${styles.exportBtn} ${styles.addBtn}`}
                        onClick={clickOnInput}
                    >
                        <span className={`material-symbols-outlined`}>file_upload</span>Import Json
                    </Button>
                </div>
            </Ul>
            <Ul className={styles.detailsTab}>
                <div className={styles.action}>
                    <p>Action</p>
                    <span>Move, Ident, Outdent, Delete</span>
                </div>
                <div className={styles.detail}>
                    <p>Standard</p>
                    <span>The text of the standard</span>
                </div>
            </Ul>
            {/* // lists  */}
            {listData.map((data) => {
                return <DataList
                    key={data.id}
                    value={data.value}
                    indent={data.indent}
                    id={data.id}
                    onDragStart={(e) => dragStart(e, data.id)}
                    onDragEnter={(e) => dragEnter(e, data.id)}
                    onDragEnd={drop}
                ></DataList>
            })}
            <Button
                className={styles.addBtn}
                onClick={addTaskHandler}
            >
                <span className={`material-symbols-outlined`}>add_circle</span> add
            </Button>
        </div>
    )
}

export default Main;