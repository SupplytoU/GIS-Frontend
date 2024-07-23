import React from 'react'
import Section1 from './Section1'
import Footer from './Footer'
import LandingPage from './LandingPage'
import './HomeFinal.css'


const HomeFinal = () => {
  return (
    <>
    <div className='Home-Section1'><Section1 /></div>
    <div className='Home-Section2'><LandingPage /></div>
    <div className='Home-Section3'><Footer /></div>
    </>
  )
}

export default HomeFinal