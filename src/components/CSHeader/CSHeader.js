import React from 'react';
import styles from './CSHeader.module.css';

const Header = (props) => {
  return (
    <section className={styles.header}>
      <div className={styles.intro}>
        <h1>{props.title}</h1>
        <h2>Case Study</h2>
        <img 
          style={{background: props.color}} 
          className={styles.img} 
          src={props.img} 
          alt={props.alt} 
        />
      </div>
      <p>View prototype <u><a
        target="_blank" 
        href={props.link}
        >here</a></u>.
      </p>
    </section>
  )
}

export default Header;