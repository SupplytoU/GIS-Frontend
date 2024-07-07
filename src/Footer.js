import * as React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom'
import logo from './Images/Logo1.png'
import website from './Images/home-website.png'
import email from './Images/home-email.png'
import call from './Images/home-call.png'
import mainimg from './Images/mainimg.jpg'
import Solutions from "./Dropdown/Solutions";
import LoginIcon from "./LoginIcon";

function Footer() {
  return (
    <>
      <div className="home-container">
        <div className="home-column">
          <Link to="/">
        <img
                loading="lazy"
                src={logo}
                className="home-image1"
              /></Link>
          {/* Sidebar */}
          <div className="home-column1">
            <div className="vertical-line-wrapper">
              <div className="dotted-lines">.<br/>.<br/>.<br/><br/><br/>.<br/>.<br/>.<br/>.</div>
              <div className="home-vertical-line"/>
              <a href="https://supply2u.jhubafrica.com/">
              <img
                loading="lazy"
                src={website}
                className="home-image-secondary"
              /></a>
              <img
                loading="lazy"
                src={email}
                className="home-image-secondary"
              /><Link to="Inquiries">
              <img
                loading="lazy"
                src={call}
                className="home-image-secondary"
              /></Link>
            </div>
          </div>
          {/* Body */}
          <div className="home-content-section">
          <div className="HomeNav">
              <Link to="/">Home</Link>
              <a href="https://supply2u.jhubafrica.com/#introduction">About us</a>
              <div className="HomeOurServices">
                <div className="HomeServices"><Solutions></Solutions></div>                
              </div>
              <Link to="/Help">Help</Link>
              <div className="loginSct">
                <LoginIcon />
              </div>
            </div>
              <img
                loading="lazy"
                src={mainimg}
                className="home-main-image"
              />
            <h1 className="home-heading">
            Smart Agriculture with<br/> Geo Insights
            </h1>
            <p className="home-paragraph">
            Transforming agriculture supply chains through precise integration of farm geolocation data,<br/> real-time analytics, 
            and consumer behavior insights. 
            Empowering stakeholders at every step<br/> with unparalleled efficiency and informed decision-making.
            </p>
            <div className="GetStartedBtn"><Link to='/Signup'>Get started</Link></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
