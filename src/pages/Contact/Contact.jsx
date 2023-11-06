import React, { useRef } from 'react';
import './contact.css';
import { toast } from 'react-toastify';
import contactaiamge from '../../../src/assets/images/partner/n3-01.svg';
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

const Contact = () => {
     const nameInput = useRef();
     const emailInput = useRef();
     const phoneInput = useRef();
     function SubmitForm(e) {
          e.preventDefault();
          const inputTest = nameInput.current.value;
          const emailTest = emailInput.current.value;
          const phoneTest = phoneInput.current.value;
          if (inputTest?.length > 0) {
               if (emailTest?.length > 0) {
                    if (phoneTest?.length > 0) {
                         toast.success('Thanks for your response. I will be getting in touch with you');
                         nameInput.current.value = '';
                         emailInput.current.value = '';
                         phoneInput.current.value = '';
                    } else {
                         toast.error("Name is required",toaaobject);
                    }
               } else {
                    toast.error("Name is required",toaaobject);
               }
          } else {
               toast.error("Name is required",toaaobject);
          }
     }
     return (
          <>
               <div className='mainDivContact mono'>
                    <div className='mainDivContactLeft mono'>
                         <div className='full-width'>
                              <img className='full-widtheee object-fit-fill' src={contactaiamge} alt='' />
                         </div>
                    </div>
                    <div className='mainDivContactRight'>
                         <form className='full-widthwww' style={{ width: "70%" }}>
                              <h2 className='fs-4' style={{fontWeight:"600"}}>General Enquiry</h2>
                              <div className="mb-3">
                                   {/* <label htmlFor="exampleInputname" className="form-label">Name</label> */}
                                   <input type="text" ref={nameInput} placeholder='Enter your Name' className="form-control allInput" id="exampleInputname" aria-describedby="nameHelp" />
                                   {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                              </div>
                              <div className="mb-3">
                                   {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                                   <input type="email" ref={emailInput} placeholder='Enter your Email' className="form-control allInput" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                   {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                              </div>
                              <div className="mb-3">
                                   {/* <label htmlFor="exampleInputPassword1" className="form-label">Phone</label> */}
                                   <input type="tel" ref={phoneInput} placeholder='Enter your Phone' className="form-control allInput" id="exampleInputPassword1" />
                              </div>
                              <div className="mb-3">
                                   <textarea placeholder='Enter your Message here...' className="form-control textArea allInput"></textarea>
                              </div>

                              <button style={{width:"100%"}} type="submit" onClick={SubmitForm} className="btn btn-primary full-width">Submit Details</button>
                         </form>
                    </div>
               </div>

          </>
     )
}

export default Contact