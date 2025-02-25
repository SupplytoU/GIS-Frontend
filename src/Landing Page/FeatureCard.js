import React from "react";
import styles from './FeatureCard.module.css';

export default function FeatureCard({ 
  backgroundImage, 
  iconSrc, 
  title, 
  description 
}) {
  return (
    <div className="cardContainer">
    <div 
      className={styles.card} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.iconWrapper}>
        <img
          loading="lazy"
          src={iconSrc}
          alt={`${title} icon`}
          className={styles.icon}
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
    </div>
  );
}
