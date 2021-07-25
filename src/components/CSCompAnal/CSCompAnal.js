import React, { useContext } from 'react';
import styles from './CSCompAnal.module.css';
import Dropdown from '../CSDropdown/CSDropdown';
import MobileContext from '../../mobile.context';


const CompAnal = ({content, img, annoying, good}) => {
  const {isMobile} = useContext(MobileContext)
  return (
    <div className={styles.compAnal}>
      <div>
        <h4>Competitive Analysis</h4>
        {content}
      </div>
      <img src={img} alt="Competing companies' logos"/>
      {isMobile && <Dropdown 
        annoying={annoying}
        good={good}
        single={true}
      />}
    </div>
  )
}

export default CompAnal;