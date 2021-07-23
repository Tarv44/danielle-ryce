import React from 'react';
import styles from './Sect4_Comp1.module.css';
import Img1 from '../../../images/runkeeper-track-after-1.svg';
import Img2 from '../../../images/runkeeper-track-after-2.svg';
import Img3 from '../../../images/runkeeper-track-after-3.svg';

const Component4 = (props) => {
  return (
    <div className={styles.div}>
      <div>
        <img src={Img1} alt="" />
        <p>Changed title to “How’d You Do?” & added sentences to show past tense</p>
      </div>
      <div>
        <img src={Img2} alt="" />
        <p>To confirm, users select the checkmark. To correct it, they select the ‘x.’</p>
      </div>
      <div>
        <img src={Img3} alt="" />
        <p>Also added a help icon which opens up a short onboarding popup</p>
      </div>
    </div>
  );
};
export default Component4;