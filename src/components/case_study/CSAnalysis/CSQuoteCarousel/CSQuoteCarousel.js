import React, {useState} from 'react';
import styles from './CSQuoteCarousel.module.css';
import CarouselIndex from '../../../CarouselIndex';

const QuoteCarousel = ({quotes}) => {
  const length = quotes.length
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    setIndex(index === 0 ? length-1 : index-1)
  }

  const handleRight = () => {
    setIndex(index === length-1 ? 0 : index+1)
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.card}>
        <h5>They said things like:</h5>
        <hr />
        <div className={styles.content}>
          <img src={quotes[index].img} alt="Interviewee" />
          <p>{quotes[index].quote}</p>
        </div>
        <hr />
      </div>
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