import React, { useState } from 'react';
import axios from 'axios';
import './assets/feedback.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Feedback() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [feedback, setFeedback] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/Feedback', { name, email, feedback })
            .then(result => {
                console.log(result)
                navigate('/Feedback')
                alert('Thank You For Your Feedback!')
                window.location.reload()
            })
            .catch(err => console.log(err))
    }


    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [feedback, setFeedback] = useState('');

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert('Thank You For Your Feedback!');
    // };

    return (
        <>
            <Navbar />
            <div className='back'>
                <div className="row">
                    <div className='column'>
                        <form onSubmit={Submit} className="feedback-form">
                            <h1>EVENT FEEDBACK</h1>
                            <div className="mb-3 lbl">
                                <label htmlFor="inputEmail4" className="form-label"> Name</label>
                                <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="form-control" id="inputName" />
                            </div>
                            <div className="mb-3 lbl">
                                <label htmlFor="inputPassword4" className="form-label"> Email</label>
                                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="inputemail" />
                            </div>

                            <div className="mb-3 lbl">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label"> Feedback</label>
                                <textarea className="form-control" name="feedback" onChange={(e) => setFeedback(e.target.value)} id="inputfeedback" rows="3"></textarea>
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="btn btn-success w-100" value="Submit" name='Submit'>SUBMIT</button>
                            </div>

                        </form>
                    </div>
                    <div className="column">
                        <div className='feed'></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Feedback;


{/* <div classNameName="FeedbackPage">
            <h1>event feedback</h1>
            <form onSubmit={handleSubmit}>
                <div classNameName="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
                <div classNameName="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div classNameName="form-group">
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(event) => setFeedback(event.target.value)}
                        required
                    />
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div> */}