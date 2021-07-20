import React from 'react';
import gblStyles from '../../../global.module.css';
import Phone from '../../../images/runkeeper-go-phone.svg';

// import styles from './Sect5.module.css';

const Sect5 = () => {
  const sectStyle = {
    display:'flex', 
    flexDirection:'column', 
    alignItems: 'center',
    marginBottom: 150
  }
  const divStyle = {
    width: '100%', 
    background: 'var(--color-bg-blue)',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 55,
    paddingBottom: 55,
    marginBottom: 42
  }
  const mapLinkStyle = {
    display: 'inline-block',
    background: 'var(--color-bg-grey)',
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 0
  }
  const link = <u><a href='https://www.figma.com/proto/WYDabuc48Pz9uLfrhmLI8F/Runkeeper-Prototype-Copy?page-id=169%3A0&node-id=232%3A5&viewport=132%2C232%2C0.0379241518676281&scaling=scale-down'>here</a></u>
  return (
    <section style={sectStyle} className={gblStyles.csIntro}>
      <div style={{width: '100%'}} className={gblStyles.hPad}>
        <h3>4. Ready, Set, Go!</h3>
        <p>& we’re off! See the prototype on the run {link}: </p>
      </div>
      <div style={divStyle}>
        <a href='https://www.figma.com/proto/WYDabuc48Pz9uLfrhmLI8F/Runkeeper-Prototype-Copy?page-id=169%3A0&node-id=232%3A5&viewport=132%2C232%2C0.0379241518676281&scaling=scale-down'>
          <img src={Phone} alt='Runkeeper Prototype' />
        </a>
      </div>
      <div style={mapLinkStyle}>
        <p style={{margin: 0, fontSize: 18}}>Visit the prototype {link}.</p>
      </div>
    </section>
  )
}

export default Sect5;