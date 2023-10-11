/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import techboy from "../src/assets/icons/techboy.svg"
import guy from "../src/assets/icons/boywalk.svg"
import lady from "../src/assets/icons/ladywalk.svg"

import "./Registration.css"

const Registration = () => {
    return (
        <div className="Registration">

            <h4 className="register-subheader">
                Register
            </h4>

            <div className="register-content">

                <img src={techboy} alt="" className="techboy-icon" />

                <div className="textandicons">
                    <p className="register-small-head">
                        Be part of this movement!
                    </p>


                    <div className="register-icons">

                        <img src={guy} alt="" className="boywalk" />

                        <img src={lady} alt="" className="ladywalk" />

                    </div>

                </div>


                <h1 className="register-head">
                    CREATE YOUR ACCOUNT
                </h1>

                <div className="register-form">

                    <div className="register-inputLabel">
                        <label htmlFor="TeamsName">Team's Name:</label>
                        <input className='register-input' type="text" id="TeamsName" placeholder='Enter the name of your group' required />

                    </div>

                    <div className="register-inputLabel">
                        <label htmlFor="TeamsName">Phone:</label>
                        <input className='register-input' type="text" id="TeamsName" placeholder='Enter your phone number' required />

                    </div>

                    <div className="register-inputLabel">
                        <label htmlFor="TeamsName">Email:</label>
                        <input className='register-input' type="email" id="TeamsName" placeholder='Enter your email address' required />

                    </div>



                    <div className="register-inputLabel">
                        <label htmlFor="TeamsName">Project Topic:</label>
                        <input className='register-input' type="" id="TeamsName" placeholder='What is your group proect topic' required />

                    </div>



                    <div className="selection-register">
                        <div className="register-inputLabel">
                            <label htmlFor="TeamsName">Category</label>
                            <select value="sele" className='register-select'>
                                <option value="">Select an option</option>
                                <option value="NIN">web devlopment</option>
                                <option value="voter's card">app development</option>
                                <option value="DRIVER'S LISENCE">blockchain</option>

                                <option value="DRIVER'S LISENCE">virtual reality</option>

                            </select>

                        </div>

                        <div className="register-inputLabel">
                            <label htmlFor="TeamsName">Group's Size</label>
                            <select value="sele" className='register-group'>
                                <option value="">Select </option>
                                <option value="NIN">1 - 5</option>
                                <option value="voter's card">5 - 10</option>
                                <option value="DRIVER'S LISENCE">10 - 15</option>
                            </select>

                        </div>

                    </div>






                </div>

                <p className="register-review">
                    Please review your registration details before submitting
                </p>

                <div className="register-agreement">

                    <input type="checkbox" name="agree" className='agreed-register' id="agree" />

                    <p>I agreed with the event terms and conditions
                        and privacy policy</p>

                </div>

                <button className="register-submit">

                    Submit

                </button>




            </div>


        </div>
    )
}

export default Registration
