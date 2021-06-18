import React from 'react';
import SEE from '../images/see-for-yourself.svg';
import Arrow from '../images/arrow.svg';
import styles from './MissionSect.module.css';

const Sect1 = () => {
  return (
    <section className={styles.sect1}>
      <p className={styles.sect1text}>
          I aim to <span className={styles.purpleUndln}>
              encourage,
          </span> <span className={styles.blueUndln}>
              excite,
          </span> and <span className={styles.greenUndln}>
              amplify
          </span> others’ voices through <span className={styles.pinkUndln}>
              fresh,
          </span> <span className={styles.purpleUndln}>
              welcoming
          </span> design.
      </p>
      <img src={SEE}/>
      <img src={Arrow}/>
    </section>
  )
}

export default Sect1;