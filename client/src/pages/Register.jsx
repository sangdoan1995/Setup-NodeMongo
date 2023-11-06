import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Register = () => {
       
    const [regis,setRegis]=useState({
        firstname:'',
        lastname:'',
        email:'',
        mobile:'',
        password:''
    })


    const HandlerRegister=async()=>{
        try{
            const url = 'http://localhost:5000/register'
            const fetchdata= await axios.post(url,regis)
            if(fetchdata.data){
                setRegis({
                    firstname:'',
                    lastname:'',
                    email:'',
                    mobile:'',
                    password:''
                })
                console.log('register success')
            }else{
                console.log('fail')
            }
    
        }catch(error){
            console.log(error)
        }
    }
        
    useEffect(()=>{
        HandlerRegister();
        console.log(regis)
    },[])
    
    return (
        <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Register</div>
                        <div className='col-12 form-group'>
                            <label>Firstname</label>
                            <input type='text'className='form-control' placeholder='Enter your firstname'
                            value={regis.firstname}
                            onChange={e =>{
                                setRegis({
                                    ...regis,
                                    firstname:e.target.value
                                })
                                console.log(regis.firstname)
                            }}
                            
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Lastname</label>
                            <input type='text'className='form-control' placeholder='Enter your lastname'
                            value={regis.lastname}
                            onChange={e =>{
                                setRegis({
                                    ...regis,
                                    lastname:e.target.value
                                })
                                console.log(regis.lastname)
                            }}
                            
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Email</label>
                            <input type='text'className='form-control' placeholder='Enter your email'
                            value={regis.email}
                            onChange={e =>{
                                setRegis({
                                    ...regis,
                                    email:e.target.value
                                })
                                console.log(regis.email)
                            }}
                            
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Mobile</label>
                            <input type='text'className='form-control' placeholder='Enter your mobile'
                            value={regis.mobile}
                            onChange={e =>{
                                setRegis({
                                    ...regis,
                                    mobile:e.target.value
                                })
                                console.log(regis.mobile)
                            }}
                            
                            />
                        </div>
                    
                        <div className='col-12 form-group'>
                            <label>Password</label>
                            <input 
                            className='form-control' placeholder='Enter your password'  
                            value={regis.password}
                            onChange={e =>{
                                setRegis({
                                    ...regis,
                                    password:e.target.value
                                })
                                console.log(regis.password)
                            }}
                            
                            />
                            <span className='eye-pass' >
                                <i ></i></span>
                            
                        </div>
                        
                        <div className='col-12' style={{color: 'red'}}>
                            
                        </div>

                        <div className='col-12'>
                            <button className='btn-login' onClick={HandlerRegister} >register</button>
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

export default Register;