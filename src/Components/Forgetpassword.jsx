import React, { useState } from 'react';
import '../Components/Forgetpassword.css'
import {emailValidator} from '../Components/ValidatingDetails'
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Forgetpassword = () => {

    const initial = {email:''}

    const [email, SetEmail] = useState('')
    const [errormsg, setErrorMsg] = useState('')
    const [message,setMessage] = useState('')


    const handleSubmit =(e)=>{
        
        e.preventDefault()
        if(!emailValidator(email)){
            return setErrorMsg('please enter valid email id')
        }

        axios.post('http://localhost:5000/forget-password',{email})
        .then(res=>{
            if(res.data.status === 'true'){
                alert("Reset link is sent to your Mail,Please check it")
                SetEmail(initial)
            }
        })
        .catch(err=>{
            
            setMessage(err.response.data.message)
            console.log(err)

        })
        
    }
    
        return (
            <div className='box1'>
                <form className='form'>
                    <h3 className='title'>Forget Password</h3>
                    <div className='mb-2'>
                        <label htmlFor ="email" className='content'>Email</label>
                        <input 
                        type = "email" placeholder='Enter Your Email'
                         className='form-control inpbox' 
                        onChange={(e)=>SetEmail(e.target.value)}
                         value={email.email}
                        />
                        {message.length > 0 && (<div style={{marginLeft:'70px',marginTop:'8px',color:'red'}}>{message}</div>)}
                        {errormsg.length > 0 && (<div style={{marginLeft:'70px',marginBottom:'15px',color:'red'}}>{errormsg}</div>)}

                    </div>
                    
                    <div>
                    <Button type='submit' onClick={handleSubmit}
                     variant="primary" className='btn'><b>Reset Password</b>
                     </Button>
                    </div>
                </form>
                
                
            </div>
        );
    };
    export default Forgetpassword;
    

        
