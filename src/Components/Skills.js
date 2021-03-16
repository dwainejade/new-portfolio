import React from 'react'
import './Skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher, faDatabase, faWindowRestore } from '@fortawesome/free-solid-svg-icons'

function Skills() {
    return (
        <div className="skills-container">
            <div className="head">
                <h2>My Skills</h2>
                <h3>I have experience in both front and backend</h3>
            </div>
            <div className="categories">
                <div className="category">
                    <FontAwesomeIcon icon={faWindowRestore} size="5x" color="#CF5C36" />
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
                    <FontAwesomeIcon icon={faDatabase} size="5x" color="#CF5C36" />
                    <h3>Backend</h3>
                    <div className="skills">
                        <div className="skill">Postgres, SQLite</div>
                        <div className="skill">Node.js, Express</div>
                        <div className="skill">Python</div>
                        <div className="skill">Postman, Insomnia</div>
                    </div>
                </div>
                <div className="category">
                    <FontAwesomeIcon icon={faChalkboardTeacher} size="5x" color="#CF5C36" />
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
