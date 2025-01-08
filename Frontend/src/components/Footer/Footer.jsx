import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
         <div className="footer-content">
           <div className="footer-content-left">
               <img src= {assets.logo2} alt="" className='logo2'/>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non labore, exercitationem debitis excepturi ex architecto voluptatum maiores quibusdam, quo eaque repellat quaerat expedita error! Quod optio ex minima commodi dignissimos?</p>
               <div className="footer-social-icons">
                <img src= {assets.facebook_icon} alt="" />
                <img src= {assets.twitter_icon} alt="" />
                <img src= {assets.linkedin_icon} alt="" />
               </div>
           </div>
           <div className="footer-content-center">
               <h2>SPORTS PLUS</h2>
               <ul>
                <li>Home</li>
                <li>Tournaments</li>
                <li>Clubs</li>
                <li>Players</li>
                <li>Privacy Policy</li>
               </ul>
            </div>
           <div className="footer-content-right">
                 <h2>Get in Touch</h2>
                 <ul>
                  <li>+91 98898 98882</li>
                  <li>contact@gmail.com</li>
                 </ul>
           </div>
         </div> 
         <hr />
         <p className="footer-copyright">Copyright 2025 @Sportsplus.com - All Right Reserved</p>
    </div>
  )
}

export default Footer