/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import back from "../src/assets/icons/contactBack.svg"
import bgleft from "../src/assets/images/purple-lens-mobile.png"
import bgright from "../src/assets/images/purpleRight.png"

import instagram from "../src/assets/icons/mdi_instagram.svg"
import x from "../src/assets/icons/x.svg"
import facebook from "../src/assets/icons/facebook.svg"
import linkedin from "../src/assets/icons/linkedin.svg"
import "./Contact.css"
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='Contacts'   >

            <Link to="/">

                <img src={back} alt="" className="contactBack" />
            </Link>

            <img src={bgleft} alt="" className="contact-bg-left" />

            <h1 className="contact-head">
                Questions or need
                assistance?
                <div>
                    Let us know about it

                </div>
            </h1>

            <p className="contact-desc">
                Email us below to any question related
                to our event
            </p>

            <div className="contacts-inpute">

                <input type="text" placeholder="Team's Name" className='small-input' />

                <input type="text" placeholder="Topic" className='small-input' />

                <input type="text" placeholder="Email" className='small-input' />

                <textarea className='message' name="" id="" cols="30" rows="5" placeholder="Message"></textarea>

                <div className="button-submit">
                    <button className="submit">
                        submit
                    </button>
                </div>


                <div className="shareon">
                    Share on
                </div>

<div className="contact-icons">

<img src={instagram} alt="" className="contact-icon" />

<img src={x} alt="" className="contact-icon" />

<img src={facebook} alt="" className="contact-icon" />

<img src={linkedin} alt="" className="contact-icon" />

</div>

            </div>


        </div>
    )
}

export default Contact