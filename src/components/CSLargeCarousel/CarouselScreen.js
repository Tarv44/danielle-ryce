import React from 'react';
import styles from './CarouselScreen.module.css';
import Left from '../../images/arrow-left.svg';
import Right from '../../images/arrow-right.svg';

const CarouselScreen = (props) => {
  const {index, data, handleLeft, handleRight} = props
  return (
    <div style={{background: data[index].color}} className={styles.screen}>
      <div className={styles.display}>
        <button style={{display: index === 0 && 'none' }} className={styles.left} onClick={handleLeft}><img src={Left} alt="left-arrow"/></button>
        <div className={styles.component}>
          {data[index].component}
        </div>
        <button style={{display: index === data.length-1 && 'none' }} className={styles.right} onClick={handleRight}><img src={Right} alt="right-arrow"/></button>
      </div>
    </div>
  )
}

export default CarouselScreen;