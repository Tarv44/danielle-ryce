import React from 'react';
import styles from './Sect3_Component4.module.css'
import Image from '../../../../images/indicator_carousel4.png'

const Component4 = () => {
  return (
    <div className={styles.comp4}>
      <div className={styles.left}>
        <div>
          <p>User & coach can see what’s going on in the band calendar</p>
        </div>
        <div>
          <p>User works together with coach to create a To-Do list </p>
        </div>
        <div>
          <p>Coach can check in to make sure the user is staying up to date on their list </p>
        </div>
      </div>
      <img src={Image} alt="Early sketch of Indicator"/>
      <div className={styles.right}>
        <p>Can send the coach questions at any point via chat feature </p>
      </div>
    </div>
  )
}

export default Component4;