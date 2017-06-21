import React, {Component} from "react";
import ToDoHeader from "../components/ToDoHeader";
import ToDoContentContainer from "./ToDoContentContainer";

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title ? this.props.title : '',
            items: this.props.data ? this.props.data : []
        };
    }

    addNewItem = name => {
        const {items} = this.state;

        items.push({
            name,
            isDone: false
        });

        this.setState({items});
    };

    deleteItem = (name, event) => {
        if (event) {
            event.preventDefault();
        }

        let items = this.state.items.filter(item => item.name !== name);

        this.setState({items});
    };

    updateItem = (name, isDone) => {
        let items = this.state.items.slice(0);

        items.forEach((item) => {
            if (item.name === name) {
                item.isDone = isDone;
            }
        });

        this.setState({items});
    };

    clearCompletedItems = () => {
        const items = this.state.items.filter(item => !item.isDone);
        this.setState({items});
    };

    markAllItemsAsDone = () => {
        const {items} = this.state;
        items.forEach(item => (item.isDone = true));
        this.setState({items});
    };

    render() {
        return (
            <div className="todo-container">
                <ToDoHeader title={this.state.title}
                            clearCompletedItems={this.clearCompletedItems}
                            markAllItemsAsDone={this.markAllItemsAsDone}/>
                <ToDoContentContainer items={this.state.items}
                                      addNewItem={this.addNewItem}
                                      deleteItem={this.deleteItem}
                                      updateItem={this.updateItem}/>
            </div>
        );
    }
}

export default ToDoContainer;
