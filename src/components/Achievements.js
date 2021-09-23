import React from 'react';
import './carousel.css';

const Achievements = () => {
    return (
        <div className='achievements'>
            <div>
                <img src="https://www.zoomcar.com/build/img/steering-wheel.121c23ffa50aa2da7a1e1f829048dd90.svg" alt="" />
                <h1>3,000+</h1>
                <h2>Rides Daily</h2>
            </div>
            <div>
                <img src="https://www.zoomcar.com/build/img/happy.c650409b5435456374eca19943b697f0.svg" alt="" />
                <h1>48,00,000+</h1>
                <h2>Happy users</h2>
            </div>
            <div>
                <img src="https://www.zoomcar.com/build/img/kms.4dc69060e383492afc70514e93ca766c.svg" alt="" />
                <h1>36,00,00,000+</h1>
                <h2>Km Travelled(enough for 470 round trips to the moon!)</h2>
            </div>
            <div>
                <img src="https://www.zoomcar.com/build/img/cars.fcc55acb001edaad3d14055517a1e1b4.svg" alt="" />
                <h1>6,500+</h1>
                <h2>Number of Zoomcars</h2>
            </div>
            <div>
                <img src="https://www.zoomcar.com/build/img/star_rating.5999c91406d9adad8f35df39ef055ec5.svg" alt="" />
                <h1>Rating 4.7/5.0</h1>
                <h2>Rated by 3,00,000+ customersover 10,00,000+ bookings</h2>
            </div>
        </div>
    )
}

export default Achievements;