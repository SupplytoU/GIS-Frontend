import React from "react";
import './LandingPage.css';
import TrackingIcon from  "./Images/TrackingIcon.png";
import GeolocationIcon from  "./Images/GeolocationIcon.png";
import AnalyticsIcon from  "./Images/AnalyticsIcon.png";
import Traceability from "./Images/Traceability.jpeg";
import Realtime from "./Images/Realtime.jpeg";
import SupplyChainOptImage from "./Images/SupplyChainOpt.jpg"
import DataAnalysis from "./Images/DataAnalysis.jpg";


function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>ABOUT <span className="green-text">SUPPLY2U</span></h1>
      </header>
      <div className="columns-container">
        <div className="column left-column">
        <p className="watermark">About</p>
          <h2>Enhancing Your Supply<br/>Chain with Real-Time<br/>Precision</h2>
          <p>At Supply2U, we enhance your<br/> supply chain with advanced real<br/>-time tracking, geolocation<br/> analytics, and retail insights. Our<br/> cutting-edge technology provides<br/> unmatched visibility and control<br/> from production to consumption.</p>
        </div>
        <div className="white-separator"></div>
        <div className="column right-column">
          <h2>Our<br/>Specialisation:</h2>
          <img src={TrackingIcon} alt="Realtime tracking" />
          <h3>Realtime tracking</h3>
          <img src={GeolocationIcon} alt="Geo-location data" />
          <h3>Geo-location data</h3>
          <img src={AnalyticsIcon} alt="Analytical insights" />
          <h3>Analytical insights</h3>
          <p className="horizontal-watermark">About</p>
        </div>
      </div>
      <section className="solutions">
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
