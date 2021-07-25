import React from 'react';
import styles from './Sect4_Comp1.module.css';
import Img1 from '../../../images/runkeeper-interval-after-1.jpg';

const After1 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <img src={Img1} alt="Runkeeper new version on phone" />
        <p>Replaced the clock with a settings icon. Consistent w/settings in running screen</p>
      </div>
    </div>
  );
};
export default After1;