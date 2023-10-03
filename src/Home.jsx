/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
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
import mark from "../src/assets/icons/question.svg"
import tman from "../src/assets/icons/think2.svg"
import pup from "../src/assets/icons/star_purple.svg"
import "./Home.css"
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';


const Home = () => {

    // setting useStates for the see more functionality in the frequently asked question section


    const backgroundImageUrl = '/public/smart.png';

    return (
        <div className='Home'>
            <Navbar />
            <section className="Home-first-section">
                <section className='first-section'>
                    <div className="igniting">
                        <h1>Igniting a Revolution in HR Innovation</h1>
                        <img className="curve" src={curve} alt="" loading="lazy" />
                    </div>
                    <div className="get-linked">
                        <div className='flexo '>
                            <img className='star' src={star} alt="" loading="lazy" />
                            <img className='star2' src={star2} alt="" loading="lazy" />
                        </div>
                        <img className='bulb-mobile' src={bulb} alt="" loading="lazy" />
                        <h1 className="getlinked">getlinked Tech</h1>
                        <div className="hackathon-text">
                            Hackathon <span className="purple-text">1.0</span>
                            <span><img className='mobile-chain' src={chain} alt="" loading="lazy" /></span>
                            <span><img className='mobile-chain' src={fire} alt="" loading="lazy" /></span>
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
                        <img className='starl' src={star2} alt="" loading="lazy" />
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
                        <div className="mobile-tech"></div>
                    </div>
                </div>



                <div className="nav-line"></div>
                <ThirdSection />

                <FourthSection />

                <div className="h-line"></div>

                <FifthSection />

                <SixthSection />

            </section>
        </div>
    );
}

export default Home;
