import React from 'react';
import Banner from '../images/landing-banner.svg';
import MissionSect from '../MissionSect/MissionSect';
import CardSect from '../CardSect/CardSect';
import styles from './Landing.module.css';

const Landing = () => {
    return (
        <>
            <header>
                <div className={styles.bannerContainer}>
                    <img src={Banner} />
                </div>
            </header>
            <main>
                <MissionSect />
                <CardSect />
            </main>
        </>
    )
}

export default Landing;