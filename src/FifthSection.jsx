/* eslint-disable no-unused-vars */
import React from 'react'
import star from "../src/assets/icons/star1.svg"
import star2 from "../src/assets/icons/star2.svg"
import arrow from "../src/assets/icons/arrow.svg"
import lady from "../src/assets/icons/lady2.svg"
import chart from "../src/assets/icons/chart2.svg"
import mark from "../src/assets/icons/question.svg"
import tman from "../src/assets/icons/think2.svg"
import pup from "../src/assets/icons/star_purple.svg"

const FifthSection = () => {
  return (
    <div className="fifth-section bg-darkp">
    <img className='limo' src={pup} alt="" loading="lazy" />
    <img src={chart} alt="" className="chart-icon" loading="lazy" />
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
        <img className='chart-star' src={star} alt="" loading="lazy" />
    </div>
    <div className="h-line"></div>
</div>
  )
}

export default FifthSection
