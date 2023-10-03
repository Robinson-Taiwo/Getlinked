/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import arrow from "../src/assets/icons/arrow.svg"


const ThirdSection = () => {
  return (
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
  )
}

export default ThirdSection
