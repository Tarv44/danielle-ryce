import React, { useContext } from 'react';
import styles from './CSInterviews.module.css';
import SmallCarousel from '../CSSmallCarousel/CSSmallCarousel';
import QuoteCard from '../CSQuoteCard/CSQuoteCard';
import Dropdown from '../CSDropdown/CSDropdown';
import MobileContext from '../../mobile.context';

const Interviews = ({content, quotes, margin, needs}) => {
  const {isMobile} = useContext(MobileContext)
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
      {isMobile && <Dropdown 
        needs={needs}
        single={true}
      />}
    </div>
  )
}

export default Interviews;