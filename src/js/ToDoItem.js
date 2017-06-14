/**
 * Created by magi1016 on 14.06.2017.
 */
import React, {Component} from "react";
import "../scss/App.css";

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            isDone: props.isDone,
            // onDestroy:props.onDestroy
        };
    }

    render(){
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={this.state.isDone}
                    />
                    {this.state.name}
                    <span/>
                </label>
                {/*<span onClick={this.state.onDestroy}/>*/}
            </div>
        );
    };
}

export default ToDoItem;
