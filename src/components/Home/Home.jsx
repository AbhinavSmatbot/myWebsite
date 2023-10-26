import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/home.css';
import Logo from '../../assets/images/HomePage/1.JPG';


function Home() {
  return (
    <>
    <div className='full-width pull-left mono'>
       <div className='mainDiveHome mono'>
          <div className='mainDiveHomeLeft'>
               <div className='all-center'>
                 <h1>Hi I am </h1>
                 <h1 style={{fontWeight:'600'}}>Abhinav Pandey</h1>
                 <p>I am a developer</p>
               </div>
               <div className='all-center'>
               <button type="button" className="btn btn-primary">Download CV</button>
               <Link to="mailto:abhinav.smatbot@gmail.com.com"><button type="button" className="btn btn-primary m-2">Email Us</button></Link>
               </div>

          </div>
          <div className='mainDivHomeRight'>
            <div className='all-center'>
               <img src={Logo} alt='' style={{borderRadius:'50%'}} width={"90%"}/>
            </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default Home