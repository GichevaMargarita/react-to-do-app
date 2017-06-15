import React, {Component} from "react";
import "../scss/App.css";
import $ from "jquery";
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";
import ToDoHeader from "./ToDoHeader";

let activeItems = [];
let completedItems = [];

class ToDoModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            data: props.data
        };
    }

    showCompletedItems(e) {
        $('.actionForCompleted').toggleClass("showCompleted hideCompleted");
        $('.completed-items').slideToggle();
    }

    render() {

        let data = this.state.data;

        if (data.length > 0) {
            data.map(function (item) {
                if (item.isActive) {
                    activeItems.push(<ToDoItem name={item.name} isDone={!item.isActive}/>);
                }
                else {
                    completedItems.push(<ToDoItem name={item.name} isDone={!item.isActive}/>);
                }
            })
        }

        return (
            <div className="todo-item">

                <ToDoHeader name="Shopping List"/>

                <div className="todo-list">
                    <div className="active-items">
                        {activeItems}
                    </div>

                    <ToDoInput/>

                    <div className="todo-settings" onClick={this.showCompletedItems}>
                        <span>
                            <span>({completedItems.length}) Completed Items </span>
                            <span className="actionForCompleted showCompleted"/>
                        </span>
                    </div>

                    <div className="completed-items">
                        {completedItems}
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDoModel;
