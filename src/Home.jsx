/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Home.css"
import Navbar from './Navbar';
import curve from "../src/assets/icons/curve.svg"
import chain from "../src/assets/icons/chain.svg"
import fire from "../src/assets/icons/fire.svg"
import bulb from "../src/assets/icons/bulb.svg"
import star from "../src/assets/icons/star1.svg"
import star2 from "../src/assets/icons/star2.svg"
import arrow from "../src/assets/icons/arrow.svg"
import lady from "../src/assets/icons/lady2.svg"
import chart from "../src/assets/icons/chart2.svg"

import pup from "../src/assets/icons/star_purple.svg"


const Home = () => {
    const backgroundImageUrl = '/public/smart.png';

    // ../src/assets/images/man-wearing-smart-glasses-touching-virtual-screen\ 1.png
    return (
        <div className='Home'>

            <Navbar />
            <section className="Home-first-section">

                <section className='first-section'>

                    <div className="igniting">
                        <h1>Igniting a Revolution in HR Innovation</h1>
                        <img className="curve" src={curve} alt="" />
                    </div>

                    <div className="get-linked">
                        <div className='flexo '>
                            <img className='star' src={star} alt="" />
                            <img className='star2' src={star2} alt="" />
                        </div>
                        <img className='bulb-mobile' src={bulb} alt="" />
                        <h1 className="getlinked">getlinked Tech</h1>
                        <div className="hackathon-text">
                            Hackathon <span className="purple-text">1.0</span>
                            <span><img className='mobile-chain' src={chain} alt="" /></span> <span><img className='mobile-chain' src={fire} alt="" /></span>
                        </div>
                    </div>

                    <div className="intro-texts">
                        Participate in getlinked tech Hackathon
                        2023 stand a chance to win a Big prize
                    </div>

                    <div className='li '>
                        <div className=" register-button">
                            Register
                        </div>
                        <img className='starl' src={star2} alt="" />

                    </div>

                    <div className="countdown">
                        <div className="time">
                            00 <span className='time-text'>H</span>
                        </div>

                        <div className="time">
                            00 <span className='time-text'>M</span>
                        </div>

                        <div className="time">
                            00 <span className='time-text'>S</span>
                        </div>
                    </div>


                </section>

                <div className="sec">
                    <div className="second-section">

                        <div className="mobile-tech">

                        </div>

                    </div>


                </div>


                <div className="nav-line"></div>

                <div className="third-section">

                    <div className="bulb-big-div">
                        <div className="bulb-big">
                            <p className="big-idea-text">
                                The Big Idea!
                            </p>
                        </div>

                    </div>
                    <img src={arrow} title='curved arrow icon' alt=" curved arrow icon" className="arrow-mobile mt-[0.63rem] mb-[1.38rem] w-[1.216rem] h-[1.426] " />

                    <div className="third-intro mb-[0.56rem]">
                        Introduction to getlinked
                        <span className="putple-intro text-normal"> tech Hackathon 1.0</span>
                    </div>

                    <p className="third-texts">
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as
                        day: to shape the future. Whether you're
                        a coding genius, a design maverick, or a
                        concept wizard, you'll have the chance to transform your ideas into reality. Solving
                        real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world, that's what we're all about!
                    </p>

                    <div className="nav-line"></div>



                </div>






                <div className="fourth-section">

                    <div className="first-left-purple">
                        <img className='starfl' src={star} alt="" />

                        <img src={lady} alt="" className="lady" />


                    </div>



                    <div className="first-right-purple">
                        <img className='starfl2' src={star2} alt="" />

                        <div className="rulesg">
                            Rules and <span className="purple-text">
                                Guidelines
                            </span>

                        </div>

                        <div className="rulesg-text">
                            Our tech hackathon is a melting pot of
                            visionaries, and its purpose is as clear as day:
                            to shape the future. Whether you're a coding
                            genius, a design maverick, or a concept
                            wizard, you'll have the chance to transform
                            your ideas into reality. Solving real-world
                            problems, pushing the boundaries of
                            technology, and creating solutions that can
                            change the world, that's what we're all about!
                        </div>
                        <img className='starfl liop' src={star} alt="" />





                    </div>





                </div>

                <div className="h-line"></div>


                <div className="fifth-section bg-darkp">

                    <img className='limo' src={pup} alt="" />

                    <img src={chart} alt="" className="chart-icon" />


                    <div className="chart-texts">
                        <div className="chart-head">
                            Judging Criteria<span className='text-normal'>Key attributes </span>
                        </div>

                        <p className="chart-text">
                            <span className='spanText'>Innovation and Creativity: </span>  Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                        </p>

                        <p className="chart-text">
                            <span className='spanText'>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                        </p>

                        <p className="chart-text">
                            <span className=' spanText'>Impact and Relevance:</span>   Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                        </p>

                        <p className="chart-text">
                            <span className='spanText'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                        </p>

                        <p className="chart-text">
                            <span className='spanText'>Adherence to Hackathon Rules:</span>  Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
                        </p>

                        <button className="chart-more">
                            Read More
                        </button>

                        <img className='chart-star' src={star} alt="" />
                    </div>


                    <div className="h-line"></div>


                </div>

                <div className="sixth-section">
                    <img className='limoz' src={pup} alt="" />


                    <h1 className="chart-head w-[9.88rem] h-[3.375rem] ">
                        Frequently Ask <span className='text-normal'>Question</span>
                    </h1>

                    <p className="ask-desc">
                        We got answers to the questions that you might
                        want to ask about getlinked Hackathon 1.0
                    </p>


                </div>



            </section>


        </div>
    );
}

export default Home;
