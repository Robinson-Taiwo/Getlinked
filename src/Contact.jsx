/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import back from "../src/assets/icons/contactBack.svg"
import bgleft from "../src/assets/images/purple-lens-mobile.png"
import bgright from "../src/assets/images/purpleRight.png"
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


            </div>


        </div>
    )
}

export default Contact