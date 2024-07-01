import React, { useState } from "react";
import './Help.css';
import faq from "./Images/Faq.jpeg";
import arrow from "./Images/Arrow.png";

function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  };

  const faqData = [
    { question: "What is Supply2U?", answer: "Supply2U is a cutting-edge platform that uses geolocation data to optimize the agricultural supply chain, enhancing transparency and efficiency from farms to retail locations." },
    { question: "How does Supply2U work?", answer: "Supply2U operates by utilizing GPS data to manage and track every stage of the agricultural supply chain. This includes identifying farm locations, monitoring transportation routes, and overseeing distribution centers in real-time or through stored data to maximize logistical efficiency." },
    { question: "How do I get started with Supply2U?", answer: "To begin using Supply2U, create an account on our platform. Once registered, you will have access to comprehensive geolocation data for farms, transportation routes, and processing and retail sites. This allows you to make well-informed decisions based on real-time data insights." },
    { question: "Can I monitor the location of my produce during delivery?", answer: "Absolutely, you can monitor your produce during delivery. Supply2U offers real-time GPS tracking of transport routes, enabling you to oversee shipping times, detect any delays, and know the precise location of your produce throughout its journey." },
    { question: "How can I contact Supply2U for support or inquiries?", answer: "For support or inquiries, you can reach out to Supply2U by visiting our contact page. We provide several communication options, including email, phone support, and live chat, to assist you with any questions or concerns." },
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <div className="header-content">
          <div className="header-image">
            <img loading="lazy" src={faq} className="faq-img" alt="faq" />
          </div>
          <div className="header-title">
            <div className="title-text">Frequently Asked Questions</div>
          </div>
        </div>
      </div>
      {faqData.map((item, index) => (
        <React.Fragment key={index}>
          <div className="faq-item" onClick={() => toggleAnswer(index)}>
            <div className="question1">{item.question}</div>
            <img loading="lazy" src={arrow} alt="dropdown" className={`img-small ${openIndex === index ? 'open' : ''}`} />
          </div>
          {openIndex === index && (
            <div className="answer">{item.answer}</div>
          )}
          <div className="separator" />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Help;
