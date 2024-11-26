import React from 'react'

function ForgotPassword() {
  return (
    <div>
      <form className='forgotPasswordDiv'>
        <div >
            <label className='forgotPasswordLabel'>Create New Password</label>
            <input type='password'></input>
        </div>
        <div>
            <label className='forgotPasswordLabel'>Confirm Password</label>
            <input type='password'></input>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
