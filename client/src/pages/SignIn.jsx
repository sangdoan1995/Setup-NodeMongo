import React from 'react';
import './SignIn.scss';
import { useState ,useEffect } from 'react';
import axios from 'axios';


const SignIn = () => {
    
    // const [email,setEmail]=useState('');
    // const [password,setPassword]=useState('');
    const [login,setLogin]=useState({
        email:'',
        password:''
    })

    // const HandleEmail=(e)=>{
    //     setEmail(e.target.value)
    //     console.log(email)
    // }
    
    // const HandlePass=(e)=>{
    //     setPassword(e.target.value)
    //     console.log(password)
    // }

    const HandlerLogin=async()=>{
        const url = 'http://localhost:5000/login'
        const fetchdata= await axios.post(url,login)
        if(fetchdata.data.token){
            setLogin({
                email:'',
                password:''
            })
            console.log('login success')
        }else{
            console.log('user wrong')
        }
    }
    useEffect(()=>{
        HandlerLogin();
    },[])
    
    return (
        <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group'>
                            <label>Email</label>
                            <input type='text'className='form-control' placeholder='Enter your email'
                            value={login.email}
                            onChange={e =>{
                                setLogin({
                                    ...login,
                                    email:e.target.value
                                })
                                console.log(login.email)
                            }}
                            
                            />
                        </div>
                    
                        <div className='col-12 form-group'>
                            <label>Password</label>
                            <input 
                            className='form-control' placeholder='Enter your password'  
                            value={login.password}
                            onChange={e =>{
                                setLogin({
                                    ...login,
                                    password:e.target.value
                                })
                                console.log(login.password)
                            }}
                            
                            />
                            <span className='eye-pass' >
                                <i ></i></span>
                            
                        </div>
                        <div className='col-12' style={{color: 'red'}}>
                            
                        </div>

                        <div className='col-12'>
                            <button className='btn-login' onClick={HandlerLogin} >Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password' >Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className='text-center-login' >or Login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>

                        
                    </div>
                </div>
            </div>
        
        
    );
};

export default SignIn;