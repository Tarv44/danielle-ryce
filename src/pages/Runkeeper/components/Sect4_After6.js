import React from 'react';
import styles from './Sect4_Comp1.module.css';
import Img3 from '../../../images/runkeeper-track-after-3.svg';

const After6 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <img src={Img3} alt="Runkeeper new version on phone" />
        <p>Also added a help icon which opens up a short onboarding popup</p>
      </div>
    </div>
  );
};
export default After6;