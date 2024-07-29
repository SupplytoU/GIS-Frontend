import React from "react";
import './Reset.css';
import resetImg from "./Images/Reset.jpeg";
import { useNavigate } from "react-router-dom";

function Reset() {
  const history = useNavigate();

  const handleSetPassword = () => {
    history.push("/password-changed"); // Navigate to the password change confirmation page
  };

  return (
    <div className="reset-container">
      <div className="reset-header">CREATE A NEW PASSWORD!</div>
      <div className="reset-content">
        <div className="reset-form">
          <div className="input-group">
            <input
              type="password"
              className="input-field"
              placeholder=" "
              id="new-password"
            />
            <label className="input-label" htmlFor="new-password">
              New Password
            </label>
          </div>
          <div className="input-group">
            <input
              type="password"
              className="input-field"
              placeholder=" "
              id="confirm-password"
            />
            <label className="input-label" htmlFor="confirm-password">
              Confirm New Password
            </label>
          </div>
          <button className="set-password-button" onClick={handleSetPassword}>
            Set Password
          </button>
        </div>
        <img
          loading="lazy"
          src={resetImg}
          className="reset-img"
          alt="reset"
        />
      </div>
    </div>
  );
}

export default Reset;
