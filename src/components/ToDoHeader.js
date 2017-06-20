import React, {Component} from "react";
import ToDoSettings from "./ToDoSettings";

class ToDoHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name ? this.props.name : '',
            isSettingsVisible: false
        };
    }

    handleChange(event) {
        const name = event.target.value;
        this.setState({name});
    }

    triggerSettings() {
        this.setState({
            isSettingsVisible: !this.state.isSettingsVisible
        });
    }

    clickFunction(){

    }

    render() {
        let data = [{
            settingName: "Mark All As Completed",
            clickFunction: this.props.markAllItemsAsDone
        }, {
            settingName: "Delete Completed",
            clickFunction: this.props.clearCompletedItems
        }];

        const {name, isSettingsVisible} = this.state;

        return (
            <div className="todo-header">
                <input
                    type="text"
                    placeholder="Note title"
                    value={name}
                    onChange={this.handleChange.bind(this)}
                />
                <ToDoSettings data={data} isVisible={isSettingsVisible}/>
                <span onClick={this.triggerSettings.bind(this)} className="todo-settings-icon"/>
            </div>
        );
    }
    ;
}

export default ToDoHeader;