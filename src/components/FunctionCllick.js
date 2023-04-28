import React from "react";
function FunctionClick() {
    function eventHandler() {
        console.log("clicked the function")
    }
    return (
        <div>
            <button onClick={eventHandler}>Click Here</button>
        </div>
    )
}

export default FunctionClick
