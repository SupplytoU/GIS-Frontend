// components/GoogleRedirect.js
import React from 'react';
import useGoogleAuth from '../hooks/useGoogleAuth';

const GoogleRedirect = () => {
  useGoogleAuth();

  return <div>Loading...</div>;
};

export default GoogleRedirect;
