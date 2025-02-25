import React from 'react';
import styles from './Footer.module.css';

export const ContactItem = ({ icon, title, description }) => {
  return (
    <div className={styles.contactWrapper}>
      <img
        loading="lazy"
        src={icon}
        className={styles.contactIcon}
        alt=""
      />
      <div className={styles.contactContent}>
        <div className={styles.contactTitle}>{title}</div>
        <div className={styles.contactDescription}>{description}</div>
      </div>
    </div>
  );
};