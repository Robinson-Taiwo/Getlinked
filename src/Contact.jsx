/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import back from "../src/assets/icons/contactBack.svg"
import bgleft from "../src/assets/images/purple-lens-mobile.png"
import bgright from "../src/assets/images/purpleRight.png"
import star from "../src/assets/icons/star1.svg"
import star2 from "../src/assets/icons/star2.svg"
import pupstar from "../src/assets/icons/footer_small_purple.svg"
import transStar from "../src/assets/icons/trans-star.svg"
import smallStar from "../src/assets/icons/footer-small-star.svg"
import sw from "../src/assets/icons/sw.svg"
import px from "../src/assets/icons/px.svg"

import instagram from "../src/assets/icons/mdi_instagram.svg"
import x from "../src/assets/icons/x.svg"
import facebook from "../src/assets/icons/facebook.svg"
import linkedin from "../src/assets/icons/linkedin.svg"
import "./Contact.css"
import { Link } from 'react-router-dom'

const Contact = () => {


    const [name, setName] = useState("")
    const [topic, setTopic] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const isSubmitDisabled = name === '' || topic === '' || email === '' || message === '';


  



    const handleNameChange = (e) => {
        setName(e.target.value);

    };

    const handleTopicChange = (e) => {
        setTopic(e.target.value);

    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);

    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault()

        isSubmitDisabled ?  alert('All fields are required') : (alert(`this function is yet to be implemented by Taiwo. will take care of it very soon.
        thank you for trying it though😁😁😁
        . love you...
       THESE ARE YOUR INPUTED DETAILS😏:
      Team name:  ${name},
      Topic: ${topic},
      Email: ${email},
      Message: ${message},`))
        

        setName("")
        setTopic("")
        setEmail("")
        setMessage("");



        

    //     console.log(`this function is yet to be implemented by Taiwo. will take care of it very soo. thank you for trying. love you...
    //    this is your details:
    //   Team name:  ${name},
    //   Topic: ${topic},
    //   Email: ${email},
    //   Message: ${message},`)


    }

    return (
        <div className='Contacts'   >

            <Link to="/">

                <img src={back} alt="" className="contactBack" />
            </Link>

            <img src={px} alt="" className="contactfstar" />

            <img src={bgleft} alt="" className="contact-bg-left" />

            <h1 className="contact-head">
                Questions or need
                assistance?
                <div>
                    Let us know about it

                </div>

                <img src={transStar} alt="" className="contactsstar" />


            </h1>

            <p className="contact-desc">
                Email us below to any question related
                to our event
            </p>

            <div className="contacts-inpute">

                <input type="text" placeholder="Team's Name" onChange={handleNameChange} required value={name} className='small-input' />

                <input type="text" placeholder="Topic" onChange={handleTopicChange} required value={topic} className='small-input' />

                <input type="email" placeholder="Email" onChange={handleEmailChange} required value={email} className='small-input' />

                <textarea className='message' name="" id="" cols="30" rows="5" onChange={handleMessageChange} required value={message} placeholder="Message"></textarea>

                <img src={star} alt="" className="contactwstar" />

                <div className="button-submit relative">

                    <img src={px} alt="" className="contactlaststar" />

                    <button onClick={handleSubmit} className="submit">
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