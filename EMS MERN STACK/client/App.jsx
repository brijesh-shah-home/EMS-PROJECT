import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Event from './Event';
import CreateEvent from './CreateEvent';
import UpdateEvent from './UpdateEvent';
import Feedback from './Feedback';
import Register from './Register';
// import Login from './Login';
// import Navbar from './Navbar';
// import Footer from './Footer';
import Home from './Home';
import LoginForm from './LoginForm';
import AdminLogin from './AdminLogin';
import ViewBooking from './ViewBooking';
import AdminHome from './AdminHome';
import ViewFeedback from './ViewFeedback';
import ViewEvents from './ViewEvents';
import AdminEvents from './AdminEvents';

function App() {

  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<LoginForm/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Event' element={<Event />}></Route>
          <Route path='/Feedback' element={<Feedback />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/CreateEvent' element={<CreateEvent />}></Route>
          <Route path='/UpdateEvent/:id' element={<UpdateEvent />}></Route>
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/AdminHome' element={<AdminHome />} />
          <Route path='/ViewBooking' element={<ViewBooking />} />
          <Route path='/ViewFeedback' element={<ViewFeedback />} />
          <Route path='/ViewEvents' element={<ViewEvents />} />
          <Route path='/AdminEvents' element={<AdminEvents />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
