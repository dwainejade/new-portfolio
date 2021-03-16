import React from 'react'
import './Nav.scss'

function Nav() {
    return (
        <div className='navbar'>
            <a href='/' className='logo'>
                Dwaine Matthew
            </a>
            <div className='nav-links'>
                <a href='/contact' className='link'>Contact</a>
                <a href='/projects' className='link'>Projects</a>
                <a href='/resume' className='link'>Resume</a>
            </div>

        </div>
    )
}

export default Nav