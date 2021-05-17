import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = (props) => {
    return (
        <nav className={styles.nav}>
            <NavLink to={'/projects'}>projects.</NavLink>
            <NavLink to={'/about'}>about.</NavLink>
            <NavLink to={'/contact'}>contact.</NavLink>
        </nav>
    )
}

export default Nav;