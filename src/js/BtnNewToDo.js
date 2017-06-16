import React, {Component} from "react";
import "../scss/App.css";

class BtnNewToDo extends Component {
    render(){
        return (
            <div className="todoBtn" onClick={this.props.onClick}><span/></div>
        );
    };
}

export default BtnNewToDo;