import React, { useState } from "react";
import './Inquiries.css';
import inquiriesImg from "./Images/Inquiries.png";
import mail from "./Images/Mail.png";
import phone from "./Images/Phone.png";
import email from "./Images/Email.png";
import web from "./Images/Web.png";
import location from "./Images/Location.png";

function Inquiries() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="inquiries-container">
    <img src={inquiriesImg} alt="Inquiries" className="inquiries-img" />
      <div className="form-container">
        <div className="form-layout">
          <div className="message-column">
            <div className="message-box">
              <div className="send-message-header">
                <div className="send-message-title">Send Us A Message</div>
                <img src={mail} alt="Mail" className="icon-mail" />
              </div>
              <div className="name-fields">
                <div className="field-container">
                  {/* <label className="field-label" htmlFor="firstName">First Name</label> */}
                  <input
                    id="InqfirstName"
                    className="form-fields"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                  />
                   <div className="Line2"></div>
                </div>
                <div className="field-container">
                  {/* <label className="field-label" htmlFor="lastName">Last Name</label> */}
                  <input
                    id="InqlastName"
                    className="form-fields"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                  />
                  <div className="Line2"></div>
                </div>
              </div>
              <div className="field-container">
                {/* <label className="field-label" htmlFor="email">Email</label> */}
                <input
                  id="Inqemail"
                  className="form-fields"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
                 <div className="Line3"></div>
              </div>
              <div className="field-container">
                {/* <label className="field-label" htmlFor="phone">Phone Number</label> */}
                <input
                  id="phone"
                  className="form-fields"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                />
                 <div className="Line3"></div>
              </div>
              <div className="field-container">
                {/* <label className="field-label" htmlFor="message">Message</label> */}
                <textarea
                  id="message"
                  className="form-fields"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                />
                 <div className="Line4"></div>
              </div>
              <button className="submit-button" onClick={handleSubmit}>
                Send
              </button>
            </div>
          </div>
          <div className="contact-column">
            <div className="contact-box">
              <div className="contact-header">Get Connected with Us</div>
              <div className="contact-details">
                <div className="contact-info">
                  <img src={phone} alt="Phone" className="contact-icon" />
                  +254-748-837-743
                </div>
                <div className="contact-info">
                  <img src={email} alt="Email" className="contact-icon" />
                  supply2u@outlook.com
                </div>
                <div className="contact-info">
                  <img src={web} alt="Web" className="contact-icon" />
                  supply2u.jhubafrica.com
                </div>
                <div className="contact-info">
                  <img src={location} alt="Location" className="contact-icon" />
                  Jomo Kenyatta University <br/>Of Agricultue And Technology
                </div>
              </div>
              {/* <div className="social-media-section">Follow Us</div>
              <div className="social-media-icons">
                <img src={facebook} alt="Facebook" className="icon-facebook" />
                <img src={instagram} alt="Instagram" className="icon-instagram" />
                <img src={twitter} alt="Twitter" className="icon-twitter" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inquiries;
