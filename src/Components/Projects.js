import React from 'react'
import './Projects.scss'
import sfr from '../images/sfr.png'
import plants from '../images/plants.png'

function Projects() {
    return (
        <div className="projects-container">
            <div className="title">
                <h2>My Projects</h2>
                <h3>I have experience building the front-end and backend of apps.</h3>
            </div>
            <div className="project-a">
                <h3>Secret Family Recipe</h3>
                <h4>UX/UI, Front-end design</h4>
                <div className="project-wrapper">
                    <img src={sfr} alt="laptop with pic of recipe website" />
                    <div className="caption-wrapper">
                        <p className="caption">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <button className='btn website-btn'>visit website</button>
                    </div>

                </div>
            </div>
            <div className="project-b">
                <h3>Water My Plants API</h3>
                <h4>Backend Server</h4>
                <div className="project-wrapper">
                    <img src={plants} alt="phone with pic of recipe website" />
                    <p className="caption">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div>
            <div className="project-a">
                <h3>Other Project</h3>
                <h4>Landing Page</h4>
                <div className="project-wrapper">
                    <img src={sfr} alt="laptop with pic of recipe website" />
                    <p className="caption">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects
