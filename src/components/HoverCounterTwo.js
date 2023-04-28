import React, { Component } from 'react'

class HoverCounterTwo extends Component {
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
            <div onMouseOver={clickHandler}>Hovered {count} times</div>
        )
    }
}

export default HoverCounterTwo