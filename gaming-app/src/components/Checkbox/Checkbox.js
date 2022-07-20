import React from "react";
import "./Checkbox.css"

const Checkbox = (props) => {
    return (
        <div className="cb-container">
            <input 
                className="checkbox-input" 
                type="checkbox" 
                id={props.id} 
                value={props.name} 
                checked={props.checked} 
                onChange={props.handleChange}
            />
            <label htmlFor={props.id}>{props.name}</label>
        </div>
    )
}

export default Checkbox;