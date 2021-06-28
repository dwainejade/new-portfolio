import React from 'react'
import './Projects.scss'
import MovieHub from './MovieHub';
import Plants from './Plants';
import SecretRecipe from './SecretRecipe';


const Projects = () => {

    return (
        <div className="projects-container" >
            <div className="title">
                <h2>My Projects</h2>
                <h3>Here are some of the apps I'm proud of.</h3>
            </div>
            <div className="divider" />
            <MovieHub></MovieHub>
            <div className="divider" />
            <Plants></Plants>
            <div className="divider" />
            <SecretRecipe></SecretRecipe>
            <div className="divider" />
        </div>
    )
}

export default Projects
