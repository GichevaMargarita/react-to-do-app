import React, {Component} from "react";
import "../scss/App.css";
import ToDoHeader from "./ToDoHeader";
import ToDoList from "./ToDoList";

class ToDoModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    render() {

        return (
            <div className="todo-item">

                <ToDoHeader name="Shopping List"/>

                <ToDoList todoItems={this.state.data}/>

            </div>
        );
    }
}

export default ToDoModel;
