import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            comments: '',
            topic: 'React'
        }
    }
    onusernameHanler = event => {
        this.setState({
            username: event.target.value
        })
    }
    onCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    onTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }
    onSubmitform = event => {

        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        // event.preventDefault()
    }
    render() {

        return (
            <div>
                <form onSubmit={this.onSubmitform}>
                    <div>
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.onusernameHanler} />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.onCommentsChange}></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.onTopicChange}>
                            <option>Angular</option>
                            <option>React</option>
                            <option>Vue</option>

                        </select>
                    </div>

                    <button type="submit" >Submit</button>
                </form>



            </div>
        )
    }
}

export default Form