/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import curve from "../src/assets/icons/curve.svg"
import chain from "../src/assets/icons/chain.svg"
import boy from "../src/assets/icons/keyboy.svg"
import fire from "../src/assets/icons/fire.svg"
import bulb from "../src/assets/icons/bulb.svg"
import star from "../src/assets/icons/star1.svg"
import star2 from "../src/assets/icons/star2.svg"
import bgleft from "../src/assets/images/purple-lens-mobile.png"
import bgright from "../src/assets/images/purpleRight.png"
import pupstar from "../src/assets/icons/footer_small_purple.svg"
import transStar from "../src/assets/icons/trans-star.svg"
import smallStar from "../src/assets/icons/footer-small-star.svg"
import sw from "../src/assets/icons/sw.svg"
import px from "../src/assets/icons/px.svg"
import arrow from "../src/assets/icons/arrow.svg"
import check from "../src/assets/icons/check.svg"
import shield from "../src/assets/icons/sheild.svg"
import lady from "../src/assets/icons/lady2.svg"
import chart from "../src/assets/icons/chart2.svg"
import mark from "../src/assets/icons/question.svg"
import tman from "../src/assets/icons/think2.svg"
import trophy from "../src/assets/icons/trophy.svg"
import pup from "../src/assets/icons/star_purple.svg"
import partners from "../src/assets/icons/partners.png"
import bronze from "../src/assets/icons/bronze_medal.svg"
import gold from "../src/assets/icons/gold_medal.svg"
import silver from "../src/assets/icons/silver_medal.svg"
import smart from "../src/assets/images/occulus.png"
import mido from "../src/assets/images/midp.png"
import midop from "../src/assets/images/midr.png"
import mobileTech from "../src/assets/images/mobit.png"
import Footer from './Footer';
import { Link } from 'react-router-dom';
import "./Home.css"
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Initialize ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);
import { motion, useAnimation } from 'framer-motion';
import { fadeFromRightAnimation, fadeInAnimation, fadeInBounceAnimation, useScrollAnimation } from './Animation';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS



