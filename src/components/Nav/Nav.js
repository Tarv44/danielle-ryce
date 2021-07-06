import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = (props) => {
    return (
        <nav className={styles.nav}>
            <NavLink className={styles.link} to={'/'}>projects.</NavLink>
            <NavLink className={styles.link} to={'/about'}>about.</NavLink>
            <a className={styles.link} href={'mailto:daniellekryce@gmail.com'}>contact.</a>
        </nav>
    )
}

export default Nav;