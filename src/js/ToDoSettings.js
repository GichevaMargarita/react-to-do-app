/**
 * Created by magi1016 on 16.06.2017.
 */
import React, {Component} from "react";
import "../scss/App.css";
import ToDoItem from "./ToDoItem";


class ToDoSettings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            settingsItems: this.props.settingsItems
        };
    }

    render() {
        let settingsItems = [];

        this.state.settingsItems.map((item, index) => {
            settingsItems.push(<div key={index} onClick={item.onClick}>{item.name}</div>);
        });

        return (
            <div className="todo-settings">
                {settingsItems}
            </div>
        );
    }
}

export default ToDoSettings;