import React from 'react'
import '../Footer/Footer.scss'
import send from '../../assets/svg/send.svg'
import appQr from '../../assets/svg/app-qr.svg'
import appStore from '../../assets/svg/app-store.svg'
import googlePlay from '../../assets/svg/google-play.svg'
import facebook from '../../assets/svg/facebook.svg'
import instagram from '../../assets/svg/instagram.svg'
import twinter from '../../assets/svg/twinter.svg'
import In from '../../assets/svg/in.svg'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='footer'>
      <div className="main-footer container">

        <div className="exclusive">
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <input type="text" placeholder='Enter your email' />
          <img src={send} alt="" className='send' />
        </div>

        <div className="support">
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="account">
          <h3>Account</h3>
          <p>My Account</p>
          <p><Link  to="Login">Login</Link>/<Link to="/register">SignUp</Link></p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="quick-link">
          <h3>Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="download-app">
          <h3>Download App</h3>
          <h5>Save $3 with App New User Only</h5>

          <div className="socials">
            <div>
              <img src={appQr} alt="" />
            </div>
            <div className="apps">
              <img src={googlePlay} alt="" />
              <img src={appStore} alt="" />
            </div>

          </div>

          <div className="footer-icons">
            <img src={facebook} alt="" />
            <img src={twinter} alt="" />
            <img src={instagram} alt="" />
            <img src={In} alt="" />
          </div>
        </div>
      </div>
      <p></p>
    </div>
  )
}

export default Footer
