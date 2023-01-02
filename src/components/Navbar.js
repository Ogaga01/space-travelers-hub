import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import logo from '../images/planet.png'
import Missions from './Missions';
import Profile from './Profile';
import Rockets from './Rockets';
import styles from '../sass/_navbar.module.scss'

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
          textDecoration: isActive ? 'underline' : 'none',
        };  
    }

    return (
      <>
        <header className={styles.navbar}>
          <div className={styles.info}>
            <img src={logo} alt="site-logo" className={styles.logo} />
            <h1 className={styles.title}>Space Travelers' Hub</h1>
          </div>
          <nav>
            <NavLink style={navLinkStyles} className={styles["nav-link"]} to="/">
              Rockets
            </NavLink>
            <NavLink style={navLinkStyles} className={styles["nav-link"]} to="Missions">
              Missions
            </NavLink>
            <NavLink style={navLinkStyles} className={styles["nav-link"]} to="Profile">
              My Profile
            </NavLink>
          </nav>
            </header>
            <Routes>
                <Route path='/' element={<Rockets />} />
                <Route path='Missions' element={<Missions />} />
                <Route path='Profile' element={<Profile/>} />
            </Routes>
      </>
    );
};

export default Navbar;