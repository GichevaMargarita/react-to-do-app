import React from 'react';
import ReactDOM from 'react-dom';
import ToDoModel from './js/ToDoModel';

var data=[{
    name: "Name 1",
    isDone: false
},{
    name: "Name 2",
    isDone: true
}];

ReactDOM.render(<ToDoModel data={data}/>, document.getElementById('root'));
