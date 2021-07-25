import React, { useEffect, useState } from 'react';
import styles from './Sect4.module.css';
import gblStyles from '../../../global.module.css';
import Before from '../../../images/indicator-sect4-before.svg';
import After1 from '../../../images/indicator-sect4-after-1.svg';
import After2 from '../../../images/indicator-sect4-after-2.svg';
import After2Left from '../../../images/indicator-sect4-after-2-left.svg';
import FullReport from '../../../components/FullReport';
import handleResize from '../../../handle-resize';

const Sect4 = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const callback = () => setWidth(window.innerWidth)
    handleResize(callback)
  }, [])
  return (
    <section className={styles.sect4}>
      <div className={`${gblStyles.csIntro} ${styles.intro}`}>
        <h3>3. K.I.S.S.</h3>
        <p>Okay, so I thought I had a solution, but what did other musicians think? <span className={styles.boldish}>I put Indicator to the test!</span></p>
        <p>I selected 5 more musicians out of my personal circles to test whether Indicator <b>a)</b> would alleviate some uncertainty and overwhelm by helping musicians feel like they were taking control of their career and <b>b)</b> was easy to use and understand.</p> 
        <p>The majority of the feedback revolved around the onboading. To eliminate any confusion about the purpose and capabilities of the app, <span className={styles.boldish}>it was suggested a few times over that I “dumb it down.”</span></p>
        <p>See how this stupid decided to keep it simple:</p>
      </div>
      <div>
        <div className={styles.wireframe}>
          <div>
          <h4 className={styles.before}>Before</h4>
            <div className={styles.left}>
              <img className={styles.beforeImg} src={Before} alt="Before wireframes"/>
              <div className={styles.paras1}>
                <p className={styles.p1}>Cute, but a little confusing. Participants were not clear on what an Indicator was</p>
                {width >= 1220 && <p className={styles.p2}>Clear description of what indicators are</p>}
                <p className={styles.p3}>Way too many options, causes overwhelm</p>
              </div>
            </div>
          </div>
          {width < 1220 && <hr />}
          <div>
            <h4 className={styles.after}>After</h4>
            <div className={styles.right}>
              <div>
                {width < 1220 && <p className={styles.p2}>Clear description of what indicators are</p>}
                <img src={After1} alt="After wireframes"/>
                {width >= 1220 && <><p className={styles.p4}>Separated into “packs” based off of user’s long term goals</p>
                <p className={styles.p5}>Option to make their own “pack” via this card</p></>}
              </div>
              <div>
                <img src={width < 1220 ? After2Left : After2} alt="After wireframes" />
                {width < 1220 && <div><p className={styles.p4}>Separated into “packs” based off of user’s long term goals</p>
                  <p className={styles.p5}>Option to make their own “pack” via this card</p></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FullReport url='https://miro.com/app/board/o9J_l9ou9MQ=/' />
    </section>
  )
}

export default Sect4;