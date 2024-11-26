import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp() {
  let [profilePic,setProfilePic]=useState("./images/dummyProfilePic.jpg");

  let navigate=useNavigate();
  return (
    <div>
      <div>
        <form className='signupForm'>
            <h1 className='mainHead'>Sign Up</h1>



            <div>
              <img className='profilePic' src={profilePic} alt='Img'></img>
            </div>


            
            <div className='file-Input-Container'>
              <input className='fileInput' type='file' onChange={(e)=>{
                console.log(e.target.files);
               let selectedImage= URL.createObjectURL(e.target.files[0])
               console.log(selectedImage);
               setProfilePic(selectedImage);
              }}></input>
            </div>
            
                <div>
                    <input className='signupInput' type='text' placeholder='Enter First Name'></input>
                    </div>
                <div>
                    <input className='signupInput' type='text' placeholder='Enter Last Name'></input>
                </div>
            

            
                <div>
                    <input className='signupInput' type='email' placeholder='Enter Email'></input>
                </div>
          

           
              <div>
                <input className='signupInput' type='password' placeholder='Create Password'></input>
              </div>
            

           
              <div>
                <input className='signupInput' type='password' placeholder='Confirm Password'></input>
              </div>

              <div>
                <button type='button' className='signupFormBtn' onClick={()=>{
                    navigate("/home");
                }}>Sign up</button>
              </div>
                <div className='alreadyAccountDiv'>
             <p>Already have an Account?</p> 
             <NavLink className='loginLink' to='/'>Login</NavLink>
             </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
