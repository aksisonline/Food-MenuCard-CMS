import React from 'react';

function MenuItem({ name, price, img }) {
    return (
        <div className="menu-item">
            <img src={ `http://localhost:3001${img}` } alt="Menu Item" width={100}/>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    );
}

export default MenuItem;