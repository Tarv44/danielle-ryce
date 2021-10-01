import React from "react";
import Behance from "../../icons/behance-mobile.png";
import Dribbble from "../../icons/dribbble-mobile.png";
import LinkedIn from "../../icons/linkedin-mobile.png";
import Mirror from "../../icons/medium-mobile.png";
import styles from "./MobileIcons.module.css";

const MobileIcons = (props) => {
  return (
    <div className={styles.icons}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/danielle-ryce/"
      >
        <img src={LinkedIn} alt="LinkedIn Icon" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://danielleryce.medium.com/"
      >
        <img src={Mirror} alt="Mirror Icon" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://dribbble.com/daniellekryce"
      >
        <img src={Dribbble} alt="Dribbble Icon" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.behance.net/danielleryce"
      >
        <img src={Behance} alt="Behance Icon" />
      </a>
    </div>
  );
};
export default MobileIcons;
