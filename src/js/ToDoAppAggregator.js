/**
 * Created by magi1016 on 16.06.2017.
 */
import React, {Component} from "react";
import "../scss/App.css";
import ToDoContainer from "./ToDoContainer";
import BtnNewToDo from "./BtnNewToDo";

class ToDoAppAggregator extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfToDos: 0
        };
    }

    addNewToDoContainer(){
        this.setState({
            numberOfToDos: this.state.numberOfToDos + 1
        })
    }

    render(){
        let children = [];

        for (var i = 0; i < this.state.numberOfToDos; i += 1) {
            children.push(<ToDoContainer key={i}/>);
        };

        return (
            <div className="app-aggregator">
                <div className="todo-items-list">{children}</div>
                <BtnNewToDo onClick={this.addNewToDoContainer.bind(this)}/>
            </div>
        );
    }
}

export default ToDoAppAggregator;