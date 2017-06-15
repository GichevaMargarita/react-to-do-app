/**
 * Created by magi1016 on 15.06.2017.
 */
import React, {Component} from "react";
import "../scss/App.css";

class ToDoHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name ? this.props.name : ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({name: event.target.value});
        // this.props.onChange(this.state.name);
    }

    render() {
        return (
            <div className="todo-header">
                <input
                    type="text"
                    placeholder="Note title"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <span/>
            </div>
        );
    };
}

export default ToDoHeader;