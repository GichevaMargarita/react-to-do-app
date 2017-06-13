import React, {Component} from "react";
import "./App.css";


class App extends Component {


    render() {

        var data = this.props.data;
        var todoItems = [];
        var activeItems = [];
        var completedItems = [];

        if (data.length > 0) {
            todoItems = data.map(function(item, index) {
                if(item.isDone){
                    activeItems.push(<label><input type="checkbox"  checked={!item.isDone}/>{item.name}</label>);
                }
                else {
                    completedItems.push(<label><input type="checkbox" checked={!item.isDone}/>{item.name}</label>);
                }
            })
        } else {
            todoItems = <p>Nothing to do</p>
        }

        return (
            <div className="css-todo-item">
                <div className="todo-header">
                    <h2>Title</h2> <span className="minimazeItem">x</span>
                </div>
                <div className="todo-list">
                    <div className="active-items">
                        {activeItems}
                    </div>
                    <div className="todo-settings">
                        <span>({data.length}) All ({activeItems.length}) Active ({completedItems.length}) Completed</span>
                        <span className="showCompleted">V</span>
                    </div>
                    <div className="completed-items">
                        {completedItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
