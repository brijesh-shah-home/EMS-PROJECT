import React from 'react';
import AdminNav from './AdminNav';
import Footer from './Footer';
import './assets/addminhome.css';

function AdminHome() {
    return (
        <>
            <AdminNav />
            <div className="container admin">
                <div className="heading">
                    <h2>Welcome To Event Management System</h2>
                </div>
                

                <div className="marquee">
                    <div className="marquee-content">
                        <div className="marquee-item">
                            <img src="https://e1.pxfuel.com/desktop-wallpaper/649/991/desktop-wallpaper-corporate-event-management-company-lahore.jpg" alt="1"/>
                        </div>

                        <div className="marquee-item">
                            <img src="https://www.niagaracollege.ca/hospitalityandtourism/wp-content/uploads/sites/76/2019/08/i-em.jpg" alt="2"/>
                        </div>

                        <div className="marquee-item">
                            <img src="https://www.eventmobi.com/wp-content/uploads/2017/11/iStock-669853862-1024x710.jpg" alt="3"/>
                        </div>

                        <div className="marquee-item">
                            <img src="https://www.mtievents.com/wp-content/uploads/2019/03/corporate-event-planner.jpg" alt="4"/>
                        </div>

                        <div className="marquee-item">
                            <img src="https://leishman-associates.com.au/wp-content/uploads/2018/09/conference-plan.jpg" alt="5"/>
                        </div>

                        <div className="marquee-item">
                            <img src="https://aaftonline.com/blog/wp-content/uploads/2023/03/Untitled-design-23.jpg" alt="6"/>
                        </div>

                        <div className="marquee-item">
                            <img src="https://www.mywebinar.net/b/en/wp-content/uploads/2022/10/pexels-fauxels-3183183-1024x683.jpg" alt="7"/>
                        </div>

                        <div className="marquee-item">
                            <img src="https://img.timviec.com.vn/2020/09/event-la-gi-2-1.jpg" alt="8"/>
                        </div>

                        <div className="marquee-item">
                            <img src="https://www.nextiz.com/wp-content/uploads/2023/05/event-management-tool.jpg" alt="9"/>
                        </div>

                        <div className="marquee-item">
                            <img src="https://img.timviec.com.vn/2020/09/event-la-gi-2-1.jpg" alt="10"/>
                        </div>
                    </div>
                </div>


                <div className="row align-items-center">
                    <div className="col box">
                        <div className='banner1'>
                            <div className="content">
                                <p id='kit'>Event Management Toolkit</p>
                                <ol>
                                    <li>User Support</li>
                                    <li>View Analytics</li>
                                    <li>Event Creation</li>
                                    <li>Enhanced Control</li>
                                    <li>Manage Registrations</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col box">
                        <div className='banner1'>
                        <div className="content">
                        <p id='kit2'>Messages</p>
                                <ul>
                                    <li>Turning Dreams into Events</li>
                                    <li>Event Excellence, Every Time.</li>
                                    <li>Your Event, Our Commitment</li>
                                    <li>Where Creativity Meets Precision</li>
                                    <li>Seamless Events, Memorable Experiences</li>
                                </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col box">
                        <div className='banner1'>
                        <div className="content">
                        <p id='kit2'>Our Event Management Goal</p>
                            <p id='kit3'>"Events are the Perfect Opportunity to break from the Routine and Experience Something Extraordinary."
                            In the World of Events, it's not about the Destination; it's about the Journey.
                            Every Event is an Opportunity to Make a lasting Impression.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default AdminHome;