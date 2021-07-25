import React from 'react';
import styles from './AboutResume.module.css';
import gblStyles from '../../../global.module.css';
import ARCH from '../../../images/arch2.svg';

const AboutResume = () => {
  return (
    <section className={styles.resume}>
      <img src={ARCH} alt="Colorful arch with text that states 'You'd rather see a normal resume, wouldn't you'"/>
      <a  target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1zmdmv00xxqsQNGOw6XMUxUs9OhFVIhgvlWnZLPKufZ8/edit?usp=sharing" className={gblStyles.button}>See My Resume</a>
    </section>
  )
}

export default AboutResume;