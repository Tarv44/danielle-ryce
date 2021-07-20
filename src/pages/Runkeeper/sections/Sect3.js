import React from 'react';
import gblStyles from '../../../global.module.css';
import Component1 from '../components/Sect3_Comp1';
import Component2 from '../components/Sect3_Comp2';
import Wireframes from '../../../images/runkeeper-wireframes.svg';
import WireframeLink from '../../../components/WireframeLink';

const Sect3 = () => {
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 150
  }
  const divStyle = {
    background: 'var(--color-bg-blue)',
    width: '100%',
    paddingTop: 40,
    paddingBottom: 40,
    marginBottom: 50
  }
  const wireframeStyle = {
    background: '#ffffff',
    padding: 20
  }
  return (
    <section style={sectionStyle} className={gblStyles.csIntro}>
      <div className={gblStyles.hPad}>
        <h3>2. Time To Hit The Ground Running</h3>
        <p>What exactly will this workout feature include? What do users truly need, versus what I had originally anticipated? I utilized some common designer practices to define the feature:</p>
        <Component1 />
        <Component2 />
        <p>These exercises helped me build the following wireframes:</p>
      </div>
      <div className={gblStyles.hPad} style={divStyle}>
        <img style={wireframeStyle} src={Wireframes} alt="Runkeeper wireframes" />
      </div>
      <WireframeLink url='https://www.figma.com/file/9SVHn32Kq8pioYk6kpOdui/Runkeeper-Wireframes?node-id=0%3A1' />
    </section>
  )
}

export default Sect3;