import React, {useState} from 'react'
// import Registration from '../..pages/Registration/registration';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import email from '../../assets/images/Login/email.png';
import lock from '../../assets/images/Login/lock.png';
import profile from "../../assets/images/Login/icon.jpg";
import { IoMdSend } from 'react-icons/io';
import '../Login/Login.css';
// import what from '../../assets/images/HomePage/whaeee.svg';

const toaaobject = {
     position: "top-center",
   autoClose: 4000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: false,
   progress: undefined,
   theme: "colored",
}

function Login() {

    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const loginpl = function(e){
     e.preventDefault()
        if (!emaillog|| !passwordlog) {
          //   alert("Complete all the fields!!!")
            toast.error("Please complete all the fields!",toaaobject);
            return
        }

    }

    return (
        <form>
            <div className='main-Dive'>
                <div className='sub-main-div'>
                    <div>
                        <div className='imgs'>
                            <div className='container-image'>
                                <img src={profile} alt='profile' className='profile'/>
                            </div>
                        </div>
                        <div>
                            <h1 className='LHeader'>Login</h1>
                            <div>
                                <img src={email} alt="emial" className='email' />
                                <input type="email" placeholder='Enter Email-id' value={emaillog} className='fill-Div' onChange={(event) => setEmaillog(event.target.value) }/>
                            </div>
                            <div className='second-input'>
                                <img src={lock} alt='password' className='email' />
                                <input type="password" placeholder='Enter Password' value={passwordlog} className='fill-Div' onChange={(event) => setPasswordlog(event.target.value) }/>
                            </div>
                            {/* HERE WITH THE HELP OF LINK PROVIDED BY REACT-ROUTER WE CAN NAVIGATE TO OTHER PAGES 
                                IN LINK WE HAVE TO PASS LOCATION OF THE NAVIGATING PAGE AS PATH IS DEFINED IN THE APP.JS*/}
                            <div className='login-btn'>
                                {/* <Link to='/home'> */}
                                <button type="button" onClick={loginpl} className="btn btn-primary mb-3 full-width">Contact Me <IoMdSend style={{fontSize:"20px"}}/></button>
                                    {/* <button type="button" className='button-main'>Login</button> */}
                                {/* </Link> */}
                            </div>
                            <div className='reg-link'>
                                <Link className='link' to='/registration'>
                                    <p>Register Now</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login
