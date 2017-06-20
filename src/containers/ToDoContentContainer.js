import React, {Component} from "react";
import classNames from "classnames";

import ToDoItem from "../components/ToDoItem";
import ToDoInput from "../components/ToDoInput";

class ToDoContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompletedVisible: false
        };
    }

    toggleCompletedShown() {
        this.setState({
            isCompletedVisible: !this.state.isCompletedVisible
        });
    }

    createToDoItemsFromList(list) {
        return list.map((item, index) => (
            <ToDoItem
                name={item.name}
                isDone={item.isDone}
                key={index}
                deleteItem={this.props.deleteItem.bind(this)}
                updateItem={this.props.updateItem.bind(this)}
            />
        ));
    }

    render() {
        const {isCompletedVisible} = this.state;
        const {items} = this.props;

        let activeItems = items.filter(item => !item.isDone);
        let completedItems = items.filter(item => item.isDone);

        return (
            <div className="todo-list">
                <div className="active-items">
                    {this.createToDoItemsFromList(activeItems)}
                </div>

                <ToDoInput addNewItem={this.props.addNewItem.bind(this)}/>

                <div className="todo-showCompleted" onClick={this.toggleCompletedShown.bind(this)}>
                    <span>
                        <span>({completedItems.length}) Completed Items </span>
                        <span className={classNames({
                            showCompleted: isCompletedVisible,
                            hideCompleted: !isCompletedVisible,
                        })}/>
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

export default ToDoContentContainer;