import React, {Component} from "react";
import "../scss/App.css";
import $ from "jquery";
import ToDoItem from "./ToDoItem";

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class ToDoModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            data: props.data
        };
    }

    // handleKeyDown (event) {
    //     if (event.which === ESCAPE_KEY) {
    //         this.setState({title: this.props.title});
    //     } else if (event.which === ENTER_KEY) {
    //         this.handleSubmit(event);
    //     }
    // }
    //
    // handleSubmit(event){
    //     if(this.state.title.trim()){
    //         this.setState({title: this.props.title});
    //     }else{
    //
    //     }
    // }

    showCompletedItems(e) {
        $('.active-items').hide();
        $('.completed-items').show();
    }

    showActiveItems(e) {
        $('.completed-items').hide();
        $('.active-items').show();
    }

    showAllItems(e) {
        $('.active-items').show();
        $('.completed-items').show();
    }

    render() {

        var data = this.state.data;
        var activeItems = [];
        var completedItems = [];

        if (data.length > 0) {
            data.map(function (item) {
                if (item.isActive) {
                    activeItems.push(<ToDoItem name={item.name} isDone={!item.isActive}/>);
                }
                else {
                    completedItems.push(<ToDoItem name={item.name} isDone={!item.isActive}/>);
                }
            })
        } else {
            activeItems = <p>Nothing to do</p>
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

                    <div className="new-todo-item">
                        <span/><input type="text" placeholder="What needs to be done?"/>
                    </div>

                    <div className="completed-items">
                        {completedItems}
                    </div>
                    <div className="todo-settings">
                        <span>
                            <span className="currentTab" onClick={this.showAllItems}>({data.length}) All </span>
                            <span onClick={this.showActiveItems}>({activeItems.length}) Active </span>
                            <span onClick={this.showCompletedItems}>({completedItems.length}) Completed</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoModel;
