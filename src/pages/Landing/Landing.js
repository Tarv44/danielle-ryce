import React from 'react';
import Banner from '../../images/landing-banner.svg';
import MissionSect from '../../components/page_landing/MissionSect/MissionSect';
import CardSect from '../../components/page_landing/CardSect/CardSect';
import SayHelloSect from '../../components/page_landing/SayHelloSect/SayHelloSect';
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