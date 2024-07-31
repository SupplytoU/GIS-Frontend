import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import img from './Images/Signup.jpeg';
import google from './Images/Google.png';
import useLocalStorage from 'use-local-storage';
import { useUserCreateMutation } from './redux/features/auth/authApiSlice';
import Modal from './Modal'; // Import Modal component

function Signup() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false); 
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const navigate = useNavigate(); // Updated to navigate

  const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return 'Passwords do not match.';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one digit.';
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return 'Password must contain at least one special character.';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    if (id === 'password' || id === 'confirmPassword') {
      const errorMessage = validatePassword(
        id === 'password' ? value : formData.password,
        id === 'confirmPassword' ? value : formData.confirmPassword
      );
      document.getElementById('password').setCustomValidity(errorMessage);
      document.getElementById('confirmPassword').setCustomValidity(errorMessage);
    }
  };

  const [userCreate] = useUserCreateMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordError = validatePassword(formData.password, formData.confirmPassword);
    if (passwordError) {
      document.getElementById('password').setCustomValidity(passwordError);
      document.getElementById('confirmPassword').setCustomValidity(passwordError);
      return;
    }

    // Clear custom validity before form submission
    document.getElementById('password').setCustomValidity('');
    document.getElementById('confirmPassword').setCustomValidity('');

    setIsModalOpen(true); // Show modal when form is submitted

    // Uncomment and adjust the following lines once sign-up logic is ready
    /*
    userCreate({
      first_name: formData.firstname,
      last_name: formData.lastname,
      email: formData.email,
      password: formData.password,
      re_password: formData.confirmPassword
    }).unwrap().then((result) => {
      navigate('/Success');
    }).catch((err) => {
      setError(err.message || 'An error occurred');
    });
    */
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal function
  };

  const [isDark] = useLocalStorage("isDark", false);

  return (
    <div className='Logindiv' data-theme={isDark ? "dark" : "light"}>
      <div className="LoginContainer">
        <div className="image-container">
          <img loading="lazy" src={img} alt="Signup" className="Signup-img" />
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
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstname"
                  className="form-input"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastname"
                  className="form-input"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                />
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
              </div>
              <div className="form-group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  className="form-input"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  className="form-input"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="show-password-container">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(prev => !prev)}
                />
                <label htmlFor="showPassword">Show Password</label>
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
      <Modal isOpen={isModalOpen} onClose={closeModal} /> {/* Add Modal component */}
    </div>
  );
}

export default Signup;
