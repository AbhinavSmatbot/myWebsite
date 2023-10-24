
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import 'tailwindcss/base';
// import 'tailwindcss/components';
// import 'tailwindcss/utilities';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
  <>
    <Header/>
    <Home/>
    <Footer/>
  </>
  )
}

export default App