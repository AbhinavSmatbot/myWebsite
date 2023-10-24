
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
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
    <Header/>
    <Home/>
    <Footer/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Contact />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App