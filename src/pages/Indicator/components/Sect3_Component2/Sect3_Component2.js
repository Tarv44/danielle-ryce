import React from 'react';
import styles from './Sect3_Component2.module.css';
import Image from '../../../../images/indicator_carousel2.png';

const Component2 = () => {
  return (
    <div className={styles.comp2}>
      <div className={styles.left}>
        <div className={styles.div1}><p>Keep track of all areas of business, organized into categories</p></div>
        <div className={styles.div3}><p>To Do list, calendar (for events and tasks), a business plan generator, and manager chat feature </p></div>
      </div>
      <img src={Image} alt="" />
      <div className={styles.div2}><p>Also included in this iteration were spreadsheets, budgeting techniques, social media content calendars, and oh yes, even more.</p></div>
    </div>
  )
}

export default Component2;