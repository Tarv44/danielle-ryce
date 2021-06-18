import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = (props) => {
    return (
        <nav className={styles.nav}>
            <NavLink className={styles.link} to={'/projects'}>projects.</NavLink>
            <NavLink className={styles.link} to={'/about'}>about.</NavLink>
            <NavLink className={styles.link} to={'/contact'}>contact.</NavLink>
        </nav>
    )
}

export default Nav;