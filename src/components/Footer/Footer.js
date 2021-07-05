import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.links}>
        <a href="">Linkedin</a>
        <a href="">Medium</a>
        <a href="">Dribble</a>
        <a href="">Behance</a>
      </div>
      <div className={styles.pattern}></div>
    </footer>
  )
}

export default Footer;