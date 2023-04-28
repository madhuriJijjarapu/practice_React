import React, { PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'
class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: "Madhuri"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Madhuri"
            })
        }, 2000)

    }
    render() {
        console.log("********Parent Component***********")
        return (
            <div>
                {/* <RegComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp