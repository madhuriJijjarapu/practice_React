import React from "react";

// function Greet() {
//     return (
//         <h1>Welcome Madhuri!</h1>
//     )
// }
// export const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} your nickname is {props.nickname}........</h1>
//             <p>{props.children}</p>
//         </div>

//     )

// }
//destructing the props
export const Greet = (props) => {
    const { name, nickname } = props
    console.log(props)
    return (
        <div>
            <h1>Hello {name} your nickname is {nickname}........</h1>
            <p>{props.children}</p>
        </div>

    )

}
// export default Greet