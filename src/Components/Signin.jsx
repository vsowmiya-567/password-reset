import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Components/Signin.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { emailValidator } from '../Components/ValidatingDetails'
import 'react-toastify/dist/ReactToastify.css'

const Signin = () => {

    const navigate = useNavigate()
    
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [errormsg, setErrorMsg] = useState('')
    const [message,setMessage] = useState('')

    const handlesubmit = async (e) => {

        e.preventDefault()
        if (!emailValidator(email)) {
            return setErrorMsg('please enter valid email id')
        }

        if (password.length < 6) {
            return setErrorMsg('password should have minimun 6 characters')
        }

        await axios.post('http://localhost:5000/login', { email, password })
        .then(res => 
            
            {

                 if (res.data.status === 'true') {
                   return navigate('/loginsuccess')
                }
            }
            )
            .catch(err => {
                
                setMessage(err.response.data.message);
                
            })
 
    }
    return (

        <div className='login box'>

            <form className='form'>
                <h3 className='title'>Sign In</h3>

                {errormsg.length > 0 && (<div style={{ marginLeft: '70px', marginBottom: '15px', color: 'red' }}>{errormsg}</div>)}

               <div className='mb-2'>
                    <label htmlFor="email" className='content'>Email</label>
                    <input
                        type="email" placeholder='Enter Email'
                        className='form-control inpbox'
                        onChange={(e) => 
                        SetEmail(e.target.value)}
                        
                    />
                    {message.length > 0 && (<div style={{marginLeft:'70px',marginTop:'20px',color:'red'}}>{message}</div>)}

                </div>

                <div className='mb-2'>
                    <label htmlFor="password" className='content'>Password</label>

                    <input type="password" placeholder='Enter Password'
                        className='form-control inpbox'
                        onChange={(e) => SetPassword(e.target.value)}
                    />

                </div>
                <div>
                    <Button variant="primary" onClick={handlesubmit} 
                        className='btn'><b>Sign In</b>
                    </Button>
                </div>
                   
            </form>
            <div className='link'>
                <Link to='/forgetpassword' className='forget'>Forget Password ?</Link>
                <Link to='/signup' className='signup'>Sign up</Link>
            </div>


        </div>
    );
};

export default Signin;
               


            
                
