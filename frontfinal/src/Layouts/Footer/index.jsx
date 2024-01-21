import React from 'react'
import './style.scss'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_container'>
      <div className='footer_container_top'>
        <div className='footer_container_top_logo'>
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo2_footer.png" alt="" />
        <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>

        </div>
        <div className='footer_container_top_link'>
          <h4>Quick Links</h4>
          <ul className='footer_container_top_link_list'>
            <li>About</li>
            <li>Offers&Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footer_container_top_link'>
          <h4>New Products</h4>
          <ul className='footer_container_top_link_list'>
            <li>About</li>
            <li>Offers&Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footer_container_top_link'>
          <h4>Support</h4>
          <ul className='footer_container_top_link_list'>
            <li>About</li>
            <li>Offers&Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className='footer_container_bottom'>
        <div className='footer_container_bottom_content'>
        Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by <span>Colorlib</span>
        </div>
        <div className='footer_container_bottom_icon'>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-behance"></i>
        <i className="fa-solid fa-globe"></i>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer