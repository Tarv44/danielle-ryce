import React from 'react';
import styles from './CSProcess.module.css';
import Wheel from '../../../images/process.svg';

const Process = ({title, desc}) => {
  return (
    <section className={styles.process}>
      <div className={styles.wheel}>
        <img src={Wheel} alt='' />
        <h4>The Process</h4>
      </div>
      <div className={styles.content}>
        <h3>1. {title}</h3>
        {desc}
      </div>
    </section>
  )
}

export default Process;