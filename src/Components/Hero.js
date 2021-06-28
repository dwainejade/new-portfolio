import React from 'react'
import './Hero.scss'
import profile_pic from '../images/me.jpg'
import { motion } from 'framer-motion'

const descriptionVariants = {
    hidden: {
        opacity: 0,
        y: '30'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .3,
            duration: .75,
            ease: 'easeOut'
        }
    }
}

const picVariants = {
    hidden: {
        opacity: 0,
        y: '30'
    },
    visible: {
        zIndex: 1,
        opacity: 1,
        y: 0,
        transition: {
            duration: .75,
            ease: 'easeOut'
        }
    }
}

function Hero() {
    return (
        <div className='hero-container'>
            <motion.div className='description'
                variants={descriptionVariants}
                initial='hidden'
                animate='visible'
            >
                <h1>Dwaine Matthew</h1>
                <h2>Web Developer</h2>
                <p>Full-stack developer specialized in frontend design. Currently having too much fun with React.</p>
            </motion.div>
            <motion.div className="hero-pic"
                variants={picVariants}
                initial='hidden'
                animate='visible'
            >
                <img alt="profile-pic" src={profile_pic} />
            </motion.div>
        </div>
    )
}

export default Hero
