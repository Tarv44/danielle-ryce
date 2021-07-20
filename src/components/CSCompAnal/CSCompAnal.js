import React from 'react';
import styles from './CSCompAnal.module.css';


const CompAnal = ({content, img}) => {
  return (
    <div className={styles.compAnal}>
      <div>
        <h4>Competitive Analysis</h4>
        {content}
      </div>
      <img src={img} alt="Competing companies' logos"/>
    </div>
  )
}

export default CompAnal;