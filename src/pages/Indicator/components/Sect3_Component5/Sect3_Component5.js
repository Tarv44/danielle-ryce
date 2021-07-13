import React from 'react';
import styles from './Sect3_Component5.module.css';
import Image from '../../../../images/indicator_carousel5.png';

const Component5 = () => {
  return (
    <div className={styles.comp5}>
      <div className={styles.left}>
        <div><p>User selects certain metrics to track </p></div>
        <div><p>These numbers notate progress or regression</p></div>
        <div><p>The app autopopulates suggested actions to take to keep the number going up, or stop it from falling down</p></div>
        <div><p>The user has the option to connect with a “Manager” as a consultant for further insight as well as accountability</p></div>
      </div>
      <img src={Image} alt="Early sketch of Indicator app"/>
      <div className={styles.right}>
        <div><p>Voila! The name is born!</p></div>
        <div><p>Trifecta achieved: Accountability, guidance, and ability to track progress!</p></div>
        <div><p>Trifecta achieved: Accountability, guidance, and ability to track progress!</p></div>
        <div><p>To simplify the app, I ended up relinquishing the Calendar & Resources features</p></div>
      </div>
    </div>
  )
}

export default Component5;