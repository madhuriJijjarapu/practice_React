import React from "react";
const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

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
            const count = this.state.count
            return <OriginalComponent count={count} clickHandler={this.clickHandler} {...this.props} />
        }
    }
    return NewComponent
}
export default UpdatedComponent