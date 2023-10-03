/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import mark from "../src/assets/icons/question.svg"
import tman from "../src/assets/icons/think2.svg"
import pup from "../src/assets/icons/star_purple.svg"

const SixthSection = () => {

    const [first, setfirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [fifth, setFifth] = useState(false); const [sixth, setSixth] = useState(false)


  return (
    <div className="sixth-section">
    <img className='limoz' src={pup} alt="" loading="lazy" />
    <h1 className="chart-head w-[9.88rem] h-[3.375rem] ">
        Frequently Ask <span className='text-normal'>Question</span>
    </h1>
    <p className="ask-desc ">
        We got answers to the questions that you might
        want to ask about getlinked Hackathon 1.0
    </p>
    <div className="ask-questions ">
        <div className="que">
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
        <div className="que">
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
        <div className="que">
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
        <div className="que">
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
        <div className="que">
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
        <div className="que">
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
    <div className="question-marks flex flex-row ">
        <img className='small-mark' src={mark} alt="" />
        <img className='big-mark' src={mark} alt="" />
        <img className='small-mark' src={mark} alt="" />
    </div>
    <img src={tman} alt="" className="think2" loading="lazy" />
</div>
  )
}

export default SixthSection