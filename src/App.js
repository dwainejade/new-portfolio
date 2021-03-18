import React from 'react'
import './App.scss'
import Navi from './Components/Navi'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

const App = () => {
    library.add( faCheckSquare, faCoffee)

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
export default App