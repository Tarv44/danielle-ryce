import React from 'react';
import styles from './CSInterviews.module.css';
import QuoteCarousel from '../CSQuoteCarousel/CSQuoteCarousel';

const Interviews = ({content, quotes}) => {
  return (
    <div className={styles.intvw}>
      <div className={styles.content}>
        <h4>User Interviews</h4>
        {content}
      </div>
      <QuoteCarousel 
        quotes={quotes}
      />
    </div>
  )
}

export default Interviews;