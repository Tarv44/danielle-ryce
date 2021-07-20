import React from 'react';
import gblStyles from '../../../global.module.css';
import FullReport from '../../../components/FullReport';


const Sect4 = () => {
  const weight = {fontWeight: 500}
  const divStyles = {
    background: 'var(--color-bg-grey)',
    paddingTop: 40,
    paddingBottom: 40,
  }
  return (
    <section style={{marginBottom: 150}}>
      <div className={`${gblStyles.csIntro} ${gblStyles.hPad}`}>
        <h3>3. Get It Up and Runnin'</h3>
        <p>We’re lacing up sneakers, filling up our water bottle, and it’s almost time to hit the pavement. But first, we can’t forget to warm up! </p>
        <p>After applying Runkeeper’s styling to the wireframes, I completed some user testing to see if <b>a)</b> <span style={weight}>the workout feature was easy to use overall,</span> <b>b)</b> <span style={weight}>the purpose of the features were clear,</span> and <b>c)</b> <span style={weight}>users understood all the vocabulary.</span></p>
        <p>The participants appreciated the intuitive nature of the feature, the customization options, and how it felt like they had a personal trainer.</p>
        <p>See how I addressed the top 2 sticking points below:</p>
      </div>
      <div style={{marginBottom: 25,...divStyles}}>
        <h2>Carousel</h2>
      </div>
      <FullReport url='https://miro.com/app/board/o9J_lCrrSxk=/'/>
    </section>
  )
}

export default Sect4;