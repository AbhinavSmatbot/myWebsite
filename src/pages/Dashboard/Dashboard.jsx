import React from 'react';
// import {LogginContext} from '../Login/Login';

function Dashboard(){
//   const {loggedin,setLoggedin} = useContext(LogginContext);
//   console.log('dddddddd',loggedin)
console.log('ssss',localStorage.getItem('isLoggin'))
  return (
    <>
    <div style={{marginTop:'200px'}}>
     {/* <h1>efwef wekjfewjf wek</h1> */}
     <p className='mnon text-center' style={{fontSize:"20px",color:"#456def"}}>Sorry for the inconvenience, We are under maintenance, check after some time </p>
     {/* toastr.info('Sorry for the inconvenience, We are under maintenance, check after some time') */}
    </div>
    </>
  )
}

export default Dashboard