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

const Home = () => {
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


            </section>



        </div>
    );
}

export default Home;
