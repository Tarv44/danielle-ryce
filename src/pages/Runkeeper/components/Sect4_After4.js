import React from 'react';
import styles from './Sect4_Comp1.module.css';
import Img1 from '../../../images/runkeeper-track-after-1.svg';

const After4 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <img src={Img1} alt="Runkeeper new version on phone" />
        <p>Changed title to “How’d You Do?” & added sentences to show past tense</p>
      </div>
    </div>
  );
};
export default After4;