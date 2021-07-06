import React from 'react';
import styles from './IconCard.module.css';

const IconCard = ({title, icon, caption}) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <img src={icon} alt={`${title} icon`} />
      {caption}
    </div>
  )
}

export default IconCard;