import React, { useEffect } from 'react'
import './Skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher, faDatabase, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";


const headVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .4,
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

function Skills() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);



    return (
        <motion.div id='skills-section'
            variants={headVariants}
            animate={controls}
            initial="hidden"
            ref={ref}
        >
            <motion.div className="title">
                <h2>Skills</h2>
                <h3>I love learning new frameworks</h3>
                <div className="divider" />
            </motion.div>
            <div className="skills-wrapper">
                <motion.div className="categories">

                    <div className='skills-container'>
                        <motion.div className="category"
                            variants={headVariants}
                            animate={controls}
                            initial="hidden"
                            ref={ref}
                        >
                            <FontAwesomeIcon icon={faChalkboardTeacher} className="skill-icon" size="5x" color="#CF5C36" />
                            <h3>Front-End</h3>
                            <ul className="skills">
                                <li className="skill">React</li>
                                <li className="skill">HTML, CSS, SaSS, LESS</li>
                                <li className="skill">JavaScript, AJAX, JSON</li>
                                <li className="skill">Responsive Design</li>
                                <li className="skill">Bootstrap</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className='skills-container'>
                        <motion.div className="category"
                            variants={headVariants}
                            animate={controls}
                            initial="hidden"
                            ref={ref}
                        >
                            <FontAwesomeIcon icon={faDatabase} className="skill-icon" size="5x" color="#CF5C36" />
                            <h3>Backend</h3>
                            <ul className="skills">
                                <li className="skill">Node.js, Express</li>
                                <li className="skill">Postgres, SQLite</li>
                                <li className="skill">Python</li>
                                <li className="skill">Postman, Insomnia</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className='skills-container'>
                        <motion.div className="category"
                            variants={headVariants}
                            animate={controls}
                            initial="hidden"
                            ref={ref}
                        >
                            <FontAwesomeIcon icon={faWindowRestore} className="skill-icon" size="5x" color="#CF5C36" />
                            <h3>Other</h3>
                            <ul className="skills">
                                <li className="skill">Unit Testing</li>
                                <li className="skill">Version control (Git)</li>
                                <li className="skill">Figma, Illustrator</li>
                                <li className="skill">Detail-oriented</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    )
}

export default Skills
