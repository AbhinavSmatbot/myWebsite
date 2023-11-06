
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Project  from './pages/Project/Project';
import Skill from './pages/Skill/Skill';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import Logout from './pages/Logout/Logout';

const App = () => {
  return (
  <>
    
    <BrowserRouter>
      <Header/>
      <ToastContainer style={{ top: '60px' }} position="top-center" autoClose={3000} closeButton={true}/>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path='project' element={<Project/>} />
          <Route path='skill' element={<Skill/>} />
          <Route path="login" element={<Login/>}/>
          <Route path="registration" element={<Registration/>}/>
          <Route path="exprience" element={<About/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path='logout' element={<Logout/>} />
         
        </Route>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>

  </>
  )
}

export default App