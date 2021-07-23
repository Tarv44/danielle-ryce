import React from 'react';
import styles from './Sect4_Comp3.module.css';
import Img1 from '../../../images/runkeeper-track-before-1.svg';
import Img2 from '../../../images/runkeeper-track-before-2.svg';

const Component3 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <p>The purpose of the popup was unclear to most of the participants</p>
        <p><i>“Is it to change the exercises or reps for the next round?”</i></p>
        <p><i>“It shows...what I...did?”</i></p>
      </div>
      <img src={Img1} alt="Runkeeper early version on phone" />
      <img src={Img2} alt="Runkeeper early version on phone" />
      <div>
        <p>Suggestions included changing the title</p>
        <p>Making it simpler to confirm or edit</p>
        <p>Including some sort of onboarding or info icon for this feature specifically </p>
      </div>
    </div>
  );
};
export default Component3;