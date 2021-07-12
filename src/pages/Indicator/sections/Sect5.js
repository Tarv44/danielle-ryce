import React from 'react';
import styles from './Sect5.module.css';
import gblStyles from '../../../global.module.css';
import Logo from '../../../images/indicator-sect5-logo.svg';
import Heading from '../../../images/indicator-sect5-heading.svg';
import Body from '../../../images/indicator-sect5-body.svg';
import Pallette from '../../../images/indicator-sect5-pallette.svg';
import Pattern from '../../../images/indicator-sect5-pattern.svg';

const Sect5 = () => {
  return (
    <section className={styles.sect5}>
      <div className={`${gblStyles.csIntro} ${gblStyles.hPad}`}>
        <h3>4. The Green Room</h3>
        <p>The script’s been written, edits have been made...it’s getting close to showtime! Time for hair and makeup to get her ready for the stage.</p>
        <p>I wanted the branding for <i>Indicator</i> to feel reliable yet relaxed, as well as inspiring. I decided to incorporate shades of green as the primary color to reflect growth. </p>
      </div>
      <div className={styles.styleGuide}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src={Logo} alt="Indicator logo" />
            </div>
            <div className={styles.head_typ}>
              <div className={styles.heading}>
                <img src={Heading} alt="Example heading text" />
              </div>
              <p>Typography</p>
            </div>
          </div>
          <div className={styles.right}>
            <img src={Body} alt="Example body text" />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.pallette}>
            <img src={Pallette} alt="Pallette"/>
            <p>Color Palette</p>
          </div>
          <div className={styles.pattern}>
            <img src={Pattern} alt="Pattern"/>
            <p>Pattern & Illustration Style</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sect5;