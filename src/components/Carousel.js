import React, { useState } from 'react';
import './carousel.css';

const Carousel = () => {
    const arr = [{img:'https://cdn-icons-png.flaticon.com/512/741/741407.png',title:'HATCHBACK',price:'Price Starting at ₹ 70/hr (Fuel Free)',about:'CARS AVAILABLE: FORD FIGO, MARUTI SWIFT, BALENO, MAHINDRA KUV 100, MARUTI RITZ, HYUNDAI I20 ELITE, JAZZ SMT 1.5 IDTEC, THE RAPTOR, GRAND I10',description:'A quick drive to sunrise point'},
    {img:'https://cdn-icons-png.flaticon.com/512/3774/3774278.png',title:'SEDAN',price:'Price Starting at ₹ 95/hr (Fuel Free)',about:'CARS AVAILABLE: HONDA AMAZE, HONDA CITY, MARUTI CIAZ, FORD ASPIRE, MARUTI CIAZ MT',description:'Grab dinner and a movie'},
    {img:'https://cdn-icons-png.flaticon.com/512/2555/2555013.png',title:'SUV',price:'Price Starting at ₹ 100/hr (Fuel Free)',about:'CARS AVAILABLE: FORD ECOSPORT, MAHINDRA SCORPIO, MAHINDRA XUV, FORD ENDEAVOUR, HYUNDAI CRETA, TOYOTA FORTUNER',description:'Head outstation with the entire family'}];
    let [counter, setCounter] = useState(0);
    const decrementCounter = ()=>{
        setCounter((counter-1+arr.length)%arr.length);
    }
    const incrementCounter = ()=>{
        setCounter((counter+1)%arr.length);
    }
    return (
        <div className="carousel">
            <h1>A CAR FOR EVERY NEED</h1>
            <h3>We have a range of cars, so something will perfectly fit your trip</h3>
            <div className="slide-show">
                <div onClick={decrementCounter}>
                <img className='left-chevron' src="https://cdn-icons-png.flaticon.com/512/143/143273.png" alt="" />
                </div>
                <div className="card">
                    <img src={arr[counter].img} alt="" />
                    <div className="right">
                        <h1 className='title'>{arr[counter].title}</h1>
                        <h2>{arr[counter].price}</h2>
                        <p>{arr[counter].about}</p>
                    </div>
                </div>
                <div onClick={incrementCounter}>
                <img src="https://cdn-icons-png.flaticon.com/512/143/143274.png" alt="" className="right-chevron" />
                </div>
            </div>
            <h2>{arr[counter].description}</h2>
        </div>
    )
}

export default Carousel;
