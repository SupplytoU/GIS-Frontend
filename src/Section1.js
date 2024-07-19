import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Section1.css";
import logo from './Images/Logo1.png';
import mainVideo from './Images/video.mp4'; // Ensure this path is correct
import Solutions from "./Dropdown/Solutions";
import LoginIcon from "./LoginIcon";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

function Section1() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });
  }, []);
// LIGHT MODE
  // const [isLight, setIsLight]=useLocalStorage(false);

  return (
  <div className="home-container" /*data-theme={isLight?"light":"dark"}*/>
      <div className="home-column">
        <Link to="/">
          <img
            loading="lazy"
            src={logo}
            className="home-image1 fade-in"
            alt="Logo"
          />
        </Link>
        {/* Sidebar */}
        <div className="home-column1 fade-in">
          <div className="vertical-line-wrapper">
            <div className="dotted-lines">.<br />.<br />.<br /><br /><br />.<br />.<br />.<br />.</div>
            <div className="home-vertical-line" />
            <a href="https://supply2u.jhubafrica.com/">
            <IoIosGlobe className="home-image-secondary"/>
            </a>
            <MdOutlineEmail className="home-image-secondary"/>
            <Link to="Inquiries">
            <IoCallOutline className="home-image-secondary"/>
            </Link>
            {/* LIGHT MODE */}
        {/* <Toggle 
            isChecked={isLight}
            handleChange={() => setIsLight(!isLight)}
            /> */}
          </div>
        </div>
        {/* Body */}
        <div className="home-content-section fade-in">
          <div className="HomeNav fade-in">
            <Link to="/">Home</Link>
            <a href="https://supply2u.jhubafrica.com/#introduction">About us</a>
            <div className="HomeServices"><Solutions /></div>
            <Link to="/Help">Help</Link>
            <div className="loginSct">
              <LoginIcon />
            </div>
          </div>
          <video
            className="home-main-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={mainVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="home-heading fade-in">
            Smart Agriculture with<br /> Geo Insights
          </h1>
          <p className="home-paragraph fade-in">
            Transforming agriculture supply chains through precise integration of farm geolocation data,<br /> real-time analytics,
            and consumer behavior insights.
            Empowering stakeholders at every step<br /> with unparalleled efficiency and informed decision-making.
          </p>
          <div className="GetStartedBtn fade-in">
            <Link to='/Signup'>Get started</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;