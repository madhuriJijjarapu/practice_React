import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor() {
        super();
        this.state = {
            life: 'lifecycleB'
        }
        console.log("LifecycleB constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB derived")
        return null
    }
    render() {
        return (
            <div>LifeCycleB</div>
        )
    }
    componentDidMount() {
        console.log("LifeCycleB Mount")
    }
    shouldComponentUpdate() {
        console.log(" LifeCycleB shouldComponentUpdate")
        return null;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(" LifecycleB getSnapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }
}

export default LifeCycleB