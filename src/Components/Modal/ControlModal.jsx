import IconWithHoverMsg from "../UI/IconWithHoverMsg"
import styles from "./ControlModal.module.css"

const Control = (props) => {

    return (
        <div className={styles.box} >
            <IconWithHoverMsg name="open_with" msg="Move" on />
            <IconWithHoverMsg name="arrow_back" msg="Outdent" onClick={props.onOutdent} />
            <IconWithHoverMsg name="arrow_forward" msg="Indent" onClick={props.onIndent}/>
            <IconWithHoverMsg name="delete" msg="Delete" onClick={props.onDelete}/>
            
        </div>
    )
}

export default Control;