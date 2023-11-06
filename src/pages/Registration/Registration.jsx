import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import email from '../../assets/images/Login/email.png';
import lock from '../../assets/images/Login/lock.png';
import profile from "../../assets/images/Login/icon.jpg";
import { IoMdSend } from 'react-icons/io';
import '../Login/Login.css';
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
function Registration() {
    const navigate = useNavigate();
    const LOCAL_STORAGE_KEY = "Info";

    const [Info, setInfo] = useState({
        name:"",
        email:"",
        password:"",
        profession:""
    });

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts) setInfo(retriveContacts);
    }, [])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Info))
    },[Info])

    let register = (e) =>{
        e.preventDefault()
        if(Info.name?.length>0){
            if(Info.email?.length>0){
                if(Info.password?.length>0){
                    if(Info.profession?.length>0){
                        navigate('/login');
                        toast.success("Thankyou for register please login your account",toaaobject); 
                    }else{
                        toast.error("Please select your profession ",toaaobject);   
                    }

                }else{
                    toast.error("Passoword is required",toaaobject);   
                }

            }else{
                toast.error("Email is required",toaaobject);  
            }
        }else{
            toast.error("Name is required",toaaobject); 
        }

        
    }

    return (
        <form onSubmit={register}>
            <div className='main-Dive'>
                <div className='sub-main-div'>
                    <div>
                        <div>
                            <h1>Registration</h1>
                            <div>
                                <img src={profile} alt="emial" className='email' />
                                <input type="text" placeholder='Enter Name' className='fill-Div' value={Info.name} onChange={(e) => setInfo({...Info, name: e.target.value})}/>
                            </div>
                            <div className='mail-id'>
                                <img src={email} alt="emial" className='email' />
                                <input type="email" placeholder='Enter Email-id' className='fill-Div' value={Info.email} onChange={(e) => setInfo({...Info, email: e.target.value})}/>
                            </div>
                            <div className='mail-id'>
                                <img src={lock} alt="emial" className='email' />
                                <input type="password" placeholder='Enter New Password' className='fill-Div' value={Info.password} onChange={(e) => setInfo({...Info, password: e.target.value})}/>
                            </div>
                            <div className='select'>
                                {/* <label className='plist'>Intrest</label> */}
                                    <select value={Info.profession} onChange={(event) => setInfo({...Info, profession: event.target.value})}>
                                    <option selected value=''>Intrest</option>
                                        <option>Android</option>
                                        <option>ReactJS</option>
                                        <option>Python</option>
                                        <option>Angular</option>
                                    </select>
                            </div>
                            <div className='login-btn'>
                                {/* <Link to='/home'> */}
                                    {/* <button type="submit" className='button-main'>Register</button> */}
                                    <button type="button" onClick={register} className="btn btn-primary mb-3 full-width">Contact Me <IoMdSend style={{fontSize:"20px"}}/></button>
                                {/* </Link> */}
                            </div>
                            <div className='reg-link'>
                                <p>If Account exist then</p><Link className='link-data' to='/login'><li>Login!!!</li></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Registration