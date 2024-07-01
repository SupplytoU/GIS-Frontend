import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social_icon">
          <li>
            <p style={{ color: '#308836' }}>JHUB: </p>
          </li>
          <li><a href="https://jhubafrica.com/" target="_blank" rel="noopener noreferrer"><ion-icon name="business-outline"></ion-icon></a></li>
          <li><a href="https://m.facebook.com/JHUBAfrica/" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a href="https://twitter.com/JHUBAfrica" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-twitter"></ion-icon></a></li>
          <li><a href="https://ke.linkedin.com/company/jhubafrica" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a></li>
        </ul>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#introduction">About</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#contact-us">Contact</a></li>
        </ul>
        <p>&copy; 2024 Supply2U | All rights Reserved</p>
      </footer>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="./Components/app2.js"></script>
    </div>
  );
}

export default Footer;
