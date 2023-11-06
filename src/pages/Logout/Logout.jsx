import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
     const navigate = useNavigate();
  useEffect(()=>{
     localStorage.removeItem('isLoggin');
     localStorage.removeItem('myData');
     navigate('/')
  })
}

export default Logout