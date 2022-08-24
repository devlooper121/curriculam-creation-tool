import styles from "./Button.module.css"

const Button = (props)=>{
    return <button className={`${StyleSheet.btn} ${props.className}`}>
        {props.children}
    </button>
}

export default Button;