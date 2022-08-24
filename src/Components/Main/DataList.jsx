import BreakerBox from "../Modal/Breaker"
import Control from "../Modal/ControlModal"
import TextFieldEditable from "../UI/TextFieldEditable";
import { useState } from "react";

import Ul from "../UI/Ul"
const DataList = (props) => {
    const [indentVal, setIndentVal] = useState(1);
    const indentMe = () => {
        console.log("click");
        setIndentVal(data => data+1);
    }
    const outdentMe = () => {
        console.log("click");
        setIndentVal(data => data-1);
    }
    return(
        <Ul>
            <Control onIndent = {indentMe}/>
            <BreakerBox indent={indentVal}/>
            <TextFieldEditable value={"nkjhkjk"}/>
        </Ul>
    )
}

export default DataList