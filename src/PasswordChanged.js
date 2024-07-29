import React from "react";
import { useNavigate } from "react-router-dom";
import './PasswordChanged.css';
import tickImg from "./Images/Tick.jpeg";

function PasswordChanged() {
  const history = useNavigate();

  const handleBackToLogin = () => {
    history.push("/login"); // Adjust the path to your login page
  };

  return (
    <div className="password-changed-container">
      <img src={tickImg} alt="Tick" className="tick-image" />
      <h1 className="password-changed-heading">Password Changed!</h1>
      <p className="password-changed-subheading">
        Your password has been changed successfully
      </p>
      <button className="back-to-login-button" onClick={handleBackToLogin}>
        Back to Login
      </button>
    </div>
  );
}

export default PasswordChanged;
