import React from "react";
import "./Checkbox.css"

const Checkbox = (props) => {
    return (
        <div className="cb-container">
            <input className="checkbox-input" type="checkbox" id={props.id} value={props.name} />
            <label for={props.id}>{props.name}</label>
        </div>
    )
}

export default Checkbox;