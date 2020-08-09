import React from 'react';

import './style.css';

function Input(props){
    return (
        <div className="input-block">
            <input type={props.type} id={props.name} placeholder={props.placeholder}/>
        </div>
    );
}

export default Input;