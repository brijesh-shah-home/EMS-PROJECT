import React from 'react';
import './assets/footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Footer() {
    return (
        <div>
            <footer>
                <div id="About">
                    <div className="intro">
                        <h2>The Spot of all Things Happening in Your City</h2><br /><br />
                        <p>Welcome to our Stress-free Event Planning Website! Are you tired of the endless hours spent on event     planning, only to end up with a chaotic and disorganized event? Look no further! Our website offers a one-stop solution for all your event planning needs.
                            <br /><br />
                            Our team of experienced event planners will take care of every detail, from venue selection to vendor coordination, leaving you free to enjoy the moment. We understand that every event is unique, and we work closely with you to ensure that your vision is brought to life.Our user-friendly website makes it easy to plan your event from start to finish.
                        </p>
                    </div>
                    <div className="row">
                        <ul>

                            <li>
                            <a href='#'> <i className="bi bi-instagram"></i></a>
                         
                            </li>
                            <li>
                                <a href='#'><i className="bi bi-github"></i></a>
                            </li>
                            <li>
                                <a href='#'><i className="bi bi-envelope"></i></a>
                            </li>
                            <li>
                                <a href='#'><i className="bi bi-linkedin"></i> </a>
                            </li>
                            <li>
                                <a href='#'><i className="bi bi-whatsapp"></i></a>
                            </li>

                        </ul>
                    </div>

                    <div className="row">
                        <p>EVENT SPOTTER Copyright © 2023 Event Spotter - All Rights
                        Reserved | | Devloped By: Brijesh Shah</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
