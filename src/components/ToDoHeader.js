import React, {Component} from "react";
import ToDoSettings from "./ToDoSettings";

class ToDoHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            isSettingsVisible: false
        };
    }

    handleChange = event => {
        const title = event.target.value;
        this.setState({title});
    };

    triggerSettings = () => {
        this.setState({
            isSettingsVisible: !this.state.isSettingsVisible
        });
    };

    render() {
        // TODO Hardcode for settings(bad idea)
        const data = [{
            settingName: "Mark All As Completed",
            clickFunction: this.props.markAllItemsAsDone
        }, {
            settingName: "Delete Completed",
            clickFunction: this.props.clearCompletedItems
        }];

        const {title, isSettingsVisible} = this.state;

        return (
            <div className="todo-header">
                <input
                    type="text"
                    placeholder="Note title"
                    value={title}
                    onChange={this.handleChange}/>
                <ToDoSettings data={data} isVisible={isSettingsVisible}/>
                <span onClick={this.triggerSettings} className="todo-settings-icon"/>
            </div>
        );
    }
    ;
}

export default ToDoHeader;