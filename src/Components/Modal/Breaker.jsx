import styles from "./Breaker.module.css"

const BreakerBox = (props) => {
    let style = {
        marginLeft:`${props.indent*20}px`,
    }

    return <div style={style} className={styles.box}>
        -
    </div>
}

export default BreakerBox;