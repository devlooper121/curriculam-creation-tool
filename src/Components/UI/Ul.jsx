import styles from "./Ul.module.css"

const Ul = (props) => {
    return(
        <ul className={`${styles.listBox} ${styles.className}`}>
            {props.children}
        </ul>
    )
}

export default Ul;