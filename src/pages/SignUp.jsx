import React from 'react'
import './styles/SignUp.scss'
import slideImg from '../assets/img/Slide-img.png'
import google from '../assets/svg/icon-goole.svg'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <div className='signUp container'>
        <div className="Side-image">
        <img src={slideImg} alt="" />
        </div>
        <div className="create-account">
            <h2>Create an account</h2>
            <p>Enter your details below</p>
            <div className="create-account-inputs">
            <input type="text"  placeholder='Name'/>
            <input type="text"  placeholder='Email'/>
            <input type="password"  placeholder='Password'/>
            </div>
            <button>Create Account</button>
            <div className="Google-button">
                <img src={google} alt="" />
                <p>Sign up with Google</p>
            </div>
            <div className="login">
            <p>Already have account?</p>
            <Link to="/login">Log In</Link>
            </div>

        </div>
    </div>
  )
}

export default SignUp
