// src/components/ContinueWithGoogle.js
import React from "react";
import './ContinueWithGoogle.css'
import useLocalStorage from 'use-local-storage';

export const ContinueWithGoogle = () => {
  const handleGoogleLogin = async () => {
    try {
      const url =
        "http://127.0.0.1:8000/api/o/google-oauth2/?redirect_uri=http://localhost:3000/auth/google";
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      if (res.status === 200) {
        window.location.replace(data.authorization_url);
      } else {
        console.log("Error: Unable to get authorization URL");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const [isDark] = useLocalStorage("isDark", false);
  
  return <button onClick={handleGoogleLogin} className="ContinueWithGoogle" data-theme={isDark ? "dark" : "light"}>Continue with Google</button>;
};