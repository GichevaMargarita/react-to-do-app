import React, {Component} from "react";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="css-todo-item">
                <div className="todo-header">
                    <h2>Title</h2>
                </div>
                <div className="todo-list">
                    <div className="active-items">
                        <label><input type="checkbox"/>Name</label>
                        <label><input type="checkbox"/>Name</label>
                        <label><input type="checkbox"/>Name</label>
                        <label><input type="checkbox"/>Name</label>
                        <label><input type="checkbox"/>Name</label>
                    </div>
                    <div className="completed-items">
                        <label><input type="checkbox"/>Name</label>
                        <label><input type="checkbox"/>Name</label>
                        <label><input type="checkbox"/>Name</label>
                        <label><input type="checkbox"/>Name</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
