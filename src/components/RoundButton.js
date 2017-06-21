import React from "react";

const RoundButton = ({onClick}) => (
    <div className="round-button" onClick={onClick}><span className="plus-icon"/></div>
);

export default RoundButton;