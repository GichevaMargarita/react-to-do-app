import React, {Component} from "react";
import "../scss/App.css";
import ToDoHeader from "./ToDoHeader";
import ToDoList from "./ToDoList";

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data ? props.data : []
        };
    }

    render() {
        return (
            <div className="todo-item">
                <ToDoHeader />
                <ToDoList todoItems={this.state.data}/>
            </div>
        );
    }
}

export default ToDoContainer;
