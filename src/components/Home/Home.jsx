import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/home.css';
import Tooltip from '@mui/material/Tooltip';
import Logo from '../../assets/images/HomePage/1.JPG';
import ins from '../../assets/images/HomePage/insta.svg';
import mess from '../../assets/images/HomePage/messa.svg';
import what from '../../assets/images/HomePage/whaeee.svg';

import { IoMdSend } from 'react-icons/io';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';

import Skill from '../../pages/Skill/Skill';
import Contact from '../../pages/Contact/Contact';
import Project from '../../pages/Project/Project';
import Exprience from '../../pages/About/About';
import Education from '../../pages/Education/Education';
import resume from '../../assets/pdf/Abhinav-9425939732n.pdf';
import {BiDownload} from "react-icons/bi";


function Home() {
  return (
    <>
    <div className='full-width pull-left mono' style={{marginTop:"100px"}}>
       <div className='mainDiveHome mono'>
          <div className='mainDiveHomeLeft'>
               <div className='all-center'>
                 <h1>Hi I am </h1>
                 <h1 style={{fontWeight:'600'}}>Abhinav Pandey</h1>
                 <p style={{fontWeight:'600'}}>Expriences in Web development knowledge,producing quality work.</p>
               </div>
               <div className='all-center'>
               <a href={resume} download><button type="button" style={{marginRight:"3px"}} className="btn btn-primary mb-3">Download CV <BiDownload style={{fontSize:"22px"}}/></button></a>
               <Link to="mailto:abhinav.smatbot@gmail.com"><button type="button" className="btn btn-primary mb-3">Contact Me <IoMdSend style={{fontSize:"22px"}}/></button></Link>
               </div>
               <div className='socialMedis'>
               <Tooltip title="WhatsApp"><div className='socialMedisIcon'><Link to={'https://api.whatsapp.com/send?phone=+91 9425939732&text=Hello'} target="_blank"><img src={what} alt='WhatsApp' style={{borderRadius:'50%'}} width={"30px"}/></Link></div></Tooltip>
               <Tooltip title="Instagram"> <div className='socialMedisIcon'><Link target="_blank" to={'https://instagram.com/abhinav_1234567?igshid=OGQ5ZDc2ODk2ZA=='}><img src={ins} alt='Instagram' style={{borderRadius:'50%'}} width={"30px"}/></Link></div></Tooltip>
               <Tooltip title="Messanger"> <div className='socialMedisIcon'><Link target="_blank" to={'https://www.facebook.com/profile.php?id=100008736905381&mibextid=2JQ9oc'}><img src={mess} alt='Messanger' style={{borderRadius:'50%'}} width={"30px"}/></Link></div></Tooltip>
               <Tooltip title="FaceBook"><div className='socialMedisIcon'><Link target="_blank" to={'https://www.facebook.com/profile.php?id=100008736905381&mibextid=2JQ9oc'}><BsFacebook color='blue' fontSize={'30px'} /></Link></div></Tooltip>
               <Tooltip title="Linkdin"><div className='socialMedisIcon'><Link target="_blank" to={'https://www.linkedin.com/in/abhinav-pandey-b2a733193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}><AiFillLinkedin color='blue' fontSize={'30px'} /></Link></div></Tooltip>
                {/* <div><Link><AiFillLinkedin color='blue' fontSize={'20px'} /></Link></div> */}
               </div>

          </div>
          <div className='mainDivHomeRight'>
            <div className='all-center'>
               <img src={Logo} alt='' style={{borderRadius:'50%'}} width={"90%"}/>
            </div>
          </div>
       </div>
    </div>
    <Project/>
    <Skill/>
    <Exprience/>
    <Education/>
    <div className='full-width'>
    <Contact/>
    </div>
    
    </>
  )
}

export default Home