import React, {useState, useEffect, useContext} from 'react';
import Logo from '../../images/header-logo.svg';
import styles from './NavBar.module.css';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import handleResize from '../../handle-resize';
import {FiMenu} from 'react-icons/fi';
import MobileContext from '../../mobile.context';

const NavBar = (props) => {
    const {isMobile} = useContext(MobileContext)
    const mobileBreak = 877
    const [isOpen, setIsOpen] = useState(false)
    const home = props.location.pathname === '/'
    const about = props.location.pathname === '/about'
    const contentStyle = home ? {justifyContent: 'flex-end'} : {justifyContent: 'space-between'}
    useEffect(() => {
        const callback = () => {
            if (window.outerWidth < mobileBreak) {
                setIsOpen(false)
            } else {
                setIsOpen(true)
            }
        }
        handleResize(callback)
    }, [])
    return (
        <header className={styles.header}>
            <div className={styles.pattern}>
                <button onClick={() => setIsOpen(true)} className={styles.menu}>
                    <FiMenu style={{stroke: "#ffffff"}} />
                </button>
            </div>
            {isOpen && <div className={styles.content}>
                <div className={styles.mobilePattern}></div>
                <div className={styles.logoNav} style={contentStyle}>
                    {!home ? <Link to={'/'}><img className={styles.logo} src={Logo} alt="Danielle Ryce logo" /></Link> : null}
                    <Nav setIsOpen={setIsOpen} className={styles.nav} home={home} about={about} />
                </div>
            </div>}
        </header>
    )
}

export default NavBar;