import React, {Component} from "react";

import ToDoContainer from "./ToDoContainer";
import RoundButton from "../components/RoundButton";

class ToDoAppContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toDos: []
        };
    }

    addNewToDoContainer = () => {
        const toDos = this.state.toDos.slice(0);
        toDos.push(toDos.length);
        this.setState({toDos});
    };

    render() {
        const {toDos} = this.state;
        return (
            <div className="app-aggregator">
                <div className="todo-container-list">
                    {toDos.map((toDo, index) => <ToDoContainer key={index}/>)}
                </div>
                <RoundButton onClick={this.addNewToDoContainer}/>
            </div>
        );
    }
}

export default ToDoAppContainer;