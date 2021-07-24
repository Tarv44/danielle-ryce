import React, {useContext, useEffect} from 'react';
import Banner from '../../images/landing-banner.svg';
import Logo from '../../images/header-logo.svg';
import MissionSect from '../../components/page_landing/MissionSect/MissionSect';
import CardSect from '../../components/page_landing/CardSect/CardSect';
import SayHelloSect from '../../components/page_landing/SayHelloSect/SayHelloSect';
import styles from './Landing.module.css';
import MobileContext from '../../mobile.context';

const Landing = () => {
    const {isMobile} = useContext(MobileContext)
    return (
        <>
            <header className={styles.header}>
                <div className={styles.bannerContainer}>
                    {isMobile && <div>
                        <img src={Logo} />
                        <h2>Your Friendly Neighborhood UX Designer</h2>    
                    </div>}
                    {!isMobile && <img src={Banner} alt="Text stating 'Danielle Ryce, your friendly neighborhood ux designer'"/>}
                </div>
            </header>
            <main className={styles.main}>
                <MissionSect />
                <CardSect />
                <SayHelloSect />
            </main>
        </>
    )
}

export default Landing;