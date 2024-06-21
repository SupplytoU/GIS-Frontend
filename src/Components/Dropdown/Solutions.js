import React, { useState } from 'react';
import './Solutions.css'; 
import { FaChevronDown } from 'react-icons/fa';

const Solutions  = () => {
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
          <div className='SolutionsTitle'>Our Solutions</div>
          <span className="arrow"><FaChevronDown/></span>
          {dropdownVisible && (
            <ul className="dropdown">
              <li className="dropdown-item">Track An Order</li>
              <li className="dropdown-item">View Locations</li>
              <li className="dropdown-item">View Analytics</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Solutions;
