import * as React from "react";
import "./Footer.css";
import footerlogo from './Images/Logo1.png'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Homecontainer">
      <div className="Footerheader">
        <div className="Footer-logo-container">
          <Link to="/">
          <img
            loading="lazy"
           src={footerlogo}
            className="Footer-logo"
          /></Link>
          {/* <div className="company-name">Supply2U</div> */}
        </div>
        <div className="nav-links">
          <div className="nav-item"><a href="https://supply2u.jhubafrica.com/">About</a></div>
          <div className="nav-item"><a href='https://supply2u.jhubafrica.com/#solutions'>Our Solutions</a></div>
          <div className="nav-item"><Link to='/Inquiries'>Contact Us</Link></div>
          <div className="nav-item"><Link to='/Help'>FAQs</Link></div>
        </div>
      </div>
      <div className="footer">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df0a24fd779e2d5822a8f27903af233327fc176187074d845bb68faa2465e617?apiKey=7a55d1e3f90e440382ed8e79ea8a2c83&"
          className="footer-logo"
        />
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/">Terms & Conditions</Link> | <Link to="/">Privacy Policy</Link> | <Link to="/">Accessibility</Link>
          </div>
          <div className="footer-text"> © 2024 Supply2U | All rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
