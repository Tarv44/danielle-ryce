import React, { useEffect, useState } from 'react';
import gblStyles from '../../../global.module.css';
import FullReport from '../../../components/FullReport';
import LargeCarousel from '../../../components/CSLargeCarousel/CSLargeCarousel';
import data from '../data/sect4_data';
import handleResize from '../../../handle-resize';


const Sect4 = () => {
  const [isVert, setIsVert] = useState(window.innerWidth<=1200)
  const weight = {fontWeight: 500}
  const divStyles = {
    paddingTop: 40,
    paddingBottom: 40,
  }
  const hrStyle = {
    marginTop: 35, 
    marginBottom: 35,
    marginRight: 'var(--cs-padding-horiz)',
    marginLeft: 'var(--cs-padding-horiz)',
    border: '0.5px solid #2285C5'
  }
  useEffect(() => {
    handleResize(() => setIsVert(window.innerWidth<=1200))
  }, [isVert])
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
        {!isVert && <LargeCarousel carousel_data={data.large} />}
        {isVert && <>
          <LargeCarousel carousel_data={data.int_before} />
          <LargeCarousel carousel_data={data.int_after} />
          <hr style={hrStyle}/>
          <LargeCarousel carousel_data={data.track_before} />
          <LargeCarousel carousel_data={data.track_after} />
        </>}
      </div>
      <div style={{marginRight: 68, marginLeft: 68}}>
        <FullReport url='https://miro.com/app/board/o9J_lCrrSxk=/'/>
      </div>
      
    </section>
  )
}

export default Sect4;