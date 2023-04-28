import React, { Component } from 'react'

class CounterRenderProps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }
    clickHandler = () => {
        this.setState(previousState => ({
            count: previousState.count + 1
        })
        )
    }
    render() {
        return (
            <div>{this.props.render(this.state.count, this.clickHandler)}</div>
        )
    }
}

export default CounterRenderProps