import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css';
import img from './Images/Signup.jpeg';

function Signup() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const history = useHistory();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Submit form data
    console.log('Form data submitted:', formData);

    // Navigate to success page
    history.push('/success');
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
                type="message"
                placeholder="First Name"
                id="firstname"
                className="form-input"
                value={formData.firstname}
                onChange={handleInputChange}
                required
              />
              <div className="Line1"></div>
            </div>
            <div className="form-group lastname">
              <input
                type="message"
                placeholder="Last Name"
                id="lastname"
                className="form-input"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
              <div className="Line1"></div>
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
              required
            />
            <div className="Line1"></div>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="form-input"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div className="Line1"></div>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              className="form-input"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <div className="Line1"></div>
            {error && (
              <p className="error-message">{error}</p>
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
