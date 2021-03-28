import React, { useEffect } from 'react'
import './Projects.scss'
import sfr from '../images/sfr.png'
import plants from '../images/plants.png'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";


const leftVariants = {
    hidden: {
        opacity: 0,
        x: -30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .4,
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const rightVariants = {
    hidden: {
        opacity: 0,
        x: 30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .4,
            duration: 1,
            ease: 'easeInOut'
        }
    }
}


const Projects = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    // const titleRef = useRef()

    // function scrollBack() {
    //     titleRef.current.scrollIntoView({ behavior: 'smooth' })
    // }

    return (
        <div className="projects-container" >
            <div className="title">
                <h2>My Projects</h2>
                <h3>I have experience building the front-end and backend of apps.</h3>
            </div>
            <div className="project-a">
                <h3>Secret Family Recipe</h3>
                <h4>UX/UI, Front-end design</h4>
                <div className="project-wrapper">
                    <motion.div className="picture-wrapper"
                        variants={leftVariants}
                        animate={controls}
                        initial="hidden"
                        ref={ref}
                    >
                        <img className='grow' src={sfr} alt="laptop with pic of recipe website" />
                        <div className="button-wrapper">
                            <Button a href='https://my-secret-family-recipes.herokuapp.com' className='btn website-btn' variant='danger' >Visit Website</Button>
                            <Button a href='https://github.com/dwainejade/secret-family-recipes-frontend' className='btn website-btn' variant='primary' >View Code</Button>
                        </div>
                    </motion.div>
                    <motion.div className="caption-wrapper"
                        variants={rightVariants}
                        animate={controls}
                        initial="hidden"
                    >
                        <p className="caption">This app allows users to store recipes with ingredients, directions and pictures. Users can add, edit and delete recipes. <br />
                        I designed the UX of the app to be simple, clean and fully responsive; it looks great on mobile. The navbar and recipe cards were created using bootstrap components.
                        </p>
                        <div className="stacks">
                            <Badge pill variant="secondary">React</Badge>
                            <Badge pill variant="secondary">CSS</Badge>
                            <Badge pill variant="secondary">Bootstrap</Badge>
                            <Badge pill variant="secondary">Axios</Badge>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="project-b">
                <h3>Water My Plants API</h3>
                <h4>Backend Server</h4>
                <div className="project-wrapper"
                >
                    <motion.div className="picture-wrapper"
                        variants={leftVariants}
                        animate={controls}
                        initial="hidden"
                    >
                        <img src={plants} alt="phone with pic of recipe website" />
                        <div className='button-wrapper'>
                            <Button a href='https://watermy-plants.netlify.app' className='btn website-btn' variant='danger' >Visit Website</Button>
                            <Button id="code-btn" a href='https://github.com/dwainejade/water-my-plants-backend' className='btn website-btn' variant='primary' >View Code</Button>
                        </div>
                    </motion.div>
                    <motion.div className="caption-wrapper"
                        variants={rightVariants}
                        animate={controls}
                        initial="hidden"
                    >
                        <p className="caption">This app is for all the plant parents to keep track of when each of their children need to be watered. Users can store, update, and remove plants from the databas. <br /> I created the backend using Node.js and SQL to store user and plant data. The users password is hashed using bcrypt.js befored being stored.</p>
                        <div className="stacks">
                            <Badge pill variant="secondary">Node.js</Badge>
                            <Badge pill variant="secondary">SQLite</Badge>
                            <Badge pill variant="secondary">Express.js</Badge>
                            <Badge pill variant="secondary">Heroku</Badge>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="project-a">
                <h3>Secret Family Recipe</h3>
                <h4>UX/UI, Front-end design</h4>
                <div className="project-wrapper">
                    <motion.div className="picture-wrapper"
                        variants={leftVariants}
                        animate={controls}
                        initial="hidden"
                    >
                        <img className='grow' src={sfr} alt="laptop with pic of recipe website" />
                        <div className="button-wrapper">
                            <Button a href='https://my-secret-family-recipes.herokuapp.com' className='btn website-btn' variant='danger' >Visit Website</Button>
                            <Button a href='https://github.com/dwainejade/secret-family-recipes-frontend' className='btn website-btn' variant='primary' >View Code</Button>
                        </div>
                    </motion.div>
                    <motion.div className="caption-wrapper"
                        variants={rightVariants}
                        animate={controls}
                        initial="hidden"
                    >
                        <p className="caption">This app allows users to store recipes with ingredients, directions and pictures. Users can add, edit and delete recipes. <br />
                        I designed the UX of the app to be simple, clean and fully responsive; it looks great on mobile. The navbar and recipe cards were created using bootstrap components.
                        </p>
                        <div className="stacks">
                            <Badge pill variant="secondary">React</Badge>
                            <Badge pill variant="secondary">CSS</Badge>
                            <Badge pill variant="secondary">Bootstrap</Badge>
                            <Badge pill variant="secondary">Axios</Badge>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* <button onClick={scrollBack}>projects</button> */}
        </div>
    )
}

export default Projects
