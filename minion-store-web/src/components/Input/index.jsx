import React from 'react';

import './style.css';

function Input(props){
    return (
        <div className="input-block">
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} id={props.name} placeholder={props.placeholder}/>
        </div>
    );
}

export default Input;