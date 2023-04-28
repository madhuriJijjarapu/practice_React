import React, { Component } from "react";
class Welcome extends Component {
    // render(){
    //     return <h1> Welcome { this.props.name } your nickname is { this.props.nickname } </h1 >
    // }
    //destructing the props
    render() {
        const { name, nickname } = this.props
        return <h1> Welcome {name} your nickname is {nickname} </h1 >
    }
}
export default Welcome