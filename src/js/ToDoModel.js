import React, {Component} from "react";
import "../scss/App.css";
import $ from "jquery";
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";

let activeItems = [];
let completedItems = [];

class ToDoModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            data: props.data
        };

        this.addNewItem = this.addNewItem.bind(this);
    }

    showCompletedItems(e) {
        $(e.target).toggleClass("showCompleted hideCompleted");
        $('.completed-items').slideToggle();
    }

    addNewItem(itemName){
        let data = this.state.data;
        data.push({name: itemName, isDone: false});

        this.setState({data: data});
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
                <div className="todo-header">
                    <h2>{this.state.title}</h2><span/>
                </div>

                <div className="todo-list">
                    <div className="active-items">
                        {activeItems}
                    </div>

                    <ToDoInput addNewToDoItem={this.addNewItem}/>

                    <div className="todo-settings">
                        <span>
                            <span onClick={this.showCompletedItems}>({completedItems.length}) Completed Items </span>
                            <span className="actionForCompleted showCompleted" onClick={this.showCompletedItems}/>
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
