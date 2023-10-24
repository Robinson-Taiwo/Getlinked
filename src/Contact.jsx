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
import Axios from 'axios'
import Navbar from './Navbar'

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

        isSubmitDisabled && alert('All fields are required');

        // Define the base URL and endpoint
        const baseUrl = 'https://backend.getlinked.ai';
        const endpoint = '/hackathon/contact-form';
        const apiUrl = baseUrl + endpoint;

        // Define the data to be sent in the request
        const requestData = {
            email: 'sample@example.com',
            phone_number: '0903322445533',
            first_name: 'Space Explore',
            message: 'I need further info',
        };

        // Make a POST request using Axios
        Axios.post(apiUrl, requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                // Handle the response data here
                console.log('Response:', response.data);
            })
            .catch((error) => {
                // Handle errors here
                console.error('Error:', error);
            });

        setName("")
        setTopic("")
        setEmail("")
        setMessage("");





    }

    return (
        <div className='Contacts'   >

            <Link to="/">

                <img src={back} alt="" className="contactBack" />
            </Link>

            <div className="contacts-navbar">
                <Navbar borderGradient="2px solid #9A39FF" backgroundColor="transparent" />

            </div>


            <img src={px} alt="" className="contactfstar" />

            <img src={bgleft} alt="" className="contact-bg-left" />


            <div className="contacts-containerr">



                <div className="contacts-first-div">

                    <h1>
                        Get in touch
                    </h1>

                    <h2>
                        Contact
                        Information
                    </h2>

                    <h3>
                        27,Alara Street
                        Yaba 100012
                        Lagos State
                    </h3>

                    <h4>

                        Call Us : 07067981819
                    </h4>

                    <h5>

                        we are open from Monday-Friday
                        08:00am - 05:00pm
                    </h5>


                    <div className="sharon">
                        Share on
                    </div>

                    <div className="contact-iconst">

                        <img src={instagram} alt="" className="contact-icon" />

                        <img src={x} alt="" className="contact-icon" />

                        <img src={facebook} alt="" className="contact-icon" />

                        <img src={linkedin} alt="" className="contact-icon" />

                    </div>

                </div>


                <div className="contacts-second-div">



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


            </div>






        </div>
    )
}

export default Contact