import React from 'react';
import styles from './Sect4_Comp1.module.css';
import Img3 from '../../../images/runkeeper-interval-after-3.jpg';

const After3 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <img src={Img3} alt="Runkeeper new version on phone" />
        <p>Mirrored the existing settings screen to ensure comprehension</p>
      </div>
    </div>
  );
};
export default After3;