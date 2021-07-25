import React from 'react';
import gblStyles from '../../../global.module.css';
import Component1 from '../components/Sect3_Comp1';
import Component2 from '../components/Sect3_Comp2';
import Wireframes from '../../../images/runkeeper-wireframes.svg';
import WireframeLink from '../../../components/WireframeLink';
import styles from './Sect3.module.css';

const Sect3 = () => {
  // const horizDisplay = (

  // )
  return (
    <section className={` ${styles.section}`}>
      <div className={`${gblStyles.csIntro} ${gblStyles.hPad} ${styles.div}`}>
        <h3>2. Time To Hit The Ground Running</h3>
        <p>What exactly will this workout feature include? What do users truly need, versus what I had originally anticipated? I utilized some common designer practices to define the feature:</p>
        <Component1 />
        <Component2 />
        <p>These exercises helped me build the following wireframes:</p>
      </div>
      <div className={`${gblStyles.hPad} ${styles.wireframeDiv}`} >
        <img className={styles.wireframe} src={Wireframes} alt="Runkeeper wireframes" />
      </div>
      <WireframeLink url='https://www.figma.com/file/9SVHn32Kq8pioYk6kpOdui/Runkeeper-Wireframes?node-id=0%3A1' />
    </section>
  )
}

export default Sect3;