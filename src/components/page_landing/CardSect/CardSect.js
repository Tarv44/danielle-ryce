import React from 'react';
import CaseCard from '../../CaseCard/CaseCard';
import KausDevices from '../../../images/kaus-devices.svg';
import RunkeeperDevices from '../../../images/runkeeper-devices.svg'
import KellerDevices from '../../../images/keller-devices.svg'
import IndicatorDevices from '../../../images/indicator-devices.svg'
import styles from './CardSect.module.css';

const CardSect = () => {
  return (
    <section className={styles.sect}>
      <div className={styles.container}>
        <CaseCard 
          title={'Indicator'}
          tagline={'Guiding artists in the right direction'}
          link={'/indicator'}
          color={'green'}
          image={IndicatorDevices}
          alt='Cell phones with Indicator App on screen'
        />
        <CaseCard 
          title={'Keller Strings'}
          tagline={'An ecommerce site for New Orleans’ violin shop'}
          link={'/keller-strings'}
          color={'blue'}
          image={KellerDevices}
          alt='Laptop with Keller Strings on screen'
        />
        <CaseCard
          title={'Kaus Insurance'}
          tagline={'Shopping for insurance doesn’t have to be painful'}
          link={'/kaus-insurance'} 
          color={'pink'}
          image={KausDevices}
          alt='Cell phone and laptop with Kaus on screen'
        />
        <CaseCard
          title={'Runkeeper'}
          tagline={'Building runner’s strength one workout at a time'}
          link={'/runkeeper'} 
          color={'purple'}
          image={RunkeeperDevices}
          alt='Cell phones with Runkeeper app on screen'
        />
      </div>
    </section>
  )
}

export default CardSect;