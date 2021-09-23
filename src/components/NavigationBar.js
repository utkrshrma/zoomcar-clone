import React from "react";

const NavigationBar = () => {
  return (
    <div>
      <header>
        <div className='logo'>
          <h1>ZoomCar Logo</h1>
        </div>
        <input type='checkbox' id='nav-toggle' className='nav-toggle'></input>
        <label for='nav-toggle' className='nav-toggle-label'>
          <span className='label-span'></span>
        </label>
        <nav>
          <ul>
            <li>
              <a>Office</a>
            </li>
            <li>
              <a>Subscription</a>
            </li>
            <li>
              <a>Signup</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class='content'>
        <h1>DRIVE IN A SANITISED ZOOMCAR</h1>
        <h2>Self Drive Car Rental in Bangalore</h2>
        <div class='pwd'>
          <input type='password' name='password' id='pwdInput' placeholder='Search your wonderful journey' />
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
