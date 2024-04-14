import React, {useEffect, useState,createContext} from 'react'
// import Registration from '../..pages/Registration/registration';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import email from '../../assets/images/Login/email.png';
import lock from '../../assets/images/Login/lock.png';
import profile from "../../assets/images/Login/icon.jpg";
import { IoMdSend } from 'react-icons/io';
import '../Login/Login.css';
// import what from '../../assets/images/HomePage/whaeee.svg';
import { useNavigate } from 'react-router-dom';

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
export const LogginContext = createContext();
function Login() {
    const navigate = useNavigate();
    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [loggedin, setLoggedin] = useState(false);
    
    useEffect(()=>{
        // localStorage.removeItem('myData')
        if(localStorage.getItem('myData')){
            let customer_data = JSON.parse(localStorage.getItem('myData'));
            if(customer_data.email && customer_data.customer_id){
                navigate('dashboard'); 
                // setLoggedin(true);
                localStorage.setItem('isLoggin',true);
            }
        }
    })

      
    const loginpl = function(e){
     e.preventDefault()
     if(emaillog?.length>0){
        if(passwordlog?.length>0){
            if(passwordlog?.length>8){
                toast.info("Thnak You for login you can access dashboard",toaaobject);
                let data = {
                    email:emaillog,
                    customer_id:passwordlog
                }
                localStorage.setItem('myData', JSON.stringify(data));
                navigate('/dashboard');
                localStorage.setItem('isLoggin',true);
            }else{
                toast.error("Password length must be 8 characters",toaaobject);  
            }
        }else{
            toast.error("Password is required",toaaobject);   
        }
     }else{
        toast.error("Email is required",toaaobject);
     }
    }


    return (
        <LogginContext.Provider value={{ loggedin, setLoggedin }}>
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
                                <button type="button" onClick={loginpl} className="btn btn-primary mb-3 full-width">Login <IoMdSend style={{fontSize:"20px"}}/></button>
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
        </LogginContext.Provider>
        
    )
}

export default Login
