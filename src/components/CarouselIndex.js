import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import styles from './CarouselIndex.module.css';

const CarouselIndex = (props) => {
  const {length, index, handleLeft, handleRight} = props;
  const circles = []
  for (let i = 0; i < length; i++) {
    circles.push(<FaCircle key={i} style={{opacity: index === i && 1}} className={styles.circle}/>)
  }
  return (
    <div className={styles.index}>
      <AiFillCaretLeft onClick={handleLeft} className={styles.arrowLeft} />
      {circles}
      <AiFillCaretRight onClick={handleRight} className={styles.arrowRight} />
    </div>
  )
}

export default CarouselIndex;