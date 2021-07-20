import React from 'react';
import Header from '../../../components/CSHeader/CSHeader';
import Intro from '../../../components/CSIntro/CSIntro';
import KausMac from '../../../images/kaus-mac.svg';
import KausPhones from '../../../images/kaus-phones.svg';

const Sect1 = () => {
  return (
    <section>
        <Header 
          title='Kaus'
          color='var(--color-blue)'
          img={KausMac}
          alt='Display for Kaus on laptop'
          link='https://www.figma.com/proto/sejtmtXMAHA7F5zi4egkCS/Kaus-High-Fidelity-Screens?page-id=0%3A1&node-id=2%3A0&viewport=337%2C296%2C0.125&scaling=scale-down-width'
        />
        <Intro 
          title='Responsiv Ecommerce Website
          Full Branding'
          role='UX Designer / Dec-Feb ‘20-’21 '
          img={KausPhones}
          color='var(--color-blue)'
          background='Kaus has been selling insurance policies business to business for the past 30 years. They sell prepared packages, with 350+ offerings, which allows them to provide insurance at low rates. Kaus wants to expand by selling policies to individuals.'
          objective='To tap into the digital age, they know they need to reach a younger audience. Kaus is willing to break industry standards to provide their customers with a simple, efficient insurance shopping experience.'
        />
    </section>
  )
}

export default Sect1;