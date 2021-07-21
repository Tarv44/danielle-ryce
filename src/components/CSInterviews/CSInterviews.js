import React from 'react';
import styles from './CSInterviews.module.css';
import SmallCarousel from '../CSSmallCarousel/CSSmallCarousel';
import QuoteCard from '../CSQuoteCard/CSQuoteCard';

const Interviews = ({content, quotes, margin}) => {
  const cards = quotes.map((q, i) => (
    <QuoteCard
      margin={margin}
      img={q.img}
      quote={q.quote}
    />
  ))
  return (
    <div className={styles.intvw}>
      <div className={styles.content}>
        <h4>User Interviews</h4>
        {content}
      </div>
      <SmallCarousel 
        cards={cards}
      />
    </div>
  )
}

export default Interviews;