// src/components/Google.js
import React from 'react';
import { useGoogleAuth } from './hooks/useGoogleAuth';

function Google() {
  useGoogleAuth();

  return (
    <div>
      <h1>Signing in with Google...</h1>
    </div>
  );
}

export default Google;