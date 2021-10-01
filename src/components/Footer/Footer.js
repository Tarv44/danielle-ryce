import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.links}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/danielle-ryce/"
        >
          Linkedin
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://danielleryce.medium.com/"
        >
          Medium
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://dribbble.com/daniellekryce"
        >
          Dribbble
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.behance.net/danielleryce"
        >
          Behance
        </a>
      </div>
      <p className={styles.p}>daniellekryce@gmail.com</p>
      <div className={styles.pattern}></div>
    </footer>
  );
};

export default Footer;
