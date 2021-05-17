import React from 'react';
import Pattern from '../images/header-pattern.svg';
import Logo from '../images/header-logo.svg';
import styles from './Header.module.css';
import Nav from '../Nav/Nav';

const Header = (props) => {
    const path = props.location.pathname
    const contentStyle = path === '/' ? {justifyContent: 'flex-end'} : {justifyContent: 'space-between'}
    return (
        <header className={styles.header}>
            <img className={styles.pattern} src={Pattern} />
            <div className={styles.content} style={contentStyle}>
                {path !== '/' ? <img className={styles.logo} src={Logo} /> : null}
                <Nav />
            </div>
        </header>
    )
}

export default Header;