import React, { useEffect, useState } from 'react';
import styles from './ProgressTabs.module.css';
import ProgressBar from './ProgressBar';
import handleResize from '../../../handle-resize';

const ProgressTabs = ({titles, index, setIndex, reduce}) => {
  const [showHeadings, setHeadings] = useState(window.innerWidth > 1200)
  const selected = {
    color: 'var(--var-drk-purple)',
    textDecoration: 'underline solid'
  }
  const headings = titles.map((t, i) => (
    <button 
      style={index === i ? selected : null} 
      key={i}
      onClick={() => setIndex(i)}
      className={i === 0 ? styles.notFive : null}
    >
      {t}
    </button>
  ))
  useEffect(() => {
    handleResize(() => setHeadings(window.innerWidth > 1200))
  }, [showHeadings])
  return (
    <div className={styles.progressBar}>
      <div className={styles.headings}>
        {showHeadings ? headings : null}
      </div>
      <ProgressBar index={index} setIndex={setIndex} reduce={titles.length === 4} />
    </div>
  )
}

export default ProgressTabs;