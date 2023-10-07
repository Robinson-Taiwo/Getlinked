/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../src/assets/icons/getlinked.svg"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>

            <img src={logo} className='footer-logo' alt="" />

<p className="footer-text">
Getlinked Tech Hackathon is a technology
innovation program established by a group 
of organizations with the aim of showcasing 
young and talented individuals in the field 
of technology
</p>

<div className="demacate">
Terms of Use   <span className='patition'></span>    Privacy Policy
</div>
        </div>
    )
}

export default Footer
