import React from 'react';
import styles from './ClosingCarouselTabs.module.css';
import ArwLeft from '../../images/arrow-left.svg';
import ArwRight from '../../images/arrow-right.svg';
import Challenge from '../../icons/challenge.png';
import Perk from '../../icons/perk.png';
import Lesson from '../../icons/lesson.png';

const Tabs = ({index, setIndex}) => {
  const handleLeft = () => {
    if (index===0) setIndex(2);
    else setIndex(index-1)
  }
  const handleRight = () => {
    if (index===2) setIndex(0);
    else setIndex(index+1)
  }
  return (
    <div className={styles.tabsContainer}>
      <button onClick={handleLeft}><img src={ArwLeft} alt="Left Arrow"/></button>
      <button className={index===0 ? `${styles.tab} ${styles.selected}` : styles.tab} onClick={() => setIndex(0)}>
        <h3>Challenge</h3>
        <img className={styles.icon} src={Challenge} alt="Mountain" />        
      </button>
      <button className={index===1 ? `${styles.tab} ${styles.selected}` : styles.tab} onClick={() => setIndex(1)}>
        <h3>Perk</h3>
        <img className={styles.icon} src={Perk} alt="Award Medal" />        
      </button>
      <button className={index===2 ? `${styles.tab} ${styles.selected}` : styles.tab} onClick={() => setIndex(2)}>
        <h3>Lesson</h3>
        <img className={styles.icon} src={Lesson} alt="Brain" />
      </button>
      <button onClick={handleRight}><img src={ArwRight} alt="Right Arrow"/></button>
    </div>
  )
}

export default Tabs;