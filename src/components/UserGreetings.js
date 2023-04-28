import React, { Component } from "react";
class UserGreetings extends Component {
    constructor() {
        super();
        this.state = { isLoggedIn: true }
    }
    // conditional rendering using if-else
    // render() {

    //     if (this.state.isLoggedIn) {
    //         return <div> Hello Madhuri</div>
    //     }
    //     else {
    //         return <div>Hello Guest</div>
    //     }

    // }
    // render() {
    //     let message;
    //     if (this.state.isLoggedIn) {
    //         message = <div>Hello Madhuri</div>
    //     }
    //     else {
    //         message = <div>Hello Guest</div>
    //     }
    //     return <div>{message}</div>
    // }

    // conditional rendering using ternary
    // render() {

    //     return this.state.isLoggedIn ? (<div>Hello Madhuri</div>) : (<div>Helo Guest</div>)

    // }
    // short circuit rendering
    render() {
        return this.state.isLoggedIn && <div>Hello Madhuri</div>
    }
}
export default UserGreetings