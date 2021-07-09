import React from 'react';
import styles from './CSQuoteCard.module.css';

const QuoteCard = ({img, quote}) => {
  return (
    <div className={styles.card}>
      <h5>They said things like:</h5>
      <hr />
      <div className={styles.content}>
        <img src={img} alt="Interviewee" />
        <p>{quote}</p>
      </div>
      <hr />
    </div>
  )
}

export default QuoteCard;