import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }
    // clickHandler = () => {
    //     this.setState(previousState => ({
    //         count: previousState.count + 1
    //     })
    //     )
    // }
    render() {
        const { count, clickHandler } = this.props
        return (
            <div>
                {/* <button onClick={this.clickHandler}> Clicked {count} times</button> */}

                <button onClick={clickHandler}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)