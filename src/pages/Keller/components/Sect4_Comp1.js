import React from 'react';
import BeforeAfterDesktop from '../../../images/keller-before-after1-desktop.svg';
import BeforeAfterMobile from '../../../images/keller-before-after1-mobile.svg';
import styles from './Sect4_Comp1.module.css';

const Component1 = () => {
  return (
    <div className={styles.div}>
      <img className={styles.desktop} src={BeforeAfterDesktop} alt="Before and after of Keller Website" />
      <img className={styles.mobile} src={BeforeAfterMobile} alt="Before and after of Keller Website" />
    </div>
  )
}

export default Component1;