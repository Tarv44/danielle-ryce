import React, { useContext } from 'react';
import gblStyles from '../../../global.module.css';
import Signup from '../../../images/indicator-signup.svg';
import PrototypeLink from '../../../components/CSPrototypeLink';
import MobileContext from '../../../mobile.context';

const Sect6 = () => {
  const {isMobile} = useContext(MobileContext)
  const signupStyle = {
    background: 'var(--color-bg-blue)',
    paddingTop: !isMobile ? 69 : 25,
    paddingBottom: !isMobile ? 69 : 25,
    marginBottom: 50
  }
  return (
    <section>
      <div style={{marginBottom: 50}} className={`${gblStyles.csIntro} ${gblStyles.hPad}`}>
        <h3>5. Opening Night</h3>
        <p>Draw back the curtains, it’s showtime! View the final result here:</p>
      </div>
      <div style={signupStyle}>
        <a target="_blank" rel="noreferrer" href='https://www.figma.com/proto/EZu4q3fOwTNKDVQ2qcl3lp/Indicator-Prototype?page-id=163%3A900&node-id=163%3A901&viewport=145%2C66%2C0.06343192607164383&scaling=scale-down'>
          <img style={{width: 270}} src={Signup} alt="Indicator signup screen" />
        </a>
      </div>
      <PrototypeLink url="https://www.figma.com/proto/EZu4q3fOwTNKDVQ2qcl3lp/Indicator-Prototype?page-id=163%3A900&node-id=163%3A901&viewport=145%2C66%2C0.06343192607164383&scaling=scale-down" />
    </section>
  )
}

export default Sect6;