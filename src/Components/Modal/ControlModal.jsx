import IconWithHoverMsg from "../UI/IconWithHoverMsg"
import styles from "./ControlModal.module.css"

const Control = (props) => {

    const moveLeft= () => {

    }
    const deleteMe = () => {

    }

    return (
        <div className={styles.box} >
            <IconWithHoverMsg name="open_with" msg="Move" />
            <IconWithHoverMsg name="arrow_back" msg="Outdent" onClick={moveLeft} />
            <IconWithHoverMsg name="arrow_forward" msg="Indent" onClick={props.onIndent}/>
            <IconWithHoverMsg name="delete" msg="Delete" onClick={deleteMe}/>
            
        </div>
    )
}

export default Control;