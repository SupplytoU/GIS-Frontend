// src/ProfileIcon.js
import React from 'react';
import { useSelector } from 'react-redux';

const ProfileIcon = () => {
  const email = useSelector((state) => state.auth.email);

  // Get the first letter of the email
  const emailInitial = email ? email.charAt(0).toUpperCase() : 'u';

  return (
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#007bff',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
    }}>
      {emailInitial}
    </div>
  );
};

export default ProfileIcon;
