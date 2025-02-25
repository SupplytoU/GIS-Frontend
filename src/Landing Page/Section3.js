import React from "react";
import styles from './Section3.module.css';
import FeatureCard from './FeatureCard';

const features = [
  {
    backgroundImage: 'https://cdn.builder.io/api/v1/image/assets%2F7a55d1e3f90e440382ed8e79ea8a2c83%2F1a05a1a946af49e5b69177930bca7857',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dbef488dc2f5f3bedd69cd847f123a95079481fae2e0ea994c14e1181da1a26b?placeholderIfAbsent=true&apiKey=7a55d1e3f90e440382ed8e79ea8a2c83',
    title: 'TRACEABILITY AND TRANSPARENCY',
    description: 'Track every step of your products with precision and clarity.'
  },
  {
    backgroundImage: 'https://cdn.builder.io/api/v1/image/assets%2F7a55d1e3f90e440382ed8e79ea8a2c83%2F1a05a1a946af49e5b69177930bca7857',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/32781c1b0fd06fd548be27120a717580b61ebf1965cfdb1811b647c9e73716d5?placeholderIfAbsent=true&apiKey=7a55d1e3f90e440382ed8e79ea8a2c83',
    title: 'REAL-TIME MONITORING',
    description: 'Stay updated with live insights into operations and logistics.'
  },
  {
    backgroundImage: 'https://cdn.builder.io/api/v1/image/assets%2F7a55d1e3f90e440382ed8e79ea8a2c83%2F375d2d9a8d804298b571a3070483bd6e',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/43ebe707b47835d75ab3936ae67e4c0b276142bac68b4c0198f307fbec1909fb?placeholderIfAbsent=true&apiKey=7a55d1e3f90e440382ed8e79ea8a2c83',
    title: 'SUPPLY CHAIN OPTIMIZATION',
    description: 'Reduce inefficiencies, streamline processes, and maximize profitability.'
  },
  {
    backgroundImage: 'https://cdn.builder.io/api/v1/image/assets%2F7a55d1e3f90e440382ed8e79ea8a2c83%2F375d2d9a8d804298b571a3070483bd6e',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/968162116d3c09fe1ed0b512741d3fb1d925e04a62dee86edf2a06bf6a4a334b?placeholderIfAbsent=true&apiKey=7a55d1e3f90e440382ed8e79ea8a2c83',
    title: 'DATA-DRIVEN DECISION MAKING',
    description: 'Harness actionable insights to make informed decisions that drive success.'
  }
];

export default function Section3() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerSection}>
          <div className={styles.titleColumn}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.mainTitle}>WHY</h1>
              <h2 className={styles.subTitle}>SUPPLY2U?</h2>
              <div className={styles.imageColumn}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/486cabd9b91615d5fd02c25ceaad6f5f5fdf16150514e738a533ddddafbc2935?placeholderIfAbsent=true&apiKey=7a55d1e3f90e440382ed8e79ea8a2c83"
                  className={styles.brandImage}
                  alt="Supply2U brand illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.description}>
        Joining Supply2U means being part of a movement that's shaping the
        future of agricultural supply chains. We bring together advanced
        technology, sustainable practices, and unparalleled expertise to help
        you succeed.
      </p>
    <div className= {styles.cardDiv}>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
