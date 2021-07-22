import React from 'react';
import BeforeAfter from '../../../images/keller-before-after1.svg';
import styles from './Sect4_Comp1.module.css';

const Component1 = () => {
  return (
    <div className={styles.div}>
      <div className={styles.labels}>
        <h4>Before</h4>
        <h4>After</h4>
      </div>
      <img src={BeforeAfter} alt="Before and after of Keller Website" />
      <p className={styles.p1}>Users didn’t notice the help icon</p>
      <p className={styles.p2}>Added a financing banner to soothe users’ worries about cost</p>
      <p className={styles.p3}>Added the “Are you a beginner?” prompt to catch users’ eyes, and direct them to the info icon</p>
    </div>
  )
}

export default Component1;