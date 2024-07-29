import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './EF2RxrLVRn.json'; // Adjust path as needed
import './MapLoading.css'; // Ensure you create and link this CSS file

const MapLoading = ({ onLoadComplete = () => {} }) => { // Default value to no-op function
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowText(true);
        }, 4000);

        const timer2 = setTimeout(() => {
            onLoadComplete(); // Safely call the function
        }, 7000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onLoadComplete]);

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="loader-container">
            {!showText ? (
                <div className="lottie-container">
                    <Lottie options={defaultOptions} height={300} width={300} />
                    <h1>Loading<br /> map data...</h1>
                </div>
            ) : (
                <h1 className="website-name">
                    {/* <span className="Supplytxt">Supply</span>
                    <span className="txt">2U</span> */}
                </h1>
            )}
        </div>
    );
};

export default MapLoading;
