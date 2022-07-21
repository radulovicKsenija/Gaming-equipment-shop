import React, { useState } from "react";
import "./Checkbox.css"

const Checkbox = (props) => {

    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
        props.onSelect(props.name);
    }

    return (
        <div className="cb-container">
            <input 
                className="checkbox-input" 
                type="checkbox" 
                id={props.id} 
                name={props.name} 
                checked={checked} 
                onChange={() => handleCheck()}
            />
            <label htmlFor={props.id}>{props.name}</label>
        </div>
    )
}

export default Checkbox;