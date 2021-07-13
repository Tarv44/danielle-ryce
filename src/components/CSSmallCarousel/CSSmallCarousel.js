import React, {useState} from 'react';
import styles from './CSSmallCarousel.module.css';
import CarouselIndex from '../CarouselIndex';

const QuoteCarousel = ({cards}) => {
  const length = cards.length
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.carousel}>
      {cards[index]}
      <CarouselIndex 
        length={length}
        index={index}
        setIndex={setIndex}
      />
    </div>
  )
}

export default QuoteCarousel;