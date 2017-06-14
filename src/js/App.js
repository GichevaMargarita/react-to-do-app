import React, {Component} from "react";
import "../scss/App.css";
import $ from 'jquery';

class App extends Component {

    showCompletedItems(e) {
        $('.active-items').hide();
        $('.completed-items').show();
    }

    showActiveItems(e) {
        $('.completed-items').hide();
        $('.active-items').show();
    }

    showAllItems(e){
        $('.active-items').show();
        $('.completed-items').show();
    }

    render() {

        var data = this.props.data;
        var activeItems = [];
        var completedItems = [];

        if (data.length > 0) {
            data.map(function (item) {
                if (item.isActive) {
                    activeItems.push(<label><input type="checkbox" checked={!item.isActive}/>{item.name}</label>);
                }
                else {
                    completedItems.push(<label><input type="checkbox" checked={!item.isActive}/>{item.name}</label>);
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

export default App;
