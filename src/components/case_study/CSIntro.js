import React from 'react';
import styles from './CSIntro.module.css';

const Intro = (props) => {
  return (
    <section className={styles.intro}>
      <div className={styles.header}>
        <h2>{props.title}</h2>
        <h4>Role: {props.role}</h4>
      </div>
      <div className={styles.content}>
        <img
          className={styles.img} 
          src={props.img} 
          alt={props.alt}
          style={{background: props.color}} 
        />
        <div className={styles.summary}>
          <div>
            <h3>Background</h3>
            <p>{props.background}</p>
          </div>
          <div>
            <h3>Objective</h3>
            <p>{props.objective}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro;