import React from 'react';

import './style.css';

function MinionItem({image, title, subtitle, ...props}){
    return (
        <div className="minion-item">
            <img src={image} alt="Minion1"/>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
}

export default MinionItem;