import React from 'react';
import styles from './Sect4_Before5.module.css';
import Img2 from '../../../images/runkeeper-track-before-2.svg';

const Before5 = (props) => {
  return (
    <div className={styles.div}>
      <img src={Img2} alt="Runkeeper early version on phone" />
      <div>
        <p>Suggestions included changing the title</p>
        <div>
          <p>Making it simpler to confirm or edit</p>
          <p>Including some sort of onboarding or info icon for this feature specifically </p>
        </div>
      </div>
    </div>
  );
};
export default Before5;