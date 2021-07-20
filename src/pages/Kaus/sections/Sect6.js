import React from 'react';
import gblStyles from '../../../global.module.css';

const Sect6 = () => {
  const flex = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 200
  }
  return (
    <section style={flex} className={`${gblStyles.hPad} ${gblStyles.csIntro}`}>
      <div>
        <h3>5. Reiterate</h3>
        <p style={{marginBottom: 50}}>In my final version, I addressed these concerns with the potential solutions I listed in the affinity map, such as restructuring the Compare Our Policies page and adding a glossary popup. See what I came up with in the <b>final, fully designed prototype</b>:</p>
      </div>
      <a target="_blank" rel="noreferrer" style={{margin: 'auto'}} className={gblStyles.button} href='https://www.figma.com/proto/sejtmtXMAHA7F5zi4egkCS/Kaus-High-Fidelity-Screens?page-id=0%3A1&node-id=2%3A0&viewport=337%2C296%2C0.125&scaling=scale-down-width'>Prototype</a>
    </section>
  )
}

export default Sect6;