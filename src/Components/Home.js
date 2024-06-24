import * as React from "react";
import './Home.css';
import {Link} from "react-router-dom";
import leaves from "./Images/leaves.png"
import Arrow from "./Images/arrow.png"
import Solutions from "./Dropdown/Solutions"

function Home() {
  return (
    <>
      <div className="background">
        <img
          loading="lazy"
          srcSet="/Components/Images/background.png"
          className="img"
        />
        <div className="Login"><Link to='/Login'>Log in</Link></div>
        <div className="body">
          <div className="Header">
            <div className="Supply2u">SUPPLY2U</div>
            <div className="Nav">
              <Link to="/">Home</Link>
              <href a="https://supply2u.jhubafrica.com/">About us</href>
              <div className="OurServices">
                <div className="Services"><Solutions></Solutions></div>
                
              </div>
              <Link to="/FAQs">Help</Link>
            </div>
          </div>
          
          <div className="MainTitle">
            Smart <br />
            Agriculture with Geo<br/> Insights
          </div>
          <div className="description">
            Integrating geolocation data of the farms, real-time<br/> analytics, and
            consumer behavior insights to empower<br/> stakeholders at every step of
            the supply chain
          </div>
          <div className="GetStarted"><Link to='/Signup'>Get started</Link></div>
        </div>
      </div>
    </>
);
}

export default Home;