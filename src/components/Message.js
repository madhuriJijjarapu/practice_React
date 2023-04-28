import React, { Component } from "react";
class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome operator!"
        }
    }
    changeMessage() {
        this.setState({
            message: "Thank you for Subscribing me!!"
        })
    }
    unsubscribeMessage() {
        this.setState({
            message: "Hello Welcome ,Please subscribe "
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
                <button onClick={() => this.unsubscribeMessage()}>UnSubscribe</button>
            </div>

        )
    }
}
export default Message