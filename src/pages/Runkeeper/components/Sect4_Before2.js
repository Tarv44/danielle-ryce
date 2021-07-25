import React from 'react';
import styles from './Sect4_Comp1.module.css';
import Img2 from '../../../images/runkeeper-interval-before-2.jpg';

const Before2 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <img src={Img2} alt="Runkeeper early version on phone" />
        <p>One participant thought the timer set the break time between exercises</p>
      </div>
    </div>
  );
};
export default Before2;