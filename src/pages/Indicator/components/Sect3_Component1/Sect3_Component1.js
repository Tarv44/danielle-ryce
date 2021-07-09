import React from 'react';
import styles from './Sect3_Component1.module.css';
import Image from '../../../../images/indicator_carousel1.svg';

const Component1 = () => {
  return (
    <div className={styles.comp1}>
      <img src={Image} alt="Wireframes" />
    </div>
  )
}

export default Component1;