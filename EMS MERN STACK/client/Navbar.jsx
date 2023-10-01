import React from 'react';
import { Link } from 'react-router-dom';
import './assets/navbar.css';
import logo from './assets/image/logo.png';

function Navbar() {
    return (
        <>
            <header className="site-header">
                <div className="site-identity">

                    <h1><img src={logo} alt='MyLogo' /><a href="#Home"> EVENT SPOTTER</a></h1>
                </div>
                <nav className="site-navigation">
                    <ul className="nav">
                        <li><Link to={'/'}>Home </Link></li>
                        <li><Link to={'/Event'}>Events </Link></li>
                        <li><Link to={'/Feedback'}>Feedback </Link></li>
                        <li><Link to={'/Register'}>Register </Link></li>
                        <li><Link to={'/Login'}>Logout</Link></li>
                        <li><Link to={'/AdminLogin'}>Admin</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
