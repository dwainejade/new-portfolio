import React from 'react'
import './Projects.scss'
import MovieHub from './MovieHub';
import StorySquad from './StorySquad';
import Plants from './Plants';
import SecretRecipe from './SecretRecipe';


const Projects = () => {

    return (
        <div className="projects-container" >
            <div className="title">
                <h2>My Projects</h2>
                <h3>Here are a few apps that I've built.</h3>
            </div>
            <div className="divider" />
            <StorySquad/>
            <div className="divider" />
            <MovieHub/>
            <div className="divider" />
            <Plants/>
            <div className="divider" />
            <SecretRecipe/>
            <div className="divider" />
        </div>
    )
}

export default Projects
