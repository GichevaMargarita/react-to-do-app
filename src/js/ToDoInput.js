/**
 * Created by magi1016 on 15.06.2017.
 */
import React, {Component} from "react";
import "../scss/App.css";
// import $ from "jquery";
// import ToDoItem from "./ToDoItem";

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class ToDoInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.addNewToDoItem = this.addNewToDoItem.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    addNewToDoItem(){
        this.props.addNewToDoItem(this.state.value);
    }

    handleKeyDown(event) {
        if (event.which === ESCAPE_KEY) {
            this.setState({value: ''});
        } else if (event.which === ENTER_KEY) {
            this.addNewToDoItem();
        }
    }

    render(){
        return (
            <div className="new-todo-item">
                <span/>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    onChange={this.handleChange}
                    value={this.state.value}
                    onBlur={this.addNewToDoItem}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    };
}

export default ToDoInput;