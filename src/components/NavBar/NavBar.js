import React from 'react';
import Logo from '../../images/header-logo.svg';
import styles from './NavBar.module.css';
import Nav from '../Nav/Nav';

const NavBar = (props) => {
    const path = props.location.pathname
    const contentStyle = path === '/' ? {justifyContent: 'flex-end'} : {justifyContent: 'space-between'}
    return (
        <header className={styles.header}>
            <div className={styles.pattern}></div>
            <div className={styles.content} style={contentStyle}>
                {path !== '/' ? <img className={styles.logo} src={Logo} alt="Danielle Ryce logo" /> : null}
                <Nav />
            </div>
        </header>
    )
}

export default NavBar;