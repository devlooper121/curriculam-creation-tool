import { useState } from "react"


const BreakerBox = (props) => {
    let styles = {
        marginLeft:`${props.indent*20}px`,
        width:'30px',
        backgroundColor:"#0f02",
        minHeight:"40px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }

    return <div style={styles}>
        -
    </div>
}

export default BreakerBox;