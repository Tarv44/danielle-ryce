import React from 'react';
import styles from './Sect4.module.css';
import WF_full from '../../../images/indicator-sect4-full.svg';
import FullReport from '../../../components/FullReport';

const Sect4 = () => {
  return (
    <section className={styles.sect4}>
      <div className={styles.intro}>
        <h3>3. K.I.S.S.</h3>
        <p>Okay, so I thought I had a solution, but what did other musicians think? <span className={styles.boldish}>I put Indicator to the test!</span></p>
        <p>I selected 5 more musicians out of my personal circles to test whether Indicator <b>a)</b> would alleviate some uncertainty and overwhelm by helping musicians feel like they were taking control of their career and <b>b)</b> was easy to use and understand.</p> 
        <p>The majority of the feedback revolved around the onboading. To eliminate any confusion about the purpose and capabilities of the app, <span className={styles.boldish}>it was suggested a few times over that I “dumb it down.”</span></p>
        <p>See how this stupid decided to keep it simple:</p>
      </div>
      <div>
        <div className={styles.headings}>
          <h4 className={styles.before}>Before</h4>
          <h4 className={styles.after}>After</h4>
        </div>
        <div className={styles.wireframe}>
          <img src={WF_full} alt="Before and after wireframes"/>
          <p className={styles.p1}>Cute, but a little confusing. Participants were not clear on what an Indicator was</p>
          <p className={styles.p2}>Clear description of what indicators are</p>
          <p className={styles.p3}>Way too many options, causes overwhelm</p>
          <p className={styles.p4}>Separated into “packs” based off of user’s long term goals</p>
          <p className={styles.p5}>Option to make their own “pack” via this card</p>
        </div>
      </div>
      <FullReport url='' />
    </section>
  )
}

export default Sect4;