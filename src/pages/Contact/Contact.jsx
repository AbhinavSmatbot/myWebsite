import React from 'react'

const Contact = () => {
     return (
          <>
               <form>
                    <h2>Contact me for work/general enqiry</h2>
                    <div className="mb-3">
                         <label for="exampleInputEmail1" className="form-label">Email address</label>
                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                         <label for="exampleInputPassword1" className="form-label">Phone</label>
                         <input type="tel" className="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Submit</button>
               </form>
          </>
     )
}

export default Contact