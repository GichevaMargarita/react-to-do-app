import React, {Component} from "react";
import classNames from "classnames";

class ToDoSettings extends Component {
    render() {
        const settingsItems = [];

        this.props.data.map((item, index) => (
            settingsItems.push(<div
                key={index}
                onClick={item.clickFunction}>
                <span className={item.settingName.split(' ').join('')}/>{item.settingName}</div>)
        ));

        return (
            <div className={classNames({
                'todo-settings show': this.props.isVisible,
                'todo-settings hide': !this.props.isVisible,
            })}>
                {settingsItems}
            </div>
        );
    }
}

export default ToDoSettings;
