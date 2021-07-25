import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import styles from './CarouselIndex.module.css';

const CarouselIndex = (props) => {
  const {length, index, setIndex, arrowsOff} = props;
  const circles = []
  for (let i = 0; i < length; i++) {
    circles.push(
      <button key={i} onClick={() => setIndex(i)}>
        <FaCircle key={i} style={{opacity: index === i && 1}} className={styles.circle}/>
      </button>
    )
  }

  const handleLeft = () => {
    if (index === 0) setIndex(length-1)
    else setIndex(index-1)
  }
  const handleRight = () => {
    if (index === length-1) setIndex(0)
    else setIndex(index+1)
  }
  return (
    <div className={styles.index}>
      {!arrowsOff && <AiFillCaretLeft onClick={handleLeft} className={styles.arrowLeft} />}
      {circles}
      {!arrowsOff && <AiFillCaretRight onClick={handleRight} className={styles.arrowRight} />}
    </div>
  )
}

export default CarouselIndex;