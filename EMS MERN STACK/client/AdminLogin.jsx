// import React from 'react';
// import './assets/login.css';

// function Login(){
//     return (
//         <>
//         <div className="login-page">
//             <div className="form">
//                 <div className="login">

//                     <div className="login-header">
//                         <h3>LOGIN</h3>
//                     </div>
//                 </div>

//                 <form className="login-form" method="post">
//                     <input type="text" placeholder="Enter Username" />
//                     <input type="password" placeholder="Enter Password" />
//                     <button>login</button>

//                     <p className="message">
//                         Not Registered? <a href="Signup">Create an account</a>
//                     </p>
//                 </form>

//             </div>
//         </div>
//         </>
//     );
// }
// export default Login;

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './assets/login.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate=useNavigate()

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Define pattern format for username and password
        // const usernamePattern = /^[a-zA-Z0-9]+$/;
        // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const usernamePattern = "admin";
        const passwordPattern = "Admin123";

        // Check if username and password match pattern format
        if (!username.match(usernamePattern)) {
            setErrorMessage('Invalid Username. Please try again');
            return;
        }

        if (!password.match(passwordPattern)) {
            setErrorMessage('Invalid Password. Please try again.');
            return;
        }

        // If both username and password match pattern format, redirect to home page
       // window.location.href = '/';
       navigate('/AdminHome')
    };

    return (
        <>
        <div className='back'>
            <div className="login-page">
            {errorMessage && <p>{errorMessage}</p>}
                <div className="form">
                    <div className="login">

                        <div className="login-header">
                            <h3>LOGIN</h3>
                        </div>

                    </div>

                    
                    <form className="login-form" onSubmit={handleSubmit} >
                        <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter Username" />
                        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter Password" />
                         <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
};

export default AdminLogin;
