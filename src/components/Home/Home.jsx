import React from 'react';
// import { Link } from 'react-router-dom';
import '../Home/home.css';
import Logo from '../../assets/images/HomePage/1.JPG';


function Home() {
  return (
    <>
    <div className='full-width pull-left'>
       <div className='mainDiveHome'>
          <div className='mainDiveHomeLeft'>
               <div>
                 <h1>Hi I am </h1>
                 <h1>Abhinav Pandey</h1>
                 <p>I am a developer</p>
               </div>
               <div>
               <button type="button" className="btn btn-primary">Download CV</button>
               <a href="/"><button type="button" className="btn btn-primary m-2">Email Us</button></a>
               </div>

          </div>
          <div className='mainDivHomeRight'>
            <div>
               <img src={Logo} alt='' style={{borderRadius:'50%'}} width={"100%"}/>
            </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default Home