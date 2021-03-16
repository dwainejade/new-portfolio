import React from 'react'
import './Skills.scss'
import frontend_icon from '../images/frontend.svg'
import cloud_icon from '../images/cloud.png'
import other_icon from '../images/other.svg'

function Skills() {
    return (
        <div className="skills-container">
            <div className="head">
                <h2>My Skills</h2>
                <h3>I have experience in both front and backend</h3>
            </div>
            <div className="categories">
                <div className="category">
                    <img src={frontend_icon} alt="front-end icon" />
                    <h3>Front-End</h3>
                    <ul className="skills">
                        <li className="skill">React</li>
                        <li className="skill">HTML, CSS, SaSS, LESS</li>
                        <li className="skill">JavaScript, AJAX, JSON</li>
                        <li className="skill">Responsive Design</li>
                        <li className="skill">Bootstrap</li>
                    </ul>
                </div>
                <div className="category">
                    <img src={cloud_icon} alt="front-end icon" />
                    <h3>Backend</h3>
                    <div className="skills">
                        <div className="skill">Postgres, SQLite</div>
                        <div className="skill">Node.js, Express</div>
                        <div className="skill">Python</div>
                        <div className="skill">Postman, Insomnia</div>
                    </div>
                </div>
                <div className="category">
                    <img src={other_icon} alt="front-end icon" />
                    <h3>Other</h3>
                    <div className="skills">
                        <div className="skill">Unit Testing</div>
                        <div className="skill">Version control (Git)</div>
                        <div className="skill">Wirefaming, Figma, Illustrator</div>
                        <div className="skill">Detail-oriented</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills
