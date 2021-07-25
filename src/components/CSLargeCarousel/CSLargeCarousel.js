import React, {useEffect, useState} from 'react';
import CarouselScreen from './CarouselScreen';
import CarouselIndex from '../CarouselIndex';
import styles from './CSLargeCarousel.module.css';
import handleResize from '../../handle-resize';

const LargeCarousel = ({carousel_data}) => {
  const [index, setIndex] = useState(0)
  const [isVert, setIsVert] = useState(window.innerWidth <= 1200)

  const handleLeft = () => {
    if (index === 0 ) setIndex(carousel_data.length-1)
    else setIndex(index-1)
  }

  const handleRight = () => {
    if (index === carousel_data.length-1) setIndex(0)
    else setIndex(index+1)
  }

  useEffect(() => {
    handleResize(() => setIsVert(window.innerWidth <= 1200))
  }, [isVert])
  return (
    <section className={styles.section}>
      <CarouselScreen 
        data={carousel_data}
        index={index}
        handleLeft={handleLeft}
        handleRight={handleRight}
        setIndex={setIndex}
      />
      {!isVert && <CarouselIndex 
        setIndex={setIndex}
        arrowsOff={true}
        index={index}
        length={carousel_data.length}
      />}
    </section>
  )
}

export default LargeCarousel;