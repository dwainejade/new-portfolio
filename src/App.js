import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from "react-router-dom"
import './App.scss'
import Navi from './Components/Navi'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects/Projects'
// import Contact from './Components/Contact'
import Contact2 from './Components/Contact2'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
    const location = useLocation()
    library.add(faCheckSquare, faCoffee)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="main">
            <Navi />
            <Switch location={location} key={location.key}>
                <Route path='/'>
                    <Hero />
                    <Skills />
                    <Projects />
                    {/* <Contact /> */}
                    <Contact2 />
                </Route>
            </Switch>
        </div>
    )
}
export default App