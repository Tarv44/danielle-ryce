import React from 'react';
import styles from './Sect4_Comp1.module.css';
import Img2 from '../../../images/runkeeper-track-after-2.svg';

const After5 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <img src={Img2} alt="Runkeeper new version on phone" />
        <p>To confirm, users select the checkmark. To correct it, they select the ‘x.’</p>
      </div>
    </div>
  );
};
export default After5;