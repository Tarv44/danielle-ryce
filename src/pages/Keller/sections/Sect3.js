import React from 'react';
import gblStyles from '../../../global.module.css';
import Component1 from '../components/Sect3_Comp1';
import Component2 from '../components/Sect3_Comp2';
import Wireframes from '../../../images/keller-wireframes.svg';
import WireframeLink from '../../../components/WireframeLink';

const Sect3 = () => {
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 150
  }
  const divStyle = {
    background: 'var(--color-bg-grey)',
    width: '100%',
    paddingTop: 40,
    paddingBottom: 40,
    marginBottom: 50
  }
  return (
    <section style={sectionStyle} className={gblStyles.csIntro}>
      <div>
        <div className={gblStyles.hPad}>
          <h3>2. Stringing It All Together</h3>
          <p>Now it’s time to take all this information and make some sense out of it! I implemented a number of design exercises, such as creating personas & empathy maps. However overall, these two practices had the most impact on the construction of the website:</p>
        </div>
        <Component1 />
        <Component2 />
        <p style={{margin: 50, marginLeft: 0, marginRight: 0}} className={gblStyles.hPad}>I used Mary Jean’s user flow, purchasing a violin, to create my wireframes:</p>
      </div>
      <div className={gblStyles.hPad} style={divStyle}>
        <img src={Wireframes} alt="Runkeeper wireframes" />
      </div>
      <WireframeLink url='https://www.figma.com/file/f0w1l08VglVg84oHteiZ6r/Keller-Strings-Wireframes-Mary-Jean-User-Flow-Copy?node-id=0%3A1' />
    </section>
  )
}

export default Sect3;