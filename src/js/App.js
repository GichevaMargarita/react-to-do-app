import React, {Component} from "react";
import "../scss/App.css";
import $ from 'jquery';

class App extends Component {

    showCompletedItems(e) {
        $(e.target).toggleClass("showCompleted hideCompleted");
        $('.completed-items').slideToggle();
    }

    render() {

        var data = this.props.data;
        var activeItems = [];
        var completedItems = [];

        if (data.length > 0) {
            data.map(function (item, index) {
                if (item.isActive) {
                    activeItems.push(<label><input type="checkbox" checked={item.isActive}/>{item.name}</label>);
                }
                else {
                    completedItems.push(<label><input type="checkbox" checked={item.isActive}/>{item.name}</label>);
                }
            })
        } else {
            activeItems = <p>Nothing to do</p>
        }

        return (
            <div className="todo-item">
                <div className="todo-header">
                    <h2>Title</h2><span/>
                </div>
                <div className="todo-list">
                    <div className="active-items">
                        {activeItems}
                    </div>
                    <div className="todo-settings">
                        <span>({data.length}) All ({activeItems.length}) Active ({completedItems.length}) Completed</span>
                        <span className="showCompleted" onClick={this.showCompletedItems}/>
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
