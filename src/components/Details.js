import React from 'react';
import Card from './Card';
import './card.css';


const Details = () => {
    const arr = [{img:'https://cdn-icons-png.flaticon.com/512/744/744465.png',title:'Book',content:'Search for and book a car on our site!'},
{img:'https://cdn-icons-png.flaticon.com/512/2807/2807696.png',title:'UPLOAD LICENSE',content:'Upload your driver’s license, and pay a small security deposit.'},
{img:'https://cdn-icons-png.flaticon.com/512/3064/3064155.png',title:'UNLOCK',content:'We SMS your car details 20 minutes before pickup.Unlock it via the Zoomcar app.'},
{img:'https://cdn-icons-png.flaticon.com/512/5532/5532999.png',title:'ZOOM', content:'Fill the start checklist in the Zoomcar app. Grab the keys from the glove-box and drive.'},
{img:'https://cdn-icons-png.flaticon.com/512/709/709624.png', title:'RETURN', content:'Return the car to the same location and fill the end checklist to end your trip.'}];
    return (
        <div className='details-section'>
            <h1>HOW ZOOMCAR WORKS</h1>
            <p>Drive yourself to an adventure and back in 5 simple steps</p>
            <div className="container">
                {
                    arr.map(obj => <Card {...obj} />)
                }
            </div>
        </div>
    )
}

export default Details
