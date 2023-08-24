import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import logo from '../Assets/logo_webtoon.png'

const Navbar = () => {
    return (
        <nav className='custom-navbar'>
        <div className='nav-container'>
            <img src={logo} alt='logo' height={100} />
            <ul className='nav-links'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>Accueil</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/about'>À Propos</Link>
                </li>
                {/* ... Autres liens */}
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;
