import React, { useState } from "react";
import './Inquiries.css';
import inquiriesImg from "./Images/a.jpg";
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

  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

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

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className={`container1 ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <div className="inquiries-container">
      <img src={inquiriesImg} alt="Background" className="inquiries-img" />
        
        <div className="form-container">
      
          <div className="form-layout">
            <div className="message-column">
              <div className="message-box">
                <div className="send-message-header">
                  <span className="send-message-title">Send us a message</span>
                  <img src={mail} alt="Mail icon" className="icon-mail" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="name-fields">
                    <div className="field-container">
                      <label className="field-label" htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="form-fields"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                      />
                      <div className="Line2"></div>
                    </div>
                    <div className="field-container">
                      <label className="field-label" htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="form-fields"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                      />
                         <div className="Line5"></div>
                    </div>
                  </div>
                  <div className="field-container">
                    <label className="field-label" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-fields"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                        <div className="Line3"></div>
                  </div>
                  <div className="field-container">
                    <label className="field-label" htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      className="form-fields"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                    />
                    <div className="Line6"></div>
                  </div>
                  <div className="field-container">
                    <label className="field-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      className="form-fields"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                    />
                        <div className="Line4"></div>
                  </div>
                  <button type="submit" className="send-button">Send</button>
                </form>
              </div>
            </div>
            <div className="contact-column">
              <div className="contact-box">
                <div className="contact-header">Contact Information</div>
                <div className="Line2"></div>
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
                 <a href="https://supply2u.jhubafrica.com" target="_blank" rel="noopener noreferrer">
                  supply2u.jhubafrica.com
                 </a>
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
