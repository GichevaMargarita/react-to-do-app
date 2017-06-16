/**Created by magi1016 on 15.06.2017.*/
import React, {Component} from "react";
import "../scss/App.css";
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";


class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoItems: this.props.todoItems,
            completedIsVisible: false
        };

        this.addNewToDoItem = this.addNewToDoItem.bind(this);
        this.deleteToDoItem = this.deleteToDoItem.bind(this);
        this.updateToDoItem = this.updateToDoItem.bind(this);
        this.showCompletedItems = this.showCompletedItems.bind(this);
    }

    showCompletedItems() {
        this.setState({
            completedIsVisible: !this.state.completedIsVisible
        });
    }

    addNewToDoItem(itemName) {
        let currentItems = this.state.todoItems;
        currentItems.push({
            name: itemName,
            isDone: false
        });

        this.setState({
            todoItems: currentItems
        });
    }

    deleteToDoItem(itemName, event) {
        event.preventDefault();
        let currentItems = this.state.todoItems;
        let index = -1;
        currentItems.map((item, itemIndex) => {
            if (item.name === itemName) {
                index = itemIndex;
            }
        });
        currentItems.splice(index, 1);

        this.setState({
            todoItems: currentItems
        });
    }

    updateToDoItem(itemName, itemIsDone) {
        let currentItems = this.state.todoItems;
        currentItems.map((item, itemIndex) => {
            if (item.name === itemName) {
                item.isDone = itemIsDone;
            }
        });

        this.setState({
            todoItems: currentItems
        });
    }

    // clearCompletedToDoItems(){
    //     let currentItems = this.state.todoItems;
    //     $.each(currentItems, (itemIndex, item) => {
    //         if (item.isDone) {
    //             this.deleteToDoItem(item.name);
    //         }
    //     });
    //
    //     this.setState({
    //         todoItems: currentItems
    //     });
    // }

    render() {
        let todoItems = this.state.todoItems;
        let activeItems = [];
        let completedItems = [];


        if (todoItems.length > 0) {
            todoItems.map((item, index) => {
                let todoItem = <ToDoItem
                    name={item.name}
                    isDone={item.isDone}
                    key={index}
                    onDestroy={this.deleteToDoItem}
                    onUpdate={this.updateToDoItem}/>;
                if (item.isDone) {
                    completedItems.push(todoItem);
                }
                else {
                    activeItems.push(todoItem);
                }
            })
        }

        const showHide = {
            'display': this.state.completedIsVisible ? 'block' : 'none'
        };

        let className = this.state.completedIsVisible ? 'showCompleted' : 'hideCompleted';

        return (

            <div className="todo-list">
                <div className="active-items">
                    {activeItems}
                </div>

                <ToDoInput onComplete={this.addNewToDoItem}/>

                <div className="todo-showCompleted" onClick={this.showCompletedItems}>
                    {/*<div className="todo-showCompleted" onClick={this.clearCompletedToDoItems}>*/}
                    <span>
                            <span>({completedItems.length}) Completed Items </span>
                            <span className={className}/>
                        </span>
                </div>

                <div className="completed-items" style={showHide}>
                    {completedItems}
                </div>
            </div>
        );
    }

}

export default ToDoList;