import React from "react";
import ToDoHeader from "../components/ToDoHeader";
import ToDoListContainer from "./ToDoListContainer";

const ToDoContainer = props => (
    <div className="todo-container">
        <ToDoHeader name={props.name ? props.name : []} />
        <ToDoListContainer data={props.data ? props.data : []} />
    </div>
);

export default ToDoContainer;
