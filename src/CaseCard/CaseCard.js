import React from 'react';
import styles from './CaseCard.module.css';

const CaseCard = (props) => {
  const colors = {
    blue: 'var(--color-blue)',
    purple: 'var(--color-drk-purple)',
    pink: 'var(--color-pink)',
    green: 'var(--color-green)'
  }

  const opaqueColors = {
    blue: 'var(--op-color-blue)',
    purple: 'var(--op-color-drk-purple)',
    pink: 'var(--op-color-pink)',
    green: 'var(--op-color-green)'
  }

  return (
    <div style={{backgroundColor: colors[props.color]}} className={styles.card}>
      <img className={styles.image} src={props.image} />
      <div style={{backgroundColor: opaqueColors[props.color]}} className={styles.cover}>
        <h2>{props.title}</h2>
        <h4>{props.tagline}</h4>
      </div>
    </div>
  )
}

export default CaseCard;