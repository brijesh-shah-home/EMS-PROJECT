import React from 'react';
import './assets/home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Evento from './Evento';


function Home() {
    return (
        <>
        <Navbar/>
            <div className='main-section'>
                <div className="home-content">
                    <h1>The Simplest Way To Host All Your Events.</h1><h3>Experience Stress-free Event Planning with our Website.</h3><br />
                    <div className='btn-group'>
                        <button>GET STARTED</button>
                    </div>
                </div>
            </div>
            <Evento/>
            <Footer/>
        </>
    )
}

export default Home;