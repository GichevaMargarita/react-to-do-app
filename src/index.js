import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import registerServiceWorker from './js/registerServiceWorker';

var data=[{
    name: "Name 1",
    isActive: true
},{
    name: "Name 2",
    isActive: false
}];

ReactDOM.render(<App data={data}/>, document.getElementById('root'));
// ReactDOM.render(<App data={}/>, document.getElementById('root'));

registerServiceWorker();
