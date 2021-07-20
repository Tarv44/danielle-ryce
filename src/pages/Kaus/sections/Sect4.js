import React from 'react';
import gblStyles from '../../../global.module.css';
import BW from '../../../images/kaus-wireframes-bw.jpg';
import COLOR from '../../../images/kaus-wireframes-color.jpg';


const Sect4 = () => {
  const weight = {fontWeight: 500}
  const blue = {color: '#2E3F6B'}
  const boldBlue = {...weight, ...blue}
  const divStyles = {
    background: 'var(--color-bg-grey)',
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
  return (
    <section style={{marginBottom: 150}}>
      <div className={`${gblStyles.csIntro} ${gblStyles.hPad}`}>
        <h3>3. Design</h3>
        <p>Next steps are to bring the product to life through branding. I identified a set of brand keywords: <span style={weight}>dependable, simple, and approachable</span>.</p>
        <p>I used these adjectives to guide my stylistic choices, including typography, color palette, photo treatment, etc, and to lead me as I created the <span style={boldBlue}>logo</span> and <span style={boldBlue}>icon set</span>. This included design practices such as setting up a <span style={boldBlue}>moodboard and style guide</span>.</p>
        <p style={{marginBottom: 0}}>I then bring the wireframes to life via high fidelity, fully designed screens, as seen below.</p>
        <p style={{marginTop: 0}}><i>Wait for it, waiiiit for it...</i></p>
      </div>
      <div style={{marginBottom: 25,...divStyles}}>
        <img style={imgStyles} src={BW} alt="Black and white wireframes"/>
      </div>
      <div style={divStyles}>
        <img style={imgStyles} src={COLOR} alt="Colored wireframes"/>
      </div>
    </section>
  )
}

export default Sect4;