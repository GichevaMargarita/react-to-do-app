import React, { Component } from "react";

class ToDoHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name ? this.props.name : ''
        };
    }

    handleChange(event) {
        const name = event.target.value;
        this.setState({ name });
    }

    render() {
        const { name } = this.state;

        return (
            <div className="todo-header">
                <input
                    type="text"
                    placeholder="Note title"
                    value={name}
                    onChange={this.handleChange.bind(this)}
                />
                <span />
            </div>
        );
    };
}

export default ToDoHeader;