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


                <section className="second-section " style={{
                    backgroundImage: `url(${backgroundImageUrl})`,

                }}>
                    <div className="mobile-tech">
                    </div>

                </section>

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

            </section>



        </div>
    );
}

export default Home;
