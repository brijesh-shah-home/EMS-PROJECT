import React from 'react';
import { Link } from 'react-router-dom';
import './assets/navbar.css';
import logo from './assets/image/logo.png';

function AdminNav() {
    return (
        <>
            <header className="site-header">
                <div className="site-identity">

                    <h1><img src={logo} alt='MyLogo' /><a href="#Home"> EVENT SPOTTER</a></h1>
                </div>
                <nav className="site-navigation">
                    <ul className="nav">
                        <li><Link to={'/AdminHome'}>Home </Link></li>
                        <li><Link to={'/AdminEvents'}>View Events</Link></li>
                        <li><Link to={'/ViewBooking'}>View Booking </Link></li>
                        <li><Link to={'/ViewFeedback'}>View Feedback </Link></li>
                        <li><Link to={'/Login'}>Logout</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default AdminNav;
