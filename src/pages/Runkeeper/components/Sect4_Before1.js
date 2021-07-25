import React from 'react';
import styles from './Sect4_Comp1.module.css';
import Img1 from '../../../images/runkeeper-interval-before-1.jpg';


const Before1 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <img src={Img1} alt="Runkeeper early version on phone" />
        <p>Participants set the timer, but didn't realize it automated the workout</p>
      </div>
    </div>
  );
};
export default Before1;