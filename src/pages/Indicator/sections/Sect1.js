import React from 'react';
import IndicatorDevices from '../../../images/indicator-devices.png';
import Header from '../../../components/CSHeader/CSHeader';
import Intro from '../../../components/CSIntro/CSIntro';
import Devices from '../../../images/indicator-devices2.png';

const Sect1 = () => {
  return (
    <section>
      <Header
        title='Indicator'
        color='var(--color-green)'
        img={IndicatorDevices}
        alt='Cell phones with Indicator App on screen'
        link='https://www.figma.com/proto/EZu4q3fOwTNKDVQ2qcl3lp/Indicator-Prototype?node-id=163%3A901&scaling=scale-down&page-id=163%3A900'
        />
      <Intro 
        title='Build Mvp For New App
        Branding & Logo'
        role='UX Designer / Dec-Feb ‘20-’21'
        img={Devices}
        alt='Phones with Indicator App on screen'
        color='var(--color-green)'
        title1='Objective'
        title2='Final Solution'
        background='For the final project of Designlab’s UX Academy, we were prompted to create an app. As an independent musician myself, I personally know how overwhelming it feels to keep up with business related tasks. My motivation for Indicator is to help artists succeed.'
        objective='Monitor tangible results in their dashboard by tracking certain statistics. Receive suggested action items to boost these numbers. Connection with a real-world manager to help them out that extra mile.'
      />
    </section>
  )
}

export default Sect1;