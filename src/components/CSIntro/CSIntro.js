import React, { useContext } from 'react';
import styles from './CSIntro.module.css';
import MobileContext from '../../mobile.context';

const Intro = (props) => {
  const {isMobile} = useContext(MobileContext)
  return (
    <section className={styles.intro}>
      <div className={styles.header}>
        <h2 style={{maxWidth: props.titleWidth}}>{props.title}</h2>
        <h4>Role: {props.role}</h4>
      </div>
      <div className={styles.content}>
        {!isMobile && <img
          className={styles.img} 
          src={props.img} 
          alt={props.alt}
          style={{background: props.color}} 
        />}
        <div className={styles.summary}>
          <div>
            <h3>{props.title1 || "Background"}</h3>
            <p>{props.background}</p>
          </div>
          {isMobile && <img
            className={styles.img} 
            src={props.img} 
            alt={props.alt}
            style={{background: props.color}} 
          />}
          <div>
            <h3>{props.title2 || "Objective"}</h3>
            <p>{props.objective}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro;