import { useState } from "react"

import HoverMessage from "../Modal/HoverMessage"
import styles from "./IconWithHoverMsg.module.css"

const IconWithHoverMsg = (props) => {
    const [isHover, setHover] = useState(false);
    return (
        <div className={styles.span}>
            <span
            className={`material-symbols-outlined`}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={props.onClick}
        >   
            
            {props.name}
        </span>
            {isHover ? <HoverMessage value={props.msg}></HoverMessage> : ""}
        </div>
        
    )
}

export default IconWithHoverMsg;