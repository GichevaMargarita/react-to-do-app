import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';

var data=[{
    name: "Name 1",
    isActive: true
},{
    name: "Name 2",
    isActive: false
}];

ReactDOM.render(<App data={data}/>, document.getElementById('root'));
