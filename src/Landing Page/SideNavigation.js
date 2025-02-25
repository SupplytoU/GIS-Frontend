import React from 'react';
import styles from './SideNavigation.module.css';
import { IoIosGlobe } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const navIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c1c636c44723bb300089ee61a4bd0059ec28782487939edfc188ad8903a288b?placeholderIfAbsent=true&apiKey=7a55d1e3f90e440382ed8e79ea8a2c83", alt: "Navigation icon 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bbc61f4d9744279008f75b56d544a583a183b695ef345e8229597b440d6f4cd5?placeholderIfAbsent=true&apiKey=7a55d1e3f90e440382ed8e79ea8a2c83", alt: "Navigation icon 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a1069b5bd7ee337f7941b90f7464ac74a6b8f940e7797f4e1841f726b602765?placeholderIfAbsent=true&apiKey=7a55d1e3f90e440382ed8e79ea8a2c83", alt: "Navigation icon 3" }
];

export function SideNavigation() {
  return (
    <nav className={styles.sideNav}>
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/427d47a5e1fa7635e557252dc832da5234bb855c9e4ec908af850c7d72513b19?placeholderIfAbsent=true&apiKey=7a55d1e3f90e440382ed8e79ea8a2c83"
            alt="Company Logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.navDots}>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
        </div>
        <div className={styles.divider} /></div>
        <div className={styles.icons}>
            <a href="https://supply2u.jhubafrica.com/" className={styles.navIcon}>
              <IoIosGlobe className="home-image-secondary"/>
            </a>
            <a href="mailto:supplytou@outlook.com" className={styles.navIcon}>
               <MdOutlineEmail className="home-image-secondary"/>
            </a>
            <a href="tel:+254-748-837-743" className={styles.navIcon}>
              <IoCallOutline className="home-image-secondary"/>
            </a>
          </div>
    </nav>
  );
}