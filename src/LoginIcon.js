import React, { useState } from 'react';
import './LoginIcon.css'; 
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginicon from './Images/icons8-n-50.png'

const LoginIcon  = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="Solutionsbody">
      <ul className="menu">
        <li 
          className="menu-item" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
            <img
                loading="lazy"
                src={loginicon}
                className="LoginImage"
              />
          <span className="arrow-login"><FaChevronDown/></span>
          {dropdownVisible && (
            <ul className="dropdown">
              <Link to='/Login'><li className="dropdown-item">Login</li></Link>
              <Link to='/Account'><li className="dropdown-item">Edit Profile</li></Link>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default LoginIcon;
