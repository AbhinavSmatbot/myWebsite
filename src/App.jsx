
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'tailwindcss/base';
// import 'tailwindcss/components';
// import 'tailwindcss/utilities';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';

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
          {/* <Route path="About_Us" element={<NoPage />} /> */}
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

  </>
  )
}

export default App