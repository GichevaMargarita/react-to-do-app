import React, {Component} from "react";

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    addNewToDoItem = () => {
        const {value} = this.state;
        if (value) {
            this.props.addNewItem(value);
        }
        this.setState({value: ''});
    };

    handleKeyDown = event => {
        if (event.which === ESCAPE_KEY) {
            this.setState({value: ''});
        } else if (event.which === ENTER_KEY) {
            this.addNewToDoItem();
        }
    };

    render() {
        const {value} = this.state;
        return (
            <div className="todo-item-input">
                <span className="plusToDo-icon"/>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    onChange={this.handleChange}
                    value={value}
                    onBlur={this.addNewToDoItem}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    };
}

export default ToDoInput;