import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    // constructor(props) {
    //     super(props);

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
                <button onClick={clickHandler}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounterTwo