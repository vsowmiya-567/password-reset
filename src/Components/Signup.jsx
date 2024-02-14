import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import {emailValidator} from '../Components/ValidatingDetails'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../Components/Signup.css'
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import axios from 'axios';





const Signup = () => {

    const navigate = useNavigate()

    const [username, SetUsername] = useState('')
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [errormsg, setErrorMsg] = useState('') 

    
    const handlesubmit = (e)=>{
        try{

            e.preventDefault()
            if(username === ''){
                return setErrorMsg('Name Required')
            }
            if(!emailValidator(email)){
                return setErrorMsg('please enter valid email id')
            }
            if(!password){
                return setErrorMsg('Password Required')
            }
            else if(password.length < 6){
                return setErrorMsg('password should have minimun 6 characters')
            }
    
            // Send request to backend server
            axios.post('http://localhost:5000/register',{username,email,password})
            .then(res=>{
                if(res.data.status){
                    alert('Registered successfully')
                    navigate('/signin')
                }else{
                    console.log(res.data.message);
                }
            })
        }catch(error){
            console.log(error);
        }

    }
    return (
        <div className='Container box'>
            <h1 className='title'>Sign Up</h1>
            <div>
            {errormsg.length > 0 && (<div style={{marginLeft:'70px',marginBottom:'15px',color:'red'}}>{errormsg}</div>)}

                <Form>
                    <Form.Group className="mb-3 name sign" controlId="formGroupName">
                        <Form.Label className='content'>User Name</Form.Label>
                        <Form.Control type="text" className='inpbox' 
                        autoComplete='off' placeholder="Enter Your Name" 
                        onChange={(e)=>SetUsername(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 email sign" controlId="formGroupEmail">
                        <Form.Label className='content'>Email address</Form.Label>
                        <Form.Control type="email" className='inpbox'
                        autoComplete='off' placeholder="Enter email" 
                         onChange={(e)=>SetEmail(e.target.value)}
                          />
                    </Form.Group>
                    <Form.Group className="mb-3 password sign"controlId="formGroupPassword">
                        <Form.Label className='content'>Password</Form.Label>
                        <Form.Control type="password" className='inpbox' 
                        placeholder="Password" 
                         onChange={(e)=>SetPassword(e.target.value)}
                         />
                    </Form.Group>
                </Form>
                <div>
                <Button variant="primary" className='btn'
                 onClick={ handlesubmit} ><b>Sign Up</b></Button>
                </div>
            </div>
            <div>
                <p className='haveacc'>Have an Account?</p>
                <Link to='/signin' className='signin'>Sign in</Link>
            </div>
        </div>
    );
};
               
export default Signup;
            

