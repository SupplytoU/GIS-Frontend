import React, { useState, useEffect } from 'react';
import Section1 from './Section1';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Loading from './Loading';
import './HomeFinal.css';
import { FaArrowUp } from "react-icons/fa";

const HomeFinal = () => {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show or hide the scroll-to-top button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) { // Change 300 to adjust when the button appears
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLoadingComplete = () => {
    console.log('Loading animation completed');
    // Perform any additional actions needed
  };

  return (
    <>
      {loading ? (
        <Loading onLoadComplete={handleLoadingComplete} />
      ) : (
        <>
          <div className='Home-Section1'><Section1 /></div>
          <div className='Home-Section2'><LandingPage /></div>
          <div className='Home-Section3'><Footer /></div>
          <div className='Scroll'>
            {showScroll && (
              <FaArrowUp className='scroll-to-top' onClick={scrollToTop}/>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default HomeFinal;
