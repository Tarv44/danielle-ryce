import React from 'react';
import Behance from '../../icons/behance-mobile.svg'
import Dribble from '../../icons/dribble-mobile.svg'
import LinkedIn from '../../icons/linkedin-mobile.svg'
import Mirror from '../../icons/mirror-mobile.svg'
import styles from './MobileIcons.module.css'

const MobileIcons = (props) => {
  return (
    <div className={styles.icons}>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danielle-ryce/"><img src={LinkedIn} alt="LinkedIn Icon"/></a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danielle-ryce/"><img src={Mirror} alt="Mirror Icon"/></a>
      <a target="_blank" rel="noreferrer" href="https://dribbble.com/daniellekryce"><img src={Dribble} alt="Dribble Icon"/></a>
      <a target="_blank" rel="noreferrer" href="https://www.behance.net/danielleryce"><img src={Behance} alt="Behance Icon"/></a>
    </div>
  );
};
export default MobileIcons;