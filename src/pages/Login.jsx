import React from 'react'
import slideImg from '../assets/img/Slide-img.png'
import './styles/Login.scss'

function Login() {
  return (
    <div className='login container'>
        <div className="slide-img">
            <img src={slideImg} alt="" />
        </div>
        <div className="form">
            <h2>Log in to Exclusive</h2>
            <p>Enter your details below</p>
            <div className="form-inputs">
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
            </div>
            <div className="login-buttons">
                <button>Log In</button>
                <p>Forget Password?</p>
            </div>
        </div>
    </div>
  )
}

export default Login
