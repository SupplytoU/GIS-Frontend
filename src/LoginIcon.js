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
          <span className="arrow"><FaChevronDown/></span>
          {dropdownVisible && (
            <ul className="dropdown">
              <li className="dropdown-item"><Link to='/Login'>Login</Link></li>
              <li className="dropdown-item"><Link to='/Account'>Edit Profile</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default LoginIcon;
