/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import techboy from "../src/assets/icons/techboy.svg"
import guy from "../src/assets/icons/boywalk.svg"
import sb from "../src/assets/icons/sb.svg"
import bc from "../src/assets/icons/bc.svg"
import lady from "../src/assets/icons/ladywalk.svg"
import pupstar from "../src/assets/icons/footer_small_purple.svg"
import Axios from 'axios';
import "./Registration.css"
import Navbar from './Navbar'

const Registration = () => {

    const [teamsName, setTeamsName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [projectTopic, setProjectTopic] = useState('');
    const [category, setCategory] = useState(''); // Initialize with an empty string
    const [groupSize, setGroupSize] = useState(''); // Initialize with an empty string
    const [agreed, setAgreed] = useState(false); // Initialize the checkbox state as false
    const [accepted, setAccepted] = useState(true)

    const [options, setOptions] = useState([])
    const [selectedOption, setSelectedOption] = useState("")

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

    const isSubmitDisabled = email === '' || teamsName === '' || phone === '' || projectTopic === '' || category === '' || groupSize === '';

    // Create event handlers for checkbox and button click
    const handleAgreementChange = () => {
        setAgreed(!agreed); // Toggle the checkbox state
    };

    const handleSubmit = () => {
        // Check if the user has agreed to the policy
        if (agreed && !isSubmitDisabled) {
            const url = " https://backend.getlinked.ai"
            const endpoint = "/hackathon/registration"
            const aipUrl = url + endpoint

            const requestData = {
                email: email,
                phone_number: phone,
                team_name: teamsName,
                group_size: groupSize,
                project_topic: projectTopic,
                category: category,
                privacy_policy_accepted: agreed,
            };

            Axios.post(aipUrl, requestData, {
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
            setAccepted(false)

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




    useEffect(() => {
        // Define the API endpoint and base URL
        const baseUrl = 'https://backend.getlinked.ai';
        const endpoint = '/hackathon/categories-list';
        const apiUrl = baseUrl + endpoint;

        // Make a GET request to the API endpoint
        Axios.get(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                // Assuming the response contains an array of categories
                const categories = response.data;

                // Update the state with the received data
                setOptions(categories);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    let transparent = "red-50"

    return (
        <div className="Registration">

            <div className="nav-reg">

                <Navbar borderGradient="2px solid #9A39FF" backgroundColor="transparent" />
            </div>


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


            <div className="reg-real">


                <img src={techboy} alt="" className="techboy-icon" />



                <div className="register-content">

                    <h4 className="register-subheader2">
                        Register
                    </h4>



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






                    </div>
                    <div className="selectionj-register">


                        <div className="register-inputLabel">
                            <label htmlFor="Category">Category</label>
                            <select
                                value={category}
                                className='register-select'
                                onChange={handleCategoryChange}
                            >
                                <option value="">Select an option</option>

                                {options.map((data, index) => {
                                    return (<option key={data.id} value={data.id}>{data.name}</option>)
                                })}

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
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
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

                    <div className="didn-agree">
                        {!accepted && "please agree to the policy, terms and conditions first or check that you filled all the inputs"}
                    </div>

                    <div className='register-sub-but' >

                        <button className="register-submit" onClick={handleSubmit}>
                            Submit
                        </button>

                    </div>





                </div>

            </div>




        </div>
    )
}

export default Registration