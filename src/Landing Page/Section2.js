import * as React from "react";
import styles from './Section2.module.css';

export default function Section2() {
  return (
    <section className={`${styles.section} ${styles.fadeIn}`}>
      <div className={`${styles.container} ${styles.fadeInDelayed1}`}>
        <div className={`${styles.contentWrapper} ${styles.fadeInDelayed2}`}>
          <div className={`${styles.column} ${styles.fadeInDelayed3}`}>
            <div className={styles.headerContent}>
              <h1 className={styles.mainTitle}>INTRODUCTION</h1>
              <h2 className={styles.subTitle}>TO SUPPLY2U</h2>
              <div className={styles.logoWrapper}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3564f271e867e25660a89bc523ed776ead018e855d5773f7c530728635db2005?placeholderIfAbsent=true&apiKey=7a55d1e3f90e440382ed8e79ea8a2c83"
                  className={styles.logo}
                  alt="Supply2U company logo"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.column} ${styles.fadeInDelayed3}`}>
            <p className={styles.description}>
              At Supply2U, we enhance your supply chain with advanced
              real-time tracking, geolocation analytics, and retail insights.
              Our cutting-edge technology provides unmatched visibility and
              control from production to consumption. Our mission is to
              provide unparalleled visibility and control from farm to fork.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.aboutSection} ${styles.fadeInDelayed1}`}>
        <div className={`${styles.aboutContent} ${styles.fadeInDelayed2}`}>
          <div className={`${styles.column} ${styles.fadeInDelayed3}`}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09ea8e00d574f6031fe06eeb91f8f3a9fd6603d26971f93ce07064f90591d1e1?placeholderIfAbsent=true&apiKey=7a55d1e3f90e440382ed8e79ea8a2c83"
              className={styles.aboutImage}
              alt="Supply chain management visualization"
            />
          </div>
          <div className={`${styles.column} ${styles.fadeInDelayed3}`}>
            <div className={styles.aboutText}>
              <h1 className={styles.aboutTitle}>ABOUT</h1>
              <h2 className={styles.aboutTitleh2}>SUPPLY2U</h2>
              <p className={styles.aboutDescription}>
                We deliver innovative solutions designed to
                address the unique challenges of agricultural supply chains.
                From enabling full traceability and transparency, to offering
                real-time monitoring that keeps you updated, our services are
                tailored to maximize efficiency and drive success. With
                optimization strategies that reduce waste and costs and
                data-driven intelligence that supports smarter decisions, we
                ensure your supply chain is always one step ahead. When you
                choose Supply2U, you're choosing a future where technology and
                agriculture work together seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
