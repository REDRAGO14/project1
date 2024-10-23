import React from 'react'
import './Footer.css'
import 'boxicons'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>The First official distributor of fitness nutrition in Ethiopia.<br/>For Every Training Goal & Body Type</p>
                <div className="footer-social-icon">
                    <a  href="https://www.facebook.com/ethiofitnessnutrition/"><img src={assets.facebook_icon} alt="" /></a>
                    <a  href="https://www.youtube.com/@ethiofitnessnutrition"><img src={assets.twitter_icon} alt="" /></a>
                    <a  href="https://t.me/s/ethiofitnessnutrition"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+251-98765432</li>
                <li>ethel@gmail.com</li>
              </ul>
              <a href="tel:9369">
               <h3 className="animate-charcter"><box-icon name='phone-call'  animation='tada' size='lg'></box-icon>9369</h3>
              </a>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            copyright 2016 @ Ethel Labs  -All Right Reserved
        </p>
    </div>
  )
}

export default Footer
