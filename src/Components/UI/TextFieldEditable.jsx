import { useState } from "react"
import styles from "./TextFieldEditable.module.css"

const TextFieldEditable = (props) => {
    const [data, setData] = useState(props.value);
    const [editable, setEditable] = useState(false);
    const inputHandler = (e) => {
        setData(props.setData(e.target.value));
        
    }
    const clickHandler = () => {
        setEditable(state => !state);
        if(data==""){
            setData(props.default)
        }
    }
    console.log(props);
    return (
        !editable ? <p
            className={`${styles.p} ${props.className}`}
            onClick={clickHandler}
            style={{color:props.color}}
        >
            {data}
        </p> : 
        <input 
            className={`${styles.input} ${props.className}`} 
            onBlur={clickHandler} 
            type="text" value={data} 
            onChange={inputHandler}
            style={{color:props.color}}
        />

    )
}

export default TextFieldEditable;