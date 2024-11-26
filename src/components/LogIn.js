import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LogIn() {
    let navigate=useNavigate();
    let emailInputRef=useRef();
    let passwordInputRef=useRef();

    useEffect(()=>{
      emailInputRef.current.value=localStorage.getItem("Email");
      passwordInputRef.current.value=localStorage.getItem("Password");
      if(localStorage.getItem("Email") && localStorage.getItem("Password")){
      }
    },[])

    let validateLogin=()=>{
      if(emailInputRef.current.value === "vivek@gmail.com" && passwordInputRef.current.value === "vivek"){
        localStorage.setItem("Email",emailInputRef.current.value);
        localStorage.setItem("Password",passwordInputRef.current.value);

        sessionStorage.setItem("email",emailInputRef.current.value);
        sessionStorage.setItem("password",passwordInputRef.current.value);
        navigate("/home");
      }
      else{
        alert("Invalid Username & Password")
      }
    }
  return (
    <div className='loginDiv'>
      <div className='formDiv'>
        <form className='loginForm'>
            <h1 style={{color:"#fff"}}>Login</h1>
             <div>
                <label>Email</label>
                <div>
                <input ref={emailInputRef} type='email'></input>
                </div>
             </div>
             <div>
                <label>Password</label>
                <div>
                <input ref={passwordInputRef} type='password'></input>
                </div>
             </div>
             <div>
               <button className='loginBtn' type='button' onClick={()=>{
                
                validateLogin();
              }}>Login</button>
             </div>
             <Link className='forgotPasswordLink' to='/forgotpassword'> Forgot Password</Link>

            <h5 style={{color:"#fff", fontSize:"12px"}}>New User? Don't have an Account</h5>
            
              <div>
                <button className='signupBtn' type='button' onClick={()=>{
                    navigate("/signup")
                }}>SignUp</button>
             </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn
