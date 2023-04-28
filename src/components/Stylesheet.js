import React from "react";
import './myStyles.css'
function Stylesheet(props) {
    let className = props.primary ? 'primary' : 'error'
    return (
        <div>
            <h1 className={`${className} font-sm`}> StyleSheets</h1>
        </div >
    )
}
export default Stylesheet