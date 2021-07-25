import React from 'react';
import styles from './Sect4_Comp1.module.css';
import Img2 from '../../../images/runkeeper-interval-after-2.jpg';

const After2 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <img src={Img2} alt="Runkeeper new version on phone" />
        <p>Made sure to update the onboarding screens to reflect this change</p>
      </div>
    </div>
  );
};
export default After2;