import React from 'react';
import BeforeAfter from '../../../images/keller-before-after2.svg';
import styles from './Sect4_Comp2.module.css';

const Component2 = () => {
  return (
    <div className={styles.div}>
      <div className={styles.pLeft}>
        <p>Participants didn’t notice the option to ‘Schedule an Appointment’</p>
        <p>They also felt the flow of the page was a little odd...</p>
      </div>
      <img src={BeforeAfter} alt="Before and after of Keller Website" />
      <div className={styles.pRight}>
        <p>Added the ability to ‘Schedule an Appointment’ to the subtitle of the page</p>
        <p>Rearranged the page so that the Schedule an Appointment card didn’t interrupt the flow of product</p>
        <p>Kept the option to schedule the appointment via this card for visibility’s sake</p>
      </div>
    </div>
  )
}

export default Component2;