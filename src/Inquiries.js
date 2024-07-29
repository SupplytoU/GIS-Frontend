import React, { useState } from "react";
import './Inquiries.css';
import inquiriesImg from "./Images/Inquiries.png";
import mail from "./Images/Mail.png";
import phone from "./Images/Phone.png";
import email from "./Images/Email.png";
import web from "./Images/Web.png";
import location from "./Images/Location.png";
import Sidebar from './Sidebar';
import useLocalStorage from "use-local-storage";

function Inquiries() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

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

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className={`container1 ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <Sidebar onToggle={handleSidebarToggle} />
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
                    <input
                      id="firstName"
                      className="form-fields"
                      type="message"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                    />
                    <div className="Line2"></div>
                  </div>
                  <div className="field-container">
                    <input
                      id="lastName"
                      className="form-fields"
                      type="message"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                    />
                    <div className="Line5"></div>
                  </div>
                </div>
                <div className="field-container">
                  <input
                    id="email"
                    className="form-fields"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                  />
                  <div className="Line3"></div>
                </div>
                <div className="field-container">
                  <input
                    id="phone"
                    className="form-fields"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                  />
                  <div className="Line6"></div>
                </div>
                <div className="field-container">
                  <textarea
                    id="message"
                    className="form-fields"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                  />
                  <div className="Line4"></div>
                </div>
                <button className="send-button" onClick={handleSubmit}>
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
                    Jomo Kenyatta University <br />Of Agriculture And Technology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inquiries;
