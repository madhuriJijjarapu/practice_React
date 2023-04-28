import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
class LifeCycleA extends Component {
    constructor() {
        super();
        this.state = {
            name: 'lifecycleA'
        }
        console.log("LifecycleA constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA derived")
        return null
    }
    onlifechange = () => {
        this.setState({
            name: 'LifecycleB'
        })
    }
    render() {
        console.log("LifecycleA render")

        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.onlifechange}>Changecycle</button>
                < LifeCycleB />
            </div>



        )
    }
    componentDidMount() {
        console.log("LifeCycleA Mount")
    }
    shouldComponentUpdate() {
        console.log(" LifeCycleA shouldComponentUpdate")
        return null
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(" LifecycleA getSnapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }
}

export default LifeCycleA