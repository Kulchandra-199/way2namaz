

import React, { useState } from 'react';
import './header.css'; // Import your CSS file for styling
import logo from './../../assets/images/Way2Namaz Logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container jaishreeram'>
        <div className="row">
            <div className="col-lg-12 mx-auto">
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      
        </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <div className={`navbar-contact ${isOpen ? 'open' : ''}`}>
       {/* <a href="" className='contact-now'> Contact Now</a> */}
        <a href="/"><button>Contact Now</button></a>
        </div>
      
      </div>
      
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    </div>
        </div>
    </div>
  );
};

export default Header;


