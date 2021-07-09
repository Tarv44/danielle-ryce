import React from 'react';
import styles from './ProgressTabs.module.css';
import ProgressBar from './ProgressBar';

const ProgressTabs = ({titles, index, setIndex}) => {
  const selected = {
    color: 'var(--var-drk-purple)',
    textDecoration: 'underline solid'
  }
  const headings = titles.map((t, i) => (
    <button 
      style={index === i ? selected : null} 
      key={i}
      onClick={() => setIndex(i)}
    >
      {t}
    </button>
  ))
  return (
    <div className={styles.progressBar}>
      <div className={styles.headings}>
        {headings}
      </div>
      <ProgressBar index={index} />
    </div>
  )
}

export default ProgressTabs;