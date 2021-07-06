import React from 'react';
import Arch from '../../../images/arch1.svg';
import styles from './SayHelloSect.module.css';
import gblStyles from '../../../global.module.css';

const SayHelloSect = () => {
  return (
    <section className={styles.section}>
      <img 
        style={{marginBottom: 30}} 
        src={Arch} 
        alt="Colorful arch stating 'You wouldn't dare leave without saying hello, would you?'"
      />
      <a className={gblStyles.button} href="mailto:daniellekryce@gmail.com">Say Hello</a>
    </section>
  )
}

export default SayHelloSect;