import styles from "./Ul.module.css"
// import React from "react";

const Ul = (props) => {
    return(
        <ul 
            id={props.id} 
            className={`${styles.listBox} ${props.className}`} 
            draggable={props.draggable}
            onDragStart={props.onDragStart}
            onDragEnter={props.onDragEnter}
            onDragEnd={props.onDragEnd}
            >
            {props.children}
        </ul>
    )
};

export default Ul;