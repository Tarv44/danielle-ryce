import React from 'react';
import Logo from '../../images/header-logo.svg';
import styles from './NavBar.module.css';
import Nav from '../Nav/Nav';

const NavBar = (props) => {
    const home = props.location.pathname === '/'
    const about = props.location.pathname === '/about'
    const contentStyle = home ? {justifyContent: 'flex-end'} : {justifyContent: 'space-between'}
    return (
        <header className={styles.header}>
            <div className={styles.pattern}></div>
            <div className={styles.content} style={contentStyle}>
                {!home ? <img className={styles.logo} src={Logo} alt="Danielle Ryce logo" /> : null}
                <Nav className={styles.nav} home={home} about={about} />
            </div>
        </header>
    )
}

export default NavBar;