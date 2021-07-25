import React, { useEffect, useState } from 'react';
import styles from './CarouselScreen.module.css';
import Left from '../../images/arrow-left.svg';
import Right from '../../images/arrow-right.svg';
import CarouselIndex from '../CarouselIndex';
import handleResize from '../../handle-resize';

const CarouselScreen = (props) => {
  const [isVert, setIsVert] = useState(window.innerWidth <= 1200)
  const [smallArw, setSmallArw] = useState(window.innerWidth <= 876)
  const {index, data, handleLeft, handleRight, setIndex} = props
  useEffect(() => {
    handleResize(() => setIsVert(window.innerWidth <= 1200))
    handleResize(() => setSmallArw(window.innerWidth <= 876))
  }, [isVert, smallArw])
  return (
    <div style={{background: data[index].color}} className={styles.screen}>
      {data[index].title && <div className={styles.header}>
        <h4>{data[index].title}</h4>
        <h5>{data[index].subtitle}</h5>
      </div>}
      <div className={styles.display}>
        {!isVert && <button style={{display: index === 0 && 'none' }} className={styles.left} onClick={handleLeft}><img src={Left} alt="left-arrow"/></button>}
        <div className={styles.component}>
          {data[index].component}
        </div>
        {!isVert && <button style={{display: index === data.length-1 && 'none' }} className={styles.right} onClick={handleRight}><img src={Right} alt="right-arrow"/></button>}
      </div>
      {isVert && <CarouselIndex length={data.length} index={index} setIndex={setIndex} />}
    </div>
  )
}

export default CarouselScreen;