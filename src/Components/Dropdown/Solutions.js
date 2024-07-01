import React, { useState } from 'react';
import './Solutions.css'; 
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
              <li className="dropdown-item"><Link to='/Track Order'>Track An Order</Link></li>
              <li className="dropdown-item"><Link to='/Locations'>View Locations</Link></li>
              <li className="dropdown-item"><Link to='/Analytics'>View Analytics</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Solutions;
