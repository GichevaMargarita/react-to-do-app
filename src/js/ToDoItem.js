/**
 * Created by magi1016 on 14.06.2017.
 */
import React, {Component} from "react";
import "../scss/App.css";

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            isDone: this.props.isDone,
            onDestroy: this.props.onDestroy
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        if(this.state.isDone){
            this.setState({isDone: false});
        }else{
            this.setState({isDone: true});
        }
    }

    render(){
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={this.state.isDone}
                        onChange={this.handleChange}
                    />
                    {this.state.name}
                    <span onClick={this.state.onDestroy}/>
                </label>
            </div>
        );
    };
}

export default ToDoItem;
