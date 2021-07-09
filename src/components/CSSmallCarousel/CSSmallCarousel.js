import React, {useState} from 'react';
import styles from './CSSmallCarousel.module.css';
import CarouselIndex from '../CarouselIndex';

const QuoteCarousel = ({cards}) => {
  const length = cards.length
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    setIndex(index === 0 ? length-1 : index-1)
  }

  const handleRight = () => {
    setIndex(index === length-1 ? 0 : index+1)
  }

  return (
    <div className={styles.carousel}>
      {cards[index]}
      <CarouselIndex 
        length={5}
        index={index}
        handleLeft={handleLeft}
        handleRight={handleRight}
      />
    </div>
  )
}

export default QuoteCarousel;