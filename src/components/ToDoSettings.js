import React, {Component} from "react";

class ToDoSettings extends Component {
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