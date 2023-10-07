/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../src/assets/icons/getlinked.svg"
import instagram from "../src/assets/icons/mdi_instagram.svg"
import x from "../src/assets/icons/x.svg"
import call from "../src/assets/icons/call.svg"
import location from "../src/assets/icons/location.svg"
import facebook from "../src/assets/icons/facebook.svg"
import linkedin from "../src/assets/icons/linkedin.svg"
import star from "../src/assets/icons/star1.svg"
import pupstar from "../src/assets/icons/footer_small_purple.svg"
import transStar from "../src/assets/icons/trans-star.svg"
import smallStar from "../src/assets/icons/footer-small-star.svg"
import star2 from "../src/assets/icons/star2.svg"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>

            <img src={logo} className='footer-logo' alt="" />

            <img src={star} className='star footer-star1' alt="" />

            <p className="footer-text">
                Getlinked Tech Hackathon is a technology
                innovation program established by a group
                of organizations with the aim of showcasing
                young and talented individuals in the field
                of technology
            </p>

            <div className="demacate">
                Terms of Use <span className='patition'></span>  Privacy Policy
            </div>


            <div className="footer-col">

                <h2>Useful Links</h2>

                <p>Overview</p>
                <p>Timeline</p>

                <img className='trans-star' src={transStar} alt="" />
                <p>FAQs</p>
                <p>Register</p>

                <div>
                    <h6 className='footer-socials' >follow us</h6>

                    <img src={instagram} alt="" />
                    <img src={x} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />


                </div>
            </div>

            <div className="footer-contacts">

                <h1>Contact Us</h1>

                <div>
                    <img src={call} alt="" />

                    <p>+234  6707653444</p>
                </div>

                <img src={smallStar} className='small-star' alt="" />

                <div>
                    <img src={location} alt="" />

                    <h2> 27,Alara Street
                        Yaba 100012
                        Lagos State</h2>
                </div>

            </div>

            <div className="reserved">
                <img src={pupstar} alt="" className='pupStar' />

                <p >
                    All rights reserved. © getlinked Ltd.
                </p>
            </div>


        </div>
    )
}

export default Footer
