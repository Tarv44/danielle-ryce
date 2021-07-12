import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = ({home, about}) => {
    return (
        <nav className={styles.nav}>
            <NavLink className={home ? `${styles.active} ${styles.link}`: styles.link} to={'/'}>projects.</NavLink>
            <NavLink className={about ? `${styles.active} ${styles.link}`: styles.link} to={'/about'}>about.</NavLink>
            <a className={styles.link} href={'mailto:daniellekryce@gmail.com'}>contact.</a>
        </nav>
    )
}

export default Nav;