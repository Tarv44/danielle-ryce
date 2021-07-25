import React from 'react';
import BeforeAfterDesktop from '../../../images/keller-before-after2-desktop.svg';
import BeforeAfterMobile1 from '../../../images/keller-before-after2-mobile-1.svg';
import styles from './Sect4_Comp2.module.css';

const Component2 = () => {
  return (
    <div className={styles.div}>
      <img className={styles.desktop} src={BeforeAfterDesktop} alt="Before and after of Keller Website" />
      <img className={styles.mobile} src={BeforeAfterMobile1} alt="Before and after of Keller Website" />
    </div>
  )
}

export default Component2;