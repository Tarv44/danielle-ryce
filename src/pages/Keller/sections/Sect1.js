import React from 'react';
import Header from '../../../components/CSHeader/CSHeader';
import Intro from '../../../components/CSIntro/CSIntro';
import KellerMac from '../../../images/keller-laptop.svg';
import KausPhones from '../../../images/keller-phones.svg';

const Sect1 = () => {
  return (
    <section>
        <Header 
          title='Keller Strings'
          color='var(--color-blue)'
          img={KellerMac}
          alt='Display for Keller Strings on laptop'
          link='https://www.figma.com/proto/vZbsmRQB4x5BSzIeUlVtPK/Keller-Strings-Prototype?page-id=0%3A1&node-id=1%3A132&viewport=343%2C359%2C0.125&scaling=scale-down-width'
        />
        <Intro 
          title='Responsiv Ecommerce Website Full Redesign'
          role='UX Designer / 4 Week Sprint / Mar - Apr ’21 '
          img={KausPhones}
          color='var(--color-blue)'
          background='Keller Strings relocated to a new part of town, and they feel like their website needs an upgrade as well! It hasn’t been changed since it was created in 2013, and it’s starting to look outdated.'
          objective='Responsive, ecommerce website that provides all the basic shop information and also streamlines the existing shopping experience. New, elegant & modern branding that reflects their existing logo.'
        />
    </section>
  )
}

export default Sect1;