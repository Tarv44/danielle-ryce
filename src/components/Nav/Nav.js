import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';
import Exit from '../../icons/exit.svg';
import MobileContext from '../../mobile.context';

const Nav = ({home, about, setIsOpen}) => {
    const {isMobile} = useContext(MobileContext)
    const closeMenu = () => {
        if (isMobile) setIsOpen(false)
    }
    return (
        <nav className={styles.nav}>
            <button className={styles.exit} onClick={() => setIsOpen(false)}>
                <img src={Exit} alt="Exit Icon"/>
            </button>
            <NavLink onClick={closeMenu} className={home ? `${styles.active} ${styles.link}`: styles.link} to={'/'}>projects.</NavLink>
            <NavLink onClick={closeMenu} className={about ? `${styles.active} ${styles.link}`: styles.link} to={'/about'}>about.</NavLink>
            <a onClick={closeMenu} className={styles.link} href={'mailto:daniellekryce@gmail.com'}>contact.</a>
        </nav>
    )
}

export default Nav;