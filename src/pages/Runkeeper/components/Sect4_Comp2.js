import React from 'react';
import styles from './Sect4_Comp2.module.css';
import Img1 from '../../../images/runkeeper-interval-after-1.jpg';
import Img2 from '../../../images/runkeeper-interval-after-2.jpg';
import Img3 from '../../../images/runkeeper-interval-after-3.jpg';

const Component2 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <img src={Img1} alt="" />
        <p>Replaced the clock with a settings icon. Consistent w/settings in running screen</p>
      </div>
      <div>
        <img src={Img2} alt="" />
        <p>Made sure to update the onboarding screens to reflect this change</p>
      </div>
      <div>
        <img src={Img3} alt="" />
        <p>Mirrored the existing settings screen to ensure comprehension</p>
      </div>
    </div>
  );
};
export default Component2;