import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../Components/Loginsuccess.css'


const Loginsuccess = () => {

    const navigate = useNavigate()

    const handleSubmit = ()=>{
        navigate('/')
    }



    return (
        <div>
            <h2 style={{textAlign:'center',height:'100vh',width:'100%',backgroundColor:'white'}}>Signin Successfully! 😊</h2>
            
                <Button variant="primary" onClick={handleSubmit} className='btn home'><b>Home</b></Button>
           
        </div>
        
            
    );
};

export default Loginsuccess;