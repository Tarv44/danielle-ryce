import React from 'react';
import IndicatorDevices from '../../../images/indicator-devices.svg';
import Header from '../../../components/CSHeader/CSHeader';
import Intro from '../../../components/CSIntro/CSIntro';
import Devices from '../../../images/indicator-devices2.svg';

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
        background='Kaus has been selling insurance policies business to business for the past 30 years. They sell prepared packages, with 350+ offerings, which allows them to provide insurance at low rates. Kaus wants to expand by selling policies to individuals.'
        objective='To tap into the digital age, they know they need to reach a younger audience. Kaus is willing to break industry standards to provide their customers with a simple, efficient insurance shopping experience.'
      />
    </section>
  )
}

export default Sect1;