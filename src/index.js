import React from 'react';
import ReactDOM from 'react-dom';
import ToDoModel from './js/ToDoModel';

var data=[{
    name: "Name 1",
    isActive: true
},{
    name: "Name 2",
    isActive: false
}];

ReactDOM.render(<ToDoModel data={data}/>, document.getElementById('root'));
