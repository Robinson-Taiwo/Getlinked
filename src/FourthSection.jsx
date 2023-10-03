/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import star from "../src/assets/icons/star1.svg"
import star2 from "../src/assets/icons/star2.svg"
import arrow from "../src/assets/icons/arrow.svg"
import lady from "../src/assets/icons/lady2.svg"

const FourthSection = () => {
  return (
   
    <div className="fourth-section">
    <div className="first-left-purple">
        <img className='starfl' src={star} alt="" loading="lazy" />
        <img src={lady} alt="" className="lady" />
    </div>
    <div className="first-right-purple">
        <img className='starfl2' src={star2} alt="" loading="lazy" />
        <div className="rulesg">
            Rules and <span className="purple-text">Guidelines</span>
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
        <img className='starfl liop' src={star} alt="" loading="lazy" />
    </div>
</div>

  )
}

export default FourthSection