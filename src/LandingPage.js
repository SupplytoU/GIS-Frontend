import React, { useEffect } from 'react';
import './LandingPage.css';
import TrackingIcon from './Images/realtime.png';
import GeolocationIcon from './Images/GeolocationIcon.png';
import AnalyticsIcon from './Images/AnalyticsIcon.png';
import Traceability from './Images/Traceability.jpeg';
import Realtime from './Images/Realtime.jpeg';
import SupplyChainOptImage from './Images/SupplyChainOpt.jpg';
import DataAnalysis from './Images/DataAnalysis.jpg';

function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="landing-page">
      <header className="header">
        <h1>ABOUT <span className="green-text">SUPPLY2U</span></h1>
      </header>
      <div className="columns-container">
        <div className="column left-column fade-in">
          <p className="watermark">About</p>
          <h2>Enhancing Your Supply<br />Chain with Real-Time<br />Precision</h2>
          <div className="LandingContent">
            <p>At Supply2U, we enhance your supply chain with advanced real-time tracking, geolocation, analytics, and retail insights. Our cutting-edge technology provides unmatched visibility and control from production to consumption.</p>
          </div>
        </div>
        <div className="white-separator"></div>
        <div className="column right-column fade-in">
          <h2>Our<br />Specialisation:</h2>
          <div className="Icons">
            <img src={TrackingIcon} alt="Realtime tracking" />
            <p>Realtime tracking</p>
            <img src={GeolocationIcon} alt="Geo-location data" />
            <p>Geo-location data</p>
            <img src={AnalyticsIcon} alt="Analytical insights" />
            <p>Analytical insights</p>
          </div>
        </div>
      </div>
      <section className="solutions fade-in">
        <h2>OUR <span className="green-text">SOLUTIONS</span></h2>
        <div className="solutions-container">
          <div className="solution">
            <img src={Traceability} alt="Traceability and Transparency" />
            <p>TRACEABILITY AND TRANSPARENCY</p>
          </div>
          <div className="solution">
            <img src={Realtime} alt="Real-Time Monitoring" />
            <p>REAL-TIME MONITORING</p>
          </div>
          <div className="solution">
            <img src={SupplyChainOptImage} alt="Supply Chain Optimization" />
            <p>SUPPLY CHAIN OPTIMIZATION</p>
          </div>
          <div className="solution">
            <img src={DataAnalysis} alt="Data-Driven Decision Making" />
            <p>DATA-DRIVEN DECISION MAKING</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
