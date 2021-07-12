import { styles } from 'ansi-colors';
import React from 'react';
import gblStyles from '../../../global.module.css';
import Signup from '../../../images/indicator-signup.svg';
import PrototypeLink from '../../../components/CSPrototypeLink';

const Sect6 = () => {
  const signupStyle = {
    background: 'var(--color-bg-blue)',
    paddingTop: 69,
    paddingBottom: 69,
    marginBottom: 50
  }
  return (
    <section>
      <div style={{marginBottom: 50}} className={`${gblStyles.csIntro} ${gblStyles.hPad}`}>
        <h3>5. Opening Night</h3>
        <p>Draw back the curtains, it’s showtime! View the final result here:</p>
      </div>
      <div style={signupStyle}>
        <img style={{width: 270}} src={Signup} alt="Indicator signup screen" />
      </div>
      <PrototypeLink url="" />
    </section>
  )
}

export default Sect6;