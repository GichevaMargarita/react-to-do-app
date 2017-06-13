import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var data=[{
    name: "Name 1",
    isDone: false
},{
    name: "Name 2",
    isDone: true
}];
ReactDOM.render(<App data={data}/>, document.getElementById('root'));
registerServiceWorker();
