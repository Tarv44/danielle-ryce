import React from 'react';
import styles from './Sect4_Comp1.module.css';
import Img1 from '../../../images/runkeeper-interval-before-1.jpg';
import Img2 from '../../../images/runkeeper-interval-before-2.jpg';
import Img3 from '../../../images/runkeeper-interval-before-3.jpg';

const Component1 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <img src={Img1} alt="" />
        <p>Participants set the timer, but didn't realize it automated the workout</p>
      </div>
      <div>
        <img src={Img2} alt="" />
        <p>One participant thought the timer set the break time between exercises</p>
      </div>
      <div>
        <img src={Img3} alt="" />
        <p>Another thought the interval timer would count down up here</p>
      </div>
    </div>
  );
};
export default Component1;