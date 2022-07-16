import React from 'react';
import './button.css';

function Button(props) {
    return (
        <>
            <button onClick={props.handleLogin}>Prijavi se</button>
        </>
    );
}

export default Button;
