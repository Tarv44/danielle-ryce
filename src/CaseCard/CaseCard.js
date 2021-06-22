import React from 'react';
import styles from './CaseCard.module.css';
import {Link} from 'react-router-dom';

const CaseCard = (props) => {
  const colors = {
    blue: 'var(--color-blue)',
    purple: 'var(--color-drk-purple)',
    pink: 'var(--color-pink)',
    green: 'var(--color-green)'
  }

  return (
    
    <Link style={{backgroundColor: colors[props.color]}} className={styles.card}>
      <img className={styles.image} src={props.image} />
      <div style={{backgroundColor: colors[props.color]}} className={styles.cover}>
        <h2>{props.title}</h2>
        <h4>{props.tagline}</h4>
      </div>
    </Link>
  )
}

export default CaseCard;