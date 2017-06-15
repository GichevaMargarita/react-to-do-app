/**
 * Created by magi1016 on 15.06.2017.
 */
import React, {Component} from "react";
import "../scss/App.css";
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";
import $ from "jquery";


class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoItems: this.props.todoItems
        };

        this.addNewToDoItem = this.addNewToDoItem.bind(this);
    }

    showCompletedItems(e) {
        $('.actionForCompleted').toggleClass("showCompleted hideCompleted");
        $('.completed-items').slideToggle();
    }

    addNewToDoItem(itemName){
        let currentItems = this.state.todoItems;
        currentItems.push({
            name: itemName,
            isDone: false
        });

        this.setState({
            todoItems: currentItems
        });
    }

    deleteToDoItem(){

    }

    render() {
        let todoItems = this.state.todoItems;
        let activeItems = [];
        let completedItems = [];

        if (todoItems.length > 0) {
            todoItems.map(function (item, index) {
                let todoItem = <ToDoItem name={item.name} isDone={item.isDone} key={index}/>;
                if (item.isDone) {
                    completedItems.push(todoItem);
                }
                else {
                    activeItems.push(todoItem);
                }
            })
        }

        return (
            <div className="todo-list">
                <div className="active-items">
                    {activeItems}
                </div>

                <ToDoInput onComplete={this.addNewToDoItem}/>

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
        );
    }

}

export default ToDoList;