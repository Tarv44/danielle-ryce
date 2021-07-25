import React from 'react';
import styles from './Sect4_Before4.module.css';
import Img1 from '../../../images/runkeeper-track-before-1.svg';


const Before4 = (props) => {
  return (
    <div className={styles.div}>
      <img src={Img1} alt="Runkeeper early version on phone" />
      <div>
        <p style={{marginRight: 10}}>The purpose of the popup was unclear to most of the participants</p>
        <div>
          <p><i>“Is it to change the exercises or reps for the next round?”</i></p>
          <p><i>“It shows...what I...did?”</i></p>
        </div>
      </div>
    </div>
  );
};
export default Before4;