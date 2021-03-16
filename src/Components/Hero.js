import React from 'react'
import './Hero.scss'
import profile_pic from '../images/me.jpg'

function Hero() {
    return (
        <div className='hero-container'>
            <div className='description'>
                <h1>Dwaine Matthew</h1>
                <h2>Web Developer</h2>
                <p>Full-stack developer specialized in frontend and backend development for complex scalable web apps.</p>
            </div>
            <div className="hero-pic">
                <img alt="profile-pic" src={profile_pic} />
            </div>


        </div>
    )
}

export default Hero
