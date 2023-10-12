/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import techboy from "../src/assets/icons/techboy.svg"
import guy from "../src/assets/icons/boywalk.svg"
import sb from "../src/assets/icons/sb.svg"
import bc from "../src/assets/icons/bc.svg"
import lady from "../src/assets/icons/ladywalk.svg"
import pupstar from "../src/assets/icons/footer_small_purple.svg"

import "./Registration.css"

const Registration = () => {

    const [teamsName, setTeamsName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [projectTopic, setProjectTopic] = useState('');
    const [category, setCategory] = useState(''); // Initialize with an empty string
    const [groupSize, setGroupSize] = useState(''); // Initialize with an empty string
    const [agreed, setAgreed] = useState(false); // Initialize the checkbox state as false


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    // Create event handlers for input changes
    const handleTeamsNameChange = (e) => {
        setTeamsName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleProjectTopicChange = (e) => {
        setProjectTopic(e.target.value);
    };

    // Create event handlers for select changes
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleGroupSizeChange = (e) => {
        setGroupSize(e.target.value);
    };





    // Create event handlers for checkbox and button click
    const handleAgreementChange = () => {
        setAgreed(!agreed); // Toggle the checkbox state
    };

    const handleSubmit = () => {
        // Check if the user has agreed to the policy
        if (agreed) {
            // You can alert the form details here or perform other actions
        console.log(`Form details:\nTeams Name: ${teamsName}\nPhone: ${phone}\nEmail: ${email}\nProject Topic: ${projectTopic}\nCategory: ${category}\nGroup Size: ${groupSize}`)



            // Clear the input fields
            setTeamsName('');
            setPhone('');
            setEmail('');
            setProjectTopic('');
            setCategory('');
            setGroupSize('');
            setAgreed(false); // Reset the checkbox to unchecked;

            openModal();

        } else {
            // Alert the user if the checkbox is not checked
            alert('Please agree to the terms and conditions before submitting.');
        }
    };


    useEffect(() => {
        if (isModalOpen) {
          // Add the class to the body when the modal is open
          document.body.classList.add('overlay-open');
        } else {
          // Remove the class when the modal is closed
          document.body.classList.remove('overlay-open');
        }
    
        // Clean up the effect
        return () => {
          document.body.classList.remove('overlay-open');
        };
      }, [isModalOpen]);

    return (
        <div className="Registration">

            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className='modal-cancel'>
                        <img src={pupstar} alt="" />
                        </div>

                        <div className="modal-box">

                            <div className="modal-images">
<img src={bc} alt="" className="bc" />
<img src={sb} alt="" className="sb" />


                            </div>


                            <h1>
                                Congratulations
                                you have successfully
                                Registered!
                            </h1>

                            <p>
                                Yes, it was easy and you did it!
                                check your mail box for next step
                            </p>

                            <button onClick={closeModal} >
                                Back
                            </button>

                        </div>

                    </div>
                </div>
            )}

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
                        <input
                            className='register-input'
                            type="text"
                            id="TeamsName"
                            placeholder='Enter the name of your group'
                            required
                            value={teamsName}
                            onChange={handleTeamsNameChange}
                        />
                    </div>

                    <div className="register-inputLabel">
                        <label htmlFor="Phone">Phone:</label>
                        <input
                            className='register-input'
                            type="text"
                            id="Phone"
                            placeholder='Enter your phone number'
                            required
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </div>

                    <div className="register-inputLabel">
                        <label htmlFor="Email">Email:</label>
                        <input
                            className='register-input'
                            type="email"
                            id="Email"
                            placeholder='Enter your email address'
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <div className="register-inputLabel">
                        <label htmlFor="ProjectTopic">Project Topic:</label>
                        <input
                            className='register-input'
                            type="text"
                            id="ProjectTopic"
                            placeholder='What is your group project topic'
                            required
                            value={projectTopic}
                            onChange={handleProjectTopicChange}
                        />
                    </div>

                    <div className="selection-register">
                        <div className="register-inputLabel">
                            <label htmlFor="Category">Category</label>
                            <select
                                value={category}
                                className='register-select'
                                onChange={handleCategoryChange}
                            >
                                <option value="">Select an option</option>
                                <option value="web development">Web Development</option>
                                <option value="app development">App Development</option>
                                <option value="blockchain">Blockchain</option>
                                <option value="virtual reality">Virtual Reality</option>
                            </select>
                        </div>

                        <div className="register-inputLabel">
                            <label htmlFor="GroupSize">Group's Size</label>
                            <select
                                value={groupSize}
                                className='register-group'
                                onChange={handleGroupSizeChange}
                            >
                                <option value="">Select</option>
                                <option value="1 - 5">1 - 5</option>
                                <option value="5 - 10">5 - 10</option>
                                <option value="10 - 15">10 - 15</option>
                            </select>
                        </div>
                    </div>







                </div>

                <p className="register-review">
                    Please review your registration details before submitting
                </p>

                <div className="register-agreement">
                    <input
                        type="checkbox"
                        name="agree"
                        className='agreed-register'
                        id="agree"
                        checked={agreed}
                        onChange={handleAgreementChange}
                    />
                    <p>I agree with the event terms and conditions and privacy policy</p>
                </div>

                <button className="register-submit" onClick={handleSubmit}>
                    Submit
                </button>




            </div>


        </div>
    )
}

export default Registration