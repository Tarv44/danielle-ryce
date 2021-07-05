import React from 'react';
import Arch from '../images/arch1.svg';
import {Link} from 'react-router-dom';
import styles from './SayHelloSect.module.css';
import gblStyles from '../global.module.css';

const SayHelloSect = () => {
  return (
    <section className={styles.section}>
      <img 
        style={{marginBottom: 30}} 
        src={Arch} 
        alt="Colorful arch stating 'You wouldn't dare leave without saying hello, would you?'"
      />
      <Link className={gblStyles.button} to="/contact">Say Hello</Link>
    </section>
  )
}

export default SayHelloSect;