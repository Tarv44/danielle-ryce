import React from 'react';
import gblStyles from '../../../global.module.css';
import LargeCarousel from '../../../components/CSLargeCarousel/CSLargeCarousel';
import Component1 from '../components/Sect4_Comp1';
import Component2 from '../components/Sect4_Comp2';
import FullReport from '../../../components/FullReport';


const Sect4 = () => {
  const weight = {fontWeight: 500}
  const divStyles = {
    paddingTop: 40,
    paddingBottom: 40,
  }
  const imgStyles = {
    borderRadius: 10,
    paddingTop: 14,
    paddingRight: 23,
    paddingBottom: 8,
    paddingLeft: 22,
    background: '#ffffff'
  }

  const carousel_data = [
    {
      component: <Component1 />,
      color: 'var(--color-bg-blue)'
    },
    {
      component: <Component2 />,
      color: 'var(--color-bg-blue)'
    },
  ]
  return (
    <section style={{marginBottom: 150}}>
      <div className={`${gblStyles.csIntro} ${gblStyles.hPad}`}>
        <h3>3. Fine Tuning</h3>
        <p>Let’s see how this resonates. To make sure this website really sings, it needs to be as fit as a fiddle. So, <span style={weight}>I put it to the test</span>, user testing that is.</p>
        <p><span style={weight}>I walked through a handful of tasks with participants</span> that included things like exploring the homepage, shopping for a violin, favoriting an item, and scheduling an appointment.</p>
        <p>The testing uncovered a handful of sticking points, so I resolved them in the final iteration: </p>
      </div>
      <div style={{marginBottom: 25,...divStyles}}>
        <LargeCarousel 
          carousel_data={carousel_data}
        />
      </div>
      <FullReport url='https://miro.com/app/board/o9J_lLyqxfI=/' color='var(--color-bg-grey)'/>
    </section>
  )
}

export default Sect4;