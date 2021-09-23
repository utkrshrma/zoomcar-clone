import React from 'react';
import './card.css';

function Card({img, title, content}) {
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Card
