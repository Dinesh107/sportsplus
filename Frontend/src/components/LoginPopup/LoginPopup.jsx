import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
    
  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
       <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
            {currState === "Login" ? <></> :  <input type="text" placeholder='Player Name' required /> }
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />
          </div>
          <button>{currState==="Sign up" ? "Create Account" : "Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continuing, i agree to the terms of use & privacy policy</p>
          </div>
          {currState === "Login" 
          ?<p>Create New Account ?     <span onClick={() => setCurrState("Sign up")}>Click Here</span></p> 
          :<p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>}
       </form>
    </div>
  )
}

export default LoginPopup