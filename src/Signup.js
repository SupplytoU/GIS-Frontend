import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import img from './Images/Signup.jpeg';
import google from './Images/Google.png'
import useLocalStorage from 'use-local-storage';
import { useUserCreateMutation } from './redux/features/auth/authApiSlice';
function Signup() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const history = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const [userCreate] = useUserCreateMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Submit form data
    console.log('Form data submitted:', formData);
    userCreate({first_name:formData.firstname, last_name:formData.lastname, email:formData.email, password:formData.password, re_password: formData.confirmPassword}).unwrap().then((result) => {
      history.push('/Success');
    }).catch((err) => {
      console.log(err);
    });

    // Navigate to success page
    
  };

  const [isDark]=useLocalStorage("isDark",false);
  return (
    <div className='Logindiv' data-theme={isDark?"dark":"light"}>
    <div className="LoginContainer">
      <div className="image-container">
        <img loading="lazy" src={img} alt="img" className="Signup-img" />
        <div className="overlay">
          <div className="login-section">
            <div className="question">Have An Account?</div>
            <Link to="/login" className="login-button">
              LOG IN
            </Link>
          </div>
        </div>
      </div>
      <div className="Signupcolumn-2">
        <form className="Auth" onSubmit={handleSubmit}>
          <h2 className="signup-title">Sign Up</h2>
          <div className='GSect'>
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
              {/* <div className="Signup-Line1"></div> */}
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
              {/* <div className="Signup-Line1"></div> */}
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
            {/* <div className="Signup-Line1"></div> */}
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
            {/* <div className="Signup-Line1"></div> */}
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
            {/* <div className="Signup-Line1"></div> */}
            {error && (
              <p className="error-message">{error}</p>
            )}
          </div>
          <button type="submit" className="signup-button">
            SIGN UP
          </button>
          </div>
        </form>
        <div className="OR">OR</div>
        <div className="SigninWithGoogle">
          <img loading="lazy" src={google} className="Loginimg-2" alt="Google" />
          <div className="Google"><Link to="/Soon">Sign up with Google</Link></div>
        </div>
        <div className='Signup2'>Have an account?<span className='SignupSpan'><Link to="/Login"> Login here</Link></span></div>
      </div>
    </div>
    </div>
  );
}

export default Signup;