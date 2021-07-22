import React, {useState} from 'react';
import gblStyles from '../../../global.module.css';
import LargeCarousel from '../../../components/CSLargeCarousel/CSLargeCarousel';
import NewDevices from '../../../images/keller-new-devices.svg';
import OldDevices from '../../../images/keller-old-devices.svg';

// import styles from './Sect5.module.css';

const Sect5 = () => {
  const weight = {fontWeight: 500}
  const sectStyle = {
    display:'flex', 
    flexDirection:'column', 
    alignItems: 'center',
    marginBottom: 150
  }
  const divStyle ={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const Component1 = (
    <div style={divStyle}>
      <img src={NewDevices} alt="New Keller design on various devices"/>
    </div>
  )
  const Component2 = (
    <div style={divStyle}>
      <img style={{maxHeight: '70vh'}} src={OldDevices} alt="Old Keller design on various devices"/>
    </div>
  )
  const carousel_data = [
    {
      component: Component1,
      color: 'var(--color-bg-grey)' 
    },
    {
      component: Component2,
      color: 'var(--color-bg-grey)' 
    },
  ]
  return (
    <section style={sectStyle} className={gblStyles.csIntro}>
      <div className={gblStyles.hPad}>
        <h3>4. Tying Up Loose Ends</h3>
        <p>For the final touches, I applied the new branding to the wireframes, and fully designed each screen. The branding needed to accentuate the existing logo and highlight Keller Strings’ <span style={weight}>elegance, warmth, and expertise</span>.</p>
        <p>I have to admit, it’s quite a glow-up. Check out the final result and peek the <i>before</i> here:</p>
      </div>
      <div style={{width: '100%'}}>
        <LargeCarousel 
          carousel_data={carousel_data}
        />
      </div>
    </section>
  )
}

export default Sect5;