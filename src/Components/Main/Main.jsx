import React from "react"
import TextFieldEditable from "../UI/TextFieldEditable"
import Ul from "../UI/Ul"
import styles from "./Main.module.css"

const Main = () => {
    let Heading = "HEADING";
    console.log(styles.heading);
    const capitalize = (data)=>{
        return data.trim().toUpperCase();
    }
    return (
        <React.Fragment>
            <Ul >
                <TextFieldEditable 
                    className={styles.heading}
                    value={Heading}
                    setData={capitalize}
                    default="HEADING"
                />
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
        </React.Fragment>
    )
}

export default Main;