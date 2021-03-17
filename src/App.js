import React from 'react'
import './App.scss'
import Navi from './Components/Nav'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

export default function App() {
    return (
        <div className="main">
            <Navi></Navi>
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    )
}
