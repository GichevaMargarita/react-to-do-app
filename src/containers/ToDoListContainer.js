import React, { Component } from "react";
import classNames from 'classnames';

import ToDoItem from "../components/ToDoItem";
import ToDoInput from "../components/ToDoInput";

class ToDoListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.data,
            isCompletedVisible: false
        };
    }

    toggleCompletedShown() {
        this.setState({
            isCompletedVisible: !this.state.isCompletedVisible
        });
    }

    addNewItem(name) {
        const { items } = this.state;

        items.push({
            name,
            isDone: false
        });

        this.setState({ items });
    }

    deleteItem(name, event) {
        if (event) {
            event.preventDefault();
        }

        const items = this.state.items.filter(item => item.name !== name);

        this.setState({ items });
    }

    updateItem(name, isDone) {
        let items = this.state.items.slice(0);

        items.forEach((item) => {
            if (item.name === name) {
                item.isDone = isDone;
            }
        });

        this.setState({ items });
    }

    createToDoItemsFromList(list) {
        return list.map((item, index) => (
            <ToDoItem
                name={item.name}
                isDone={item.isDone}
                key={index}
                deleteItem={this.deleteItem.bind(this)}
                updateItem={this.updateItem.bind(this)}
            />
        ));
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
        const { items, isCompletedVisible } = this.state;
        let activeItems = items.filter(item => !item.isDone);
        let completedItems = items.filter(item => item.isDone);

        return (
            <div className="todo-list">
                <div className="active-items">
                    {this.createToDoItemsFromList(activeItems)}
                </div>

                <ToDoInput addNewItem={this.addNewItem.bind(this)} />

                <div className="todo-showCompleted" onClick={this.toggleCompletedShown.bind(this)}>
                    <span>
                        <span>({completedItems.length}) Completed Items </span>
                        <span className={classNames({
                            showCompleted: isCompletedVisible,
                            hideCompleted: !isCompletedVisible,
                        })} />
                    </span>
                </div>

                <div className={classNames({
                    'completed-items': true,
                    show: isCompletedVisible
                })}>
                    {this.createToDoItemsFromList(completedItems)}
                </div>
            </div>
        );
    }
}

export default ToDoListContainer;