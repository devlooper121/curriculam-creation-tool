import styles from "./HoverMessage.module.css"

const HoverMessage = (props) => {
    return(
        <div className={styles.box}>
            {props.value}
            <div className={styles.point}></div>    
        </div>
    )
}

export default HoverMessage;