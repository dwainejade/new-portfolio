import React, { useState } from 'react'
import './Nav.scss'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Navi() {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
            <Navbar className={navbar ? 'navbar active' : 'navbar'} bg="light" expand='md'>
                <Navbar.Brand href="#home">Dwaine Matthew</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav inline>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}
export default Navi