import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
class ComponentF extends Component {

    render() {
        const { username } = this.props
        return (
            <UserConsumer>
                {
                    username => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>


        )
    }
}

export default ComponentF