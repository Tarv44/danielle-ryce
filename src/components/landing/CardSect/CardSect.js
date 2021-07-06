import React from 'react';
import CaseCard from '../../CaseCard/CaseCard';
import KausDevices from '../../../images/kaus-devices.svg';
import Wayfarer from '../../../images/iMac.svg'
import styles from './CardSect.module.css';

const CardSect = () => {
  return (
    <section className={styles.sect}>
      <div className={styles.container}>
        <CaseCard 
          color={'blue'}
          image={KausDevices}
          alt=''
          title={'Kaus Insurance'}
          tagline={'Shopping for insurance doesn’t have to be painful.'}
        />
        <CaseCard 
          color={'purple'}
          image={Wayfarer}
          alt=''
          title={'Kaus Insurance'}
          tagline={'Shopping for insurance doesn’t have to be painful.'}
        />
        <CaseCard 
          color={'pink'}
          image={Wayfarer}
          alt=''
          title={'Kaus Insurance'}
          tagline={'Shopping for insurance doesn’t have to be painful.'}
        />
        <CaseCard 
          color={'green'}
          image={KausDevices}
          alt=''
          title={'Kaus Insurance'}
          tagline={'Shopping for insurance doesn’t have to be painful.'}
        />
      </div>
    </section>
  )
}

export default CardSect;