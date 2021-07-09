import React from 'react';
import styles from './CarouselScreen.module.css';
import Left from '../../../images/arrow-left.svg';
import Right from '../../../images/arrow-right.svg';
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'

const CarouselScreen = (props) => {
  const {index, data, handleLeft, handleRight} = props
  return (
    <div className={styles.screen}>
      <div className={styles.display}>
        <button style={{display: index === 0 && 'none' }} className={styles.left} onClick={handleLeft}><img src={Left} alt="left-arrow"/></button>
        {data[index].content && (
          <div className={styles.content}>
            <h4>{data[index].title}</h4>
            {data[index].content}
          </div>
        )}
        <div className={styles.component}>
          {data[index].component}
        </div>
        <button style={{display: index === data.length-1 && 'none' }} className={styles.right} onClick={handleRight}><img src={Right} alt="right-arrow"/></button>
      </div>
      <div className={styles.prevNext}>
        {index !== 0 && <button
          className={styles.previous}
          onClick={handleLeft}
        ><BsArrowLeft /> <u>Previous: {data[index-1].title} </u></button>}
        {index !== data.length-1 && <button
          className={styles.next}
          onClick={handleRight}
        ><u>Next: {data[index+1].title} </u><BsArrowRight /> </button>}
      </div>
    </div>
  )
}

export default CarouselScreen;