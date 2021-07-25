import React, {useState} from 'react';
import styles from './CSClosingCarousel.module.css';
import CarouselIndex from '../CarouselIndex';
import Tabs from './ClosingCarouselTabs';

const ClosingCarousel = ({challenge, perk, lesson}) => {
  const [index, setIndex] = useState(1);
  const carousel = [challenge, perk, lesson]
  return (
    <div className={styles.closing}>
      <h2>What I'm Taking Away From This Project...</h2>
      <div className={styles.div}>
        <Tabs 
          index={index}
          setIndex={setIndex}
        />
        <div className={styles.content}>
          {carousel[index]}
          <CarouselIndex index={index} length={3} setIndex={setIndex} />
        </div>
      </div>
    </div>
  )
}

export default ClosingCarousel;