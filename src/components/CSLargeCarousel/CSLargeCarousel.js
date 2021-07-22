import React, {useState} from 'react';
import CarouselScreen from './CarouselScreen';
import CarouselIndex from '../CarouselIndex';
import styles from './CSLargeCarousel.module.css';

const LargeCarousel = ({carousel_data}) => {
  const [index, setIndex] = useState(0)

  const handleLeft = () => {
    if (index === 0 ) setIndex(carousel_data.length-1)
    else setIndex(index-1)
  }

  const handleRight = () => {
    if (index === carousel_data.length-1) setIndex(0)
    else setIndex(index+1)
  }
  return (
    <section className={styles.section}>
      <CarouselScreen 
        data={carousel_data}
        index={index}
        handleLeft={handleLeft}
        handleRight={handleRight}
      />
      <CarouselIndex 
        setIndex={setIndex}
        arrowsOff={true}
        index={index}
        length={carousel_data.length}
      />
    </section>
  )
}

export default LargeCarousel;