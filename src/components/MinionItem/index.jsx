import React from 'react';

import './style.css';

function MinionItem(props){
    return (
        <div className="minion-item">
            <img src={props.image} alt="Minion1"/>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </div>
    );
}

export default MinionItem;