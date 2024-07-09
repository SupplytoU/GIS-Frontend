import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import tickImg from './Images/Tick.jpeg';
import './Success.css';

function Success() {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/login');
    }, 2000); // 2-second delay

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className="success-container">
      <img src={tickImg} alt="Tick" className="success-image" />
      <h1 className="success-heading">Sign up Successful!</h1>
      <p className="success-subheading">Redirecting to Login...</p>
    </div>
  );
}

export default Success;
