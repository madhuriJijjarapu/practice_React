import React, { Component } from "react";
class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    //count+1 increment
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState(previousSate => ({
            count: previousSate.count + 1
        })
        )
    }
    decrement() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState(previousSate => ({
            count: previousSate.count - 1
        })
        )
    }
    //increment for five
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    decrementFive() {
        this.decrement();
        this.decrement();
        this.decrement();
        this.decrement();
        this.decrement();
    }
    render() {
        return (
            <div>
                <div>Count:{this.state.count}</div>
                {/* <button onClick={() => this.increment()}>Increment</button> */}
                <button onClick={() => this.incrementFive()}>Increment</button>
                <button onClick={() => this.decrementFive()}>Increment</button>

            </div>
        )
    }

}
export default Counter