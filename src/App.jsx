import React, { useState } from 'react';
import Signup from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Components/Signin';
import { Route, Routes } from 'react-router-dom';
import Forgetpassword from './Components/Forgetpassword'
import Loginsuccess from './Components/Loginsuccess';
import ConfirmPassword from './Components/ConfirmPassword';
import Homepage from './Homepage';

const App = () => {
  
  const [token,SetToken] = useState('')

  return (

    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/loginsuccess' element={<Loginsuccess/>} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/forgetpassword' element={<Forgetpassword token = {SetToken} />} />
        <Route path='/confirmpsw/:id/:token' element={<ConfirmPassword token = {token}/>} />
      </Routes>
    </div>
  );
};
      
export default App;





