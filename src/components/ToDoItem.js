import React, {Component} from "react";

class ToDoItem extends Component {
    handleChange(event) {
        const {name} = this.props;
        const isDone = event.target.checked;
        this.props.updateItem(name, isDone);
    }

    render() {
        const {name, isDone, deleteItem} = this.props;

        return (
            <div className="todo-issue">
                <label>
                    <input
                        type="checkbox"
                        checked={isDone}
                        onChange={this.handleChange.bind(this)}
                    />
                    {name}
                    <span onClick={deleteItem.bind(null, name)}/>
                </label>
            </div>
        );
    };
}

export default ToDoItem;
