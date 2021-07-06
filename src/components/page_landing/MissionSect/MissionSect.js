import React from 'react';
import SEE from '../../../images/see-for-yourself.svg';
import Arrow from '../../../images/arrow.svg';
import styles from './MissionSect.module.css';

const Sect1 = () => {
  return (
    <section className={styles.sect1}>
      <p className={styles.sect1text}>
          I aim to <span className={styles.purple}>
              encourage,
          </span> <span className={styles.blue}>
              excite,
          </span> and <span className={styles.green}>
              amplify
          </span> others’ voices through <span className={styles.pink}>
              fresh,
          </span> <span className={styles.purple}>
              welcoming
          </span> design.
      </p>
      <img src={SEE} alt="Text stating 'See for yourself'"/>
      <img src={Arrow} alt="Arrow pointing downwards" className={styles.arrow}/>
    </section>
  )
}

export default Sect1;