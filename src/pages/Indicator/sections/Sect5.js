import React, { useContext, useEffect, useState } from 'react';
import styles from './Sect5.module.css';
import gblStyles from '../../../global.module.css';
import Logo from '../../../images/indicator-sect5-logo.svg';
import Heading from '../../../images/indicator-sect5-heading.svg';
import Body from '../../../images/indicator-sect5-body.svg';
import Body2 from '../../../images/indicator-body-mobile.svg';
import Pallette from '../../../images/indicator-sect5-pallette.svg';
import Pallette2 from '../../../images/indicator-pallette-mobile.svg';
import Pattern from '../../../images/indicator-sect5-pattern.svg';
import MobileContext from '../../../mobile.context';
import handleResize from '../../../handle-resize';

const Sect5 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 526)
  useEffect(() => {
    const callback = () => {
      setIsMobile(window.innerWidth < 526)
    }
    handleResize(callback)
  })
  const mobileDisplay = (
    <div className={styles.styleGuide}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img src={Logo} alt="Indicator logo" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <img src={Heading} alt="Example heading text" />
          </div>
          <div className={styles.pattern}>
            <img src={Pattern} alt="Pattern"/>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.body}>
            <img src={Body2} alt="Example body text" />
          </div>
          <div className={styles.pallette}>
            <img src={Pallette2} alt="Pallette"/>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <section className={styles.sect5}>
      <div className={`${gblStyles.csIntro} ${gblStyles.hPad}`}>
        <h3>4. The Green Room</h3>
        <p>The script’s been written, edits have been made...it’s getting close to showtime! Time for hair and makeup to get her ready for the stage.</p>
        <p>I wanted the branding for <i>Indicator</i> to feel reliable yet relaxed, as well as inspiring. I decided to incorporate shades of green as the primary color to reflect growth. </p>
      </div>
      {!isMobile ? <div className={styles.styleGuide}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src={Logo} alt="Indicator logo" />
            </div>
            <div className={styles.head_typ}>
              <div className={styles.heading}>
                <img src={Heading} alt="Example heading text" />
              </div>
              <p className={styles.typo}>Typography</p>
            </div>
          </div>
          <div className={styles.right}>
            <img src={Body} alt="Example body text" />
          </div>
        </div>
        <div className={styles.bottom}>
          <div>
            <div className={styles.pallette}>
              <img src={Pallette} alt="Pallette"/>
            </div>
            <p>Color Palette</p>
          </div>
          <div>
            <div className={styles.pattern}>
              <img src={Pattern} alt="Pattern"/>
            </div>
            <p>Pattern & Illustration Style</p>
          </div>
        </div>
      </div> : mobileDisplay}
    </section>
  )
}

export default Sect5;