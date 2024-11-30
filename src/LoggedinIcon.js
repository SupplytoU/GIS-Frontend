import React, { useState } from 'react';
import './LoginIcon.css'; 
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginIcon = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Simulated logged-in user name (replace with actual data in real implementation)
  const loggedInUser = "Neema Ogao";

  // Extract the first letter of the logged-in user's name
  const userInitial = loggedInUser.charAt(0).toUpperCase();

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
          {/* Replace the image with a circle containing the user's initial */}
          <div className="UserCircle">
            {userInitial}
          </div>
          <span className="arrow-login"><FaChevronDown/></span>
          {dropdownVisible && (
            <ul className="dropdownlogin">
              <Link to='/Account'><li className="dropdown-item1">Settings</li></Link>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default LoginIcon;