const Home = () => {


    const [first, setfirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [fifth, setFifth] = useState(false); const [sixth, setSixth] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 3000, // Set the default duration to 3000ms (3 seconds)
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            console.log('Scroll Y Position:', scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backgroundImageUrl = '/public/smart.png';

    // defining the time functionality counting down from three days

    const threeDaysInSeconds = 345600;
    const [timeLeft, setTimeLeft] = useState(threeDaysInSeconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft => timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            clearInterval(intervalId);
        }
    }, [timeLeft]);

    const days = Math.floor(timeLeft / 86400);
    const hours = Math.floor((timeLeft % 86400) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const secondsRemaining = timeLeft % 60;






    // the main function

    return (
        <div className='Home'>
            {/* navbar at the top of the  home page */}
            <div className="navvy">
                <Navbar />
                <div className="oline"></div>
            </div>
            <section className="Home-first-section">

                <div className="igniting-div">

                    <img src={mido} alt="" className="bgleft-top" />

                    <img src={midop} alt="" className="bgright-top" />


                    <div data-aos="fade-right" data-aos-duration="1000" className="igniting">
                        <h1    >Igniting a Revolution in HR Innovation</h1>
                        <img className="curve" src={curve} alt="" loading="lazy" />
                    </div>
                </div>

                <div className="home-first-flex">


                    <section className='first-section'>
                        {/* data-aos-delay="1500"  */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="get-linked">
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
                        <div data-aos="fade-up" data-aos-duration="1000"
                            data-aos-delay="1200"
                            className="intro-texts">
                            Participate in getlinked tech Hackathon
                            2023 stand a chance to win a Big prize
                        </div>
                        <div className='li '>
                            <Link data-aos="fade-left" data-aos-duration="1000"
                                data-aos-delay="1500" to="/Registration" className=" register-button">
                                Register
                            </Link>
                            <img className='starl' src={star2} alt="" loading="lazy" />
                        </div>
                        <div
                            data-aos="fade-up" data-aos-duration="3000"
                            data-aos-delay="2000"
                            className="countdown">
                            <div className="time">
                                {hours} <span className='time-text'>H</span>
                            </div>
                            <div className="time">
                                {minutes} <span className='time-text'>M</span>
                            </div>
                            <div className="time">
                                {secondsRemaining} <span className='time-text'>S</span>
                            </div>
                        </div>
                    </section>
                    <div className="sec">
                        <div data-aos="zoom-in" data-aos-duration="3000"
                            data-aos-delay="100" className="second-sectionlo">

                            <img src={smart} alt="" className="second-section" />



                            <img src={mobileTech} alt="" className="mobile-tech" />



                        </div>
                    </div>
                </div>









                <div className="nav-line"></div>




                <div className="third-section">
                    <div className="bulb-big-div">
                        <div data-aos="zoom-in" data-aos-duration="3000" className="bulb-big">
                            <p className="big-idea-text">
                                The Big Idea!
                            </p>
                        </div>
                        <img src={arrow} title='curved arrow icon' alt=" curved arrow icon" className="arrow-mobile" />
                    </div>



                    <div className=' kloi'>



                        <div data-aos="fade-down" data-aos-duration="1000" className='third-into-div' >

                            <div className="third-intro ">
                                Introduction to getlinked
                                <span className="putple-intro text-normal"> tech Hackathon 1.0</span>
                            </div>

                        </div>




                        <div data-aos="fade-up" data-aos-duration="3000"
                            className="third-texts">
                            Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as
                            day: to shape the future. Whether you're
                            a coding genius, a design maverick, or a
                            concept wizard, you'll have the chance to transform your ideas into reality. Solving
                            real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world, that's what we're all about!
                        </div>
                    </div>



                </div>


                <div>

                    <div className="oline"></div>
                </div>
                <div className=' opacity-0' > .</div>


                <div className="fourth-section">
                    <img src={bgleft} alt="" className="bgleftll" />
                    <div className="first-left-purple ">


                        <img className='starfl' src={star} alt="" loading="lazy" />
                        <img data-aos-easing="linear"
                            data-aos="zoom-in-up" data-aos-duration="1000" src={lady} alt="" className="lady" />
                    </div>
                    <div className="first-right-purple">
                        <img className='starfl2' src={star2} alt="" loading="lazy" />
                        <div data-aos-easing="linear"
                            data-aos="zoom-in-down" data-aos-duration="1000" className="rulesg">
                            <img src={mido} alt="" className="bgleft-topt" />
                            Rules and <span className="purple-text">Guidelines</span>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000"
                            data-aos-delay="1000" className="rulesg-text">
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
                        <img className='starfl liop' src={star} alt="" loading="lazy" />
                    </div>
                </div>
                <div className="oline "></div>

                <p className='w-text ' >w</p>

                <div className="fifth-section bg-darkp">
                    <img className='limo' src={pup} alt="" loading="lazy" />
                    <img data-aos-easing="ease-out-cubic"
                        data-aos="zoom-right" data-aos-delay="000" data-aos-duration="1200" src={chart} alt="" className="chart-icon" loading="lazy" />

                    <img src={bgleft} alt="" className="bgleftnj" />


                    <div className="chart-texts">

                        <div data-aos-easing="linear"
                            data-aos="fade-left" data-aos-duration="1000" className="chart-texts-head">
                            <div className="chart-headj  ">
                                Judging Criteria<span className='text-normal overflow-hidden '>Key attributes </span>
                            </div>

                        </div>

                        <p data-aos-easing="linear"
                            data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000" className="chart-text desktop:w-[33.3rem] ">
                            <span className='spanText'>Innovation and Creativity: </span>  Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                        </p>
                        <p data-aos-easing="linear"
                            data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1100" className="chart-text desktop:w-[31.8rem]">
                            <span className='spanText '>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                        </p>
                        <p data-aos-easing="linear"
                            data-aos="fade-left" data-aos-delay="1400" data-aos-duration="1200" className="chart-text  desktop:w-[32.7rem]">
                            <span className=' spanText'>Impact and Relevance:</span>   Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                        </p>
                        <p data-aos-easing="linear"
                            data-aos="fade-right" data-aos-delay="1600" data-aos-duration="1300" className="chart-text desktop:w-[34.8rem]">
                            <span className='spanText'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                        </p>
                        <p data-aos-easing="linear"
                            data-aos="fade-left" data-aos-delay="1800" data-aos-duration="1400" className="chart-text desktop:w-[35.3rem] relative">
                            <span className='spanText'>Adherence to Hackathon Rules:</span>  Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.


                        </p>
                        <button data-aos-easing="ease-out-cubic"
                            data-aos="flip-up" data-aos-delay="1900" data-aos-duration="1400" className="chart-more">
                            Read More
                        </button>
                        <img className='chart-star' src={star} alt="" loading="lazy" />
                    </div>
                    <img src={bgright} alt="" className="bgleftnjl" />

                </div>
                <div className="oline"></div>
                <p className='w-text ' >w</p>





                <div className="sixth-section">



                    <div className="sixth-section-first">

                        <img className='limoz' src={pup} alt="" loading="lazy" />

                        <h1 data-aos-easing="ease-out-cubic"
                            data-aos="flip-left" data-aos-delay="0000" data-aos-duration="1000" className="chart-headl  ">
                            Frequently Ask <span className='freq text-normal  '>Question</span>
                        </h1>

                        <p data-aos-easing="ease-out-cubic"
                            data-aos="flip-up" data-aos-delay="1000" data-aos-duration="1400" className="ask-desc  ">
                            We got answers to the questions that you might
                            want to ask about getlinked Hackathon 1.0
                        </p>


                        <div className="ask-questions ">
                        </div>
                        <div data-aos-easing="ease-out-cubic"
                            data-aos="fade-right" data-aos-delay="000" data-aos-duration="1000" className="que">
                            <div className="quet">
                                <p className="questions-texts">
                                    Can I work on a project I started before the hackathon?
                                </p>
                                <p onClick={() => setfirst(!first)} className={first ? "plus-rot" : "plus-icon"}>
                                    +
                                </p>
                            </div>
                            <div className={first ? "answers" : "hidden"}>
                                We got answers to the questions that you might
                                want to ask about getlinked Hackathon 1.0
                            </div>
                            <div className="h-pline"></div>
                        </div>
                        <div data-aos-easing="ease-out-cubic"
                            data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" className="que">
                            <div className="quet">
                                <p className="questions-texts">
                                    What happens if I need help during the hackathon?
                                </p>
                                <p onClick={() => setSecond(!second)} className={second ? "plus-rot" : "plus-icon"}>
                                    +
                                </p>
                            </div>
                            <div className={second ? "answers" : "hidden"}>
                                We got answers to the questions that you might
                                want to ask about getlinked Hackathon 1.0
                            </div>
                            <div className="h-pline"></div>
                        </div>
                        <div data-aos-easing="ease-out-cubic"
                            data-aos="fade-right" data-aos-delay="1100" data-aos-duration="1000" className="que">
                            <div className="quet">
                                <p className="questions-texts">
                                    What happens if I don't have an idea for a project?
                                </p>
                                <p onClick={() => setThird(!third)} className={third ? "plus-rot" : "plus-icon"}>
                                    +
                                </p>
                            </div>
                            <div className={third ? "answers" : "hidden"}>
                                We got answers to the questions that you might
                                want to ask about getlinked Hackathon 1.0
                            </div>
                            <div className="h-pline"></div>
                        </div>
                        <div data-aos-easing="ease-out-cubic"
                            data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1000" className="que">
                            <div className="quet">
                                <p className="questions-texts">
                                    Can I join a team or do I have to come with one?
                                </p>
                                <p onClick={() => setFourth(!fourth)} className={fourth ? "plus-rot" : "plus-icon"}>
                                    +
                                </p>
                            </div>
                            <div className={fourth ? "answers" : "hidden"}>
                                We got answers to the questions that you might
                                want to ask about getlinked Hackathon 1.0
                            </div>
                            <div className="h-pline"></div>
                        </div>
                        <div data-aos-easing="ease-out-cubic"
                            data-aos="fade-right" data-aos-delay="1300" data-aos-duration="1000" className="que">
                            <div className="quet">
                                <p className="questions-texts">
                                    What happens after the hackathon ends
                                </p>
                                <p onClick={() => setFifth(!fifth)} className={fifth ? "plus-rot" : "plus-icon"}>
                                    +
                                </p>
                            </div>
                            <div className={fifth ? "answers" : "hidden"}>
                                We got answers to the questions that you might
                                want to ask about getlinked Hackathon 1.0
                            </div>
                            <div className="h-pline"></div>
                        </div>
                        <div data-aos-easing="ease-out-cubic"
                            data-aos="fade-right" data-aos-delay="1400" data-aos-duration="1000" className="que">
                            <div className="quet">
                                <p className="questions-texts">
                                    Can I work on a project I started before the hackathon?
                                </p>
                                <p onClick={() => setSixth(!sixth)} className={sixth ? "plus-rot" : "plus-icon"}>
                                    +
                                </p>
                            </div>
                            <div className={sixth ? "answers" : "hidden"}>
                                We got answers to the questions that you might
                                want to ask about getlinked Hackathon 1.0
                            </div>
                            <div className="h-pline"></div>
                        </div>
                    </div>
                    {/* thinking man icon */}


                    <div className="sixth-section-second">

                        <div className="question-marks flex flex-row ">
                            <img className='small-mark' src={mark} alt="" />
                            <img className='big-mark' src={mark} alt="" />
                            <img className='small-mark' src={mark} alt="" />
                        </div>
                        <img data-aos-easing="ease-out-cubic"
                            data-aos="flip-right" data-aos-delay="000" data-aos-duration="1200" src={tman} alt="" className="think2" loading="lazy" />

                    </div>

                </div>

                <div className="oline"></div>

                <section className="seventh-line">

                    <h1 data-aos-easing="ease-out-cubic"
                        data-aos="fade-down" data-aos-delay="0000" data-aos-duration="1000" className="timeline">
                        Timeline
                    </h1>

                    <h4 data-aos-easing="ease-in-back"
                        data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className="timeline-desc">
                        Here is the breakdown of the time we
                        anticipate using for the upcoming event.
                    </h4>

                    <div className="timelineb relative ">

                        <div className="sub-timeline">

                            <div className="line-c">

                                <div className="time-line">

                                </div>

                                <div className="time-circle">
                                    1
                                </div>

                            </div>

                            <div className="sub-timeline-text  ">


                                <div data-aos-easing="ease-in-back"
                                    data-aos="fade-left" data-aos-delay="0000" data-aos-duration="1000" className="stti leftone text-start">



                                    <h2  >
                                        Hackathon Announcement
                                    </h2>

                                    <p className='text-start desktop:text-end' >
                                        The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register
                                    </p>
                                </div>


                                <div className="line-cl">

                                    <div className="time-line">

                                    </div>

                                    <div className="time-circle">
                                        1
                                    </div>

                                </div>


                                <h3 data-aos-easing="ease-in-back"
                                    data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" >
                                    November 18, 2023
                                </h3>

                            </div>

                        </div>

                        <div className="sub-timeline">




                            <div className="line-c">

                                <div className="time-line">

                                </div>

                                <div className="time-circle">
                                    2
                                </div>

                            </div>




                            <div className="sub-timeline-text desktop:flex-row-reverse">

                                <div data-aos-easing="ease-in-back"
                                    data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1100" className="stti">

                                    <h2  >
                                        Teams Registration begins
                                    </h2>

                                    <p>
                                        Interested teams can now show their interest
                                        in the getlinked tech hackathon 1.0 2023 by
                                        proceeding to register
                                    </p>

                                </div>


                                <div className="line-cl">

                                    <div className="time-line">

                                    </div>

                                    <div className="time-circle">
                                        2
                                    </div>

                                </div>


                                <h3 data-aos-easing="ease-in-back"
                                    data-aos="fade-left" data-aos-delay="1100" data-aos-duration="1000" className='leftone leftonedate'>
                                    November 18, 2023
                                </h3>
                            </div>






                        </div>


                        <div className="sub-timeline">

                            <div className="line-c">

                                <div className="time-line">

                                </div>

                                <div className="time-circle">
                                    3
                                </div>

                            </div>

                            <div className="sub-timeline-text">

                                <div data-aos-easing="ease-in-back"
                                    data-aos="fade-left" data-aos-delay="1300" data-aos-duration="1000" className="stti leftonedate">


                                    <h2 >
                                        Teams Registration ends
                                    </h2>

                                    <p className='leftone leftonedate'>
                                        Interested Participants are no longer Allowed
                                        to register
                                    </p>
                                </div>


                                <div className="line-cl">

                                    <div className="time-line">

                                    </div>

                                    <div className="time-circle">
                                        3
                                    </div>

                                </div>


                                <h3 data-aos-easing="ease-in-back"
                                    data-aos="fade-right" data-aos-delay="1400" data-aos-duration="1000" >
                                    November 18, 2023
                                </h3>

                            </div>

                        </div>


                        <div className="sub-timeline">

                            <div className="line-c">

                                <div className="time-line">

                                </div>

                                <div className="time-circle">
                                    4
                                </div>

                            </div>

                            <div className="sub-timeline-text desktop:flex-row-reverse " >


                                <div data-aos-easing="ease-in-back"
                                    data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1000" className="stti">


                                    <h2>
                                        Announcement of the accepted teams
                                        and ideas
                                    </h2>

                                    <p>
                                        The getlinked tech hackathon 1.0 is                             formally announced to the general public and teams begin to get ready to register
                                    </p>
                                </div>




                                <div className="line-cl">

                                    <div className="time-line">

                                    </div>

                                    <div className="time-circle">
                                        4
                                    </div>

                                </div>


                                <h3 data-aos-easing="ease-in-back"
                                    data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000" className='leftone leftonedate'>
                                    November 18, 2023
                                </h3>

                            </div>

                        </div>


                        <div className="sub-timeline">

                            <div className="line-c">

                                <div className="time-line">

                                </div>

                                <div className="time-circle">
                                    5
                                </div>

                            </div>

                            <div className="sub-timeline-text">



                                <div data-aos-easing="ease-in-back"
                                    data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000" className="stti leftonedate">



                                    <h2>
                                        Hackathon Announcement
                                    </h2>

                                    <p className='leftone leftonedate'>
                                        The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register
                                    </p>
                                </div>

                                <div className="line-cl">

                                    <div className="time-line">

                                    </div>

                                    <div className="time-circle">
                                        5
                                    </div>

                                </div>


                                <h3 data-aos-easing="ease-in-back"
                                    data-aos="fade-right" data-aos-delay="1700" data-aos-duration="1000" >
                                    November 18, 2023
                                </h3>

                            </div>




                        </div>

                        <div className="sub-timeline">

                            <div className="line-c">

                                <div className="time-line">

                                </div>

                                <div className="time-circle">
                                    6
                                </div>

                            </div>

                            <div className="sub-timeline-text desktop:flex-row-reverse">


                                <div data-aos-easing="ease-in-back"
                                    data-aos="fade-left" data-aos-delay="1800" data-aos-duration="1000" className="stti ">


                                    <h2>
                                        Hackathon Announcement
                                    </h2>

                                    <p>
                                        The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register
                                    </p>
                                </div>

                                <div className="line-cl">

                                    <div className="time-line">

                                    </div>

                                    <div className="time-circle">
                                        6
                                    </div>

                                </div>



                                <h3 data-aos-easing="ease-in-back"
                                    data-aos="fade-right" data-aos-delay="1900" data-aos-duration="1000" className='leftone leftonedate'>
                                    November 18, 2023
                                </h3>

                            </div>

                        </div>

                    </div>



                </section>

                <div className="eight-line">


                    <img src={px} alt="" className="prizepup star" />

                    <img src={px} alt="" className="rewepup star" />



                    <div className="trophy-header">


                        <h1 data-aos-easing="ease-in-back"
                            data-aos="zoom-in-up" data-aos-delay="0000" data-aos-duration="1000" className="eight-header">
                            Prizes and <span className="header-purple"> Rewards</span>

                        </h1>

                        <p data-aos-easing="ease-in-back"
                            data-aos="zoom-in-down" data-aos-delay="1100" data-aos-duration="1000" className="highlight">
                            Highlight of the prizes or rewards for winners
                            and for participants.

                        </p>
                    </div>


                    <img src={bgleft} alt="" className="bgleftn  " />


                    <div className="trophy-row">

                        <img data-aos-easing="ease-in-back"
                            data-aos="zoom-out" data-aos-delay="0000" data-aos-duration="2000" src={trophy} alt="" className="trophy-icon" />

                        <img src={star} alt="" className="prizew star" />

                        <img src={star} alt="" className="prizew2 star" />


                        <div className="rewards-coner relative">

                            <img src={bgright} alt="" className="bgright   desktop:hidden" />

                            <div data-aos-easing="ease-in-back"
                                data-aos="flip-left" data-aos-delay="0000" data-aos-duration="1000" className="trophs2">

                                <img src={silver} alt="" className="medals2" />

                                <div className="md2">

                                    <div className="md2-text">
                                        <p>2nd </p>
                                        <p>Runner</p>
                                        <h6 className='md2l' >N 300,000
                                        </h6>
                                    </div>


                                </div>

                            </div>

                            <div data-aos-easing="ease-in-back"
                                data-aos="flip-right" data-aos-delay="1000" data-aos-duration="1000" className="trophs">
                                <img src={gold} alt="" className="medals" />

                                <div className="md1">
                                    <div className="md2-text">
                                        <p >1st </p>
                                        <p>Runner</p>
                                        <h6 className='md1l' >N 400,000
                                        </h6>
                                    </div>

                                </div>


                            </div>

                            <div data-aos-easing="ease-in-back"
                                data-aos="flip-left" data-aos-delay="0000" data-aos-duration="1000" className="trophs2">
                                <img src={bronze} alt="" className="medals2" />

                                <div className="md2">
                                    <div className="md2-text">
                                        <p>3rd </p>
                                        <p>Runner</p>
                                        <h6
                                            className='md2l' >N 150,000
                                        </h6>
                                    </div>

                                </div>


                            </div>


                            <img src={transStar} alt="" className="prizetrans star desktop:hidden " />

                        </div>

                    </div>



                </div>


                <section className="ninth-section">

                    <h1 data-aos-easing="ease-in-back"
                        data-aos="fade-down" data-aos-delay="000" data-aos-duration="1000" className="pas">
                        Partners and Sponsors
                    </h1>

                    <img src={bgleft} alt="" className="bgleftn" />

                    <p data-aos-easing="ease-in-back"
                        data-aos="fade-down" data-aos-delay="000" data-aos-duration="1000" className="past">
                        Getlinked Hackathon 1.0 is honored to have the
                        following major companies as its partners and
                        sponsors
                    </p>

                    <div className="partners">

                        <img className='psx absolute' src={px} alt="" />

                        <img data-aos-easing="ease-in-back"
                            data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000" src={partners} className='partners-image' alt="" />

                        <img src={star} className='starpartl' alt="" />

                    </div>
                    <img src={bgright} alt="" className="bgrightps" />



                </section>

                <div className="oline"></div>

                <div className=' opacity-0' > .</div>

                <div className="tenth-section">


                    <div className="tenth-section-first">


                        <img src={transStar} className='small-stars' alt="" />

                        <h1 data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom" className="tenth-head">
                            Privacy Policy and <span className='milo' >Terms</span>

                        </h1>

                        <h6 data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom" >Last updated on September 12, 2023</h6>

                        <p data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom" className="ppat relative">
                            Below are our privacy & policy, which outline a
                            lot of goodies. it’s our aim to always take of our
                            participant

                            <img className='pxl' src={px} alt="" />
                        </p>




                        <div data-aos="flip-left"
                            data-aos-anchor-placement="bottom-bottom" className="ppat-inner">

                            <p className="ppat-inner-one">

                                At getlinked tech Hackathon 1.0, we
                                value your privacy and are committed
                                to protecting your personal information.
                                This Privacy Policy outlines how we collect,
                                use, disclose, and safeguard your data
                                when you participate in our tech hackathon
                                event. By participating in our event, you
                                consent to the practices described in this
                                policy.
                            </p>


                            <div className="lisencing-policy">

                                <h3>
                                    Licensing Policy
                                </h3>
                                <h4>
                                    Here are terms of our Standard License:
                                </h4>
                            </div>



                            <div className='standard-lisence relative'>
                                <img src={check} alt="" />

                                <p>The Standard License grants you a
                                    non-exclusive right to navigate and
                                    register for our event</p>


                            </div>


                            <img src={bgleft} className='bgleft' alt="" />

                            <div className='standard-lisence mt-[1.5rem] relative'>
                                <img src={check} alt="" />

                                <p>You are licensed to use the item
                                    available at any free source sites, for
                                    your project developement</p>

                                <img src={px} alt="mimi" className='mimi' />
                            </div>


                            <div className='readMore-container w-[100%]  flex items-center justify-center ' >
                                <div className="chart-more ">
                                    Read More
                                </div>
                            </div>

                        </div>
                    </div>




                    <div data-aos="flip-right"
                        data-aos-anchor-placement="bottom-bottom" className='shield-container' >

                        <img src={px} alt="" className="shieldpup" />

                        <img src={sw} alt="" className="shieldw" />

                        <img loading='lazy' src={shield} alt="" className="shield" />

                        <img loading='lazy' src={boy} alt="" className="keyboy" />

                        <img src={star} alt="" className="boyw" />

                        <img src={transStar} alt="" className="boyts" />


                    </div>


                </div>


                <div>
                    <Footer />
                </div>

            </section>
        </div>
    );
}

export default Home;