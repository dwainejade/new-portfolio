import React, { useRef } from 'react'
import './Projects.scss'
import sfr from '../images/sfr.png'
import plants from '../images/plants.png'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


const Projects = () => {
    const titleRef = useRef()


    function scrollBack() {
        titleRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="projects-container" >
            <div className="title">
                <h2 ref={titleRef}>My Projects</h2>
                <h3>I have experience building the front-end and backend of apps.</h3>
            </div>
            <div className="project-a">
                <h3>Secret Family Recipe</h3>
                <h4>UX/UI, Front-end design</h4>
                <div className="project-wrapper">
                    <div className="picture-wrapper">
                        <img src={sfr} alt="laptop with pic of recipe website" />
                        <div className="button-wrapper">
                            <Button a href='https://my-secret-family-recipes.herokuapp.com' className='btn website-btn' variant='danger' >Visit Website</Button>
                            <Button a href='https://github.com/dwainejade/secret-family-recipes-frontend' className='btn website-btn' variant='primary' >View Code</Button>
                        </div>
                    </div>
                    <div className="caption-wrapper">
                        <p className="caption">This app allows users to store recipes with ingredients, directions and pictures. Users can add, edit and delete recipes. <br />
                        I designed the UX of the app to be simple, clean and fully responsive; it looks great on mobile. The navbar and recipe cards were created using bootstrap components.
                        </p>
                        <div className="stacks">
                            <Badge pill variant="secondary">React</Badge>
                            <Badge pill variant="secondary">CSS</Badge>
                            <Badge pill variant="secondary">Bootstrap</Badge>
                            <Badge pill variant="secondary">Axios</Badge>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-b">
                <h3>Water My Plants API</h3>
                <h4>Backend Server</h4>
                <div className="project-wrapper">
                    <div className="picture-wrapper">
                        <img src={plants} alt="phone with pic of recipe website" />
                        <div className='button-wrapper'>
                            <Button a href='https://watermy-plants.netlify.app' className='btn website-btn' variant='danger' >Visit Website</Button>
                            <Button id="code-btn"a href='https://github.com/dwainejade/water-my-plants-backend' className='btn website-btn' variant='primary' >View Code</Button>
                        </div>
                    </div>
                    <div className="caption-wrapper">
                        <p className="caption">This app is for all the plant parents to keep track of when each of their children need to be watered. Users can store, update, and remove plants from the databas. <br /> I created the backend using Node.js and SQL to store user and plant data. The users password is hashed using bcrypt.js befored being stored.</p>
                        <div className="stacks">
                            <Badge pill variant="secondary">Node.js</Badge>
                            <Badge pill variant="secondary">SQLite</Badge>
                            <Badge pill variant="secondary">Express.js</Badge>
                            <Badge pill variant="secondary">Heroku</Badge>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-a">
                <h3>Other Project</h3>
                <h4>Landing Page</h4>
                <div className="project-wrapper">
                    <img src={sfr} alt="laptop with pic of recipe website" />
                    <div className="caption-wrapper">
                        <p className="caption">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also.</p>
                        <div className="stacks">
                            <Badge pill variant="secondary">React</Badge>
                            <Badge pill variant="secondary">CSS</Badge>
                            <Badge pill variant="secondary">Bootstrap</Badge>
                            <Badge pill variant="secondary">Axios</Badge>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={scrollBack}>projects</button>
        </div>
    )
}

export default Projects
