import React, { useState } from "react";
import "./Signup.css";
import img from "./Images/Signup.jpeg";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form data
    console.log("Form data submitted:", formData);
    setErrors({});
  };

  return (
    <div className="container">
      <div className="image-container">
        <img loading="lazy" src={img} alt="img" className="img" />
        <div className="overlay">
          <div className="login-section">
            <div className="question">Have An Account?</div>
            <Link to="/login" className="login-button">
              LOG IN
            </Link>
          </div>
        </div>
      </div>
      <div className="signup-section">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="signup-title">Sign Up</h2>
          <div className="name-container">
            <div className="form-group firstname">
              <input
                type="text"
                placeholder="First Name"
                id="firstname"
                className="form-input"
                value={formData.firstname}
                onChange={handleInputChange}
              />
              <div className="Line1"></div>
              {errors.firstname && (
                <p className="error-message">{errors.firstname}</p>
              )}
            </div>
            <div className="form-group lastname">
              <input
                type="text"
                placeholder="Last Name"
                id="lastname"
                className="form-input"
                value={formData.lastname}
                onChange={handleInputChange}
              />
              <div className="Line1"></div>
              {errors.lastname && (
                <p className="error-message">{errors.lastname}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
            />
            <div className="Line1"></div>
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="form-input"
              value={formData.password}
              onChange={handleInputChange}
            />
            <div className="Line1"></div>
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              className="form-input"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <div className="Line1"></div>
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword}</p>
            )}
          </div>
          <button type="submit" className="signup-button">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
