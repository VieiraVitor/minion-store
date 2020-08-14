import React from 'react';

import './style.css';

function Input({name, label, type, placeholder,...props}){
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} placeholder={placeholder} {...props}/>
        </div>
    );
}

export default Input;