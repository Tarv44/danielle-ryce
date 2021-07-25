import React from 'react';
import styles from './Sect4_Comp1.module.css';
import Img3 from '../../../images/runkeeper-interval-before-3.jpg';

const Before3 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <img src={Img3} alt="Runkeeper early version on phone" />
        <p>Another thought the interval timer would count down up here</p>
      </div>
    </div>
  );
};
export default Before3;