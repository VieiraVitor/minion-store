import React from 'react';

import './style.css';

function MinionItem(props){
    console.log(props)
    return (
        <div className="minion-item">
            <img src={props.image} alt="Minion1"/>
        </div>
    );
}

export default MinionItem;