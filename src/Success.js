import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import tickImg from './Images/Tick.jpeg';
import './Success.css';

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 1500); // 2-second delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-container">
      <img src={tickImg} alt="Tick" className="success-image" />
      <h1 className="success-heading">Sign up Successful!<br/>Redirecting to Login... </h1>
      {/* <p className="success-subheading">Redirecting to Login...</p> */}
    </div>
  );
}

export default Success;
