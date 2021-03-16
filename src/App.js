import React from 'react'
import './App.scss'
import Nav from './Components/Nav.js'
import Hero from './Components/Hero.js'
import Skills from './Components/Skills.js'

export default function App() {
    return (
        <div className="main">
            <Nav></Nav>
            <Hero></Hero>
            <Skills></Skills>
        </div>
    )
}
