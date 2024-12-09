import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./WelcomePage.css";
import welcome from './Images/Welcome.jpg';
import Solutions from "./Dropdown/Solutions";
import LoginIcon from "./LoggedinIcon";

function WelcomePage() {
  const [greeting, setGreeting] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [userFirstName, setUserFirstName] = useState('');

  useEffect(() => {
    // Fetch user data from API
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users/me/");
        const email = response.data.email || "";
        const firstName = email.charAt(0).toUpperCase(); // Get the first letter of the email and capitalize it
        setUserFirstName(firstName);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setTypingSpeed(110);
      } else {
        setDisplayedText((prev) => userFirstName.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayedText === userFirstName) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed, userFirstName]);

  useEffect(() => {
    // Determine greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');

    // Add fade-in animations on mount
    const elementsToFade = document.querySelectorAll(".fade-in");
    elementsToFade.forEach((element) => {
      element.classList.add("visible");
    });
  }, []);

  return (
    <div 
      className="welcome-container"
      style={{
        backgroundImage: `url(${welcome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative'
      }}
    >
      <div className="welcome-content fade-in">
        <div className="HomeNav1 fade-in">
          <Link to="/">Home</Link>
          <a href="https://supply2u.jhubafrica.com/#introduction">About us</a>
          <div className="HomeServices"><Solutions /></div>
          <Link to="/Help">Help</Link>
          <div className="loginSct">
            <LoginIcon />
          </div>
        </div>
        <h1 className="welcome-heading fade-in">
          {greeting}, <br />
          <span className="typing-container">{displayedText}</span>
        </h1>
        <p className="welcome-subtext fade-in">
          Ready to explore new insights and innovations in agriculture?
        </p>
        <div className="recommendations fade-in">
          <h2>Recommended Insights</h2>
          <ul>
            <li>
              <span className="highlighted">Tips to Boost Crop Yield:</span> 
              <span className="details"> Use precise irrigation and soil analysis for better outcomes.</span>
            </li>
            <li>
              <span className="highlighted">New Innovations:</span> 
              <span className="details"> Explore smart sensors and AI tools for sustainable agriculture.</span>
            </li>
          </ul>
        </div>
        <div className="quick-access fade-in">
          <h2>Quick Access</h2>
          <div className="quick-links">
            <Link to="/Account">Profile</Link>
            <Link to="/inquiries">Messages</Link>
          </div>
          <div className="daily-tip fade-in">
            "The future of agriculture is in our hands; let's grow sustainably."
          </div>
        </div>
      </div>
      <div className="GetStartedBtn1 fade-in">
        <Link to='/View Locations'>Explore Farms</Link>
      </div>
    </div>
  );
}

export default WelcomePage;
