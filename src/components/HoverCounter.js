import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }
    // clickHandler = () => {
    //     this.setState(previousState => ({
    //         count: previousState.count + 1
    //     }))
    // }

    render() {
        const { count, clickHandler } = this.props
        return (
            <div onMouseOver={clickHandler}>{this.props.name} Hover {count}  Completed</div>
        )
    }
}

export default UpdatedComponent(HoverCounter)