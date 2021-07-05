import React from 'react';
import Banner from '../../images/landing-banner.svg';
import MissionSect from '../../components/MissionSect/MissionSect';
import CardSect from '../../components/CardSect/CardSect';
import SayHelloSect from '../../components/SayHelloSect/SayHelloSect';
import styles from './Landing.module.css';

const Landing = () => {
    return (
        <>
            <header>
                <div className={styles.bannerContainer}>
                    <img src={Banner} alt="Text stating 'Danielle Ryce, your friendly neighborhood ux designer'"/>
                </div>
            </header>
            <main>
                <MissionSect />
                <CardSect />
                <SayHelloSect />
            </main>
        </>
    )
}

export default Landing;