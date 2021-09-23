import React from 'react';
import './card.css';

const Highlight = () => {
    return (
        <div className='highlight'>
            <h1>LOGO</h1>
            <h2>SUPERMILER CLUB</h2>
            <p>Premium club which rewards you everytime you drive with us</p>
            <span className='fancy-title'>SUPERMILER PRIVILEGES</span>
            <div className="points-card">
                <div className='header'>
                <h1>LOGO</h1>
                <h3>EARN Z POINTS</h3>
                </div>
                <div className='body'><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit reiciendis nihil impedit et fuga voluptatum repudiandae incidunt cum nisi alias.</p></div>
                <button>LEARN MORE</button>
            </div>
        </div>
    )
}

export default Highlight;
