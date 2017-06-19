import React, { Component } from "react";

import "../scss/app.css";
import ToDoContainer from "./ToDoContainer";
import BtnNewToDo from "../components/RoundButton";

class ToDosContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: []
        };
    }

    addNewToDoContainer() {
        // const { toDos } = this.state;
        // line of code above is equal to this: const toDos = this.state.toDos;
        // read about destructurisation

        const toDos = this.state.toDos.slice(0);
        toDos.push(toDos.length);

        this.setState({ toDos }); // is equal to {toDos: toDos}
    }

    render() {
        const { toDos } = this.state;
        // read about ES6 arrow function
        return (
            <div className="app-aggregator">
                <div className="todo-items-list">
                    {toDos.map((toDo, index) => <ToDoContainer key={index} />)}
                </div>
                <BtnNewToDo onClick={this.addNewToDoContainer.bind(this)} />
            </div>
        );
    }
}

export default ToDosContainer;