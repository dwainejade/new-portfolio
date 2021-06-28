import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import Pdf from './Resume/Resume - Frontend.pdf';

import './Navi.scss'
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import useWindowScrollPosition from "@rehooks/window-scroll-position";


function Navi() {
    const [change, setChange] = useState(false);
    const changePosition = 70;
    let position = useWindowScrollPosition();

    if (position.y > changePosition && !change) {
        setChange(true);
        console.log(change)
    }

    if (position.y <= changePosition && change) {
        setChange(false);
    }

    let style = {
        backgroundColor: change ? "rgb(13,18,34)" : "transparent",
        transition: "300ms ease",
        position: "fixed",
        right: 0,
        left: 0,
        top: 0,
        color: 'black',
    };

    return (
        <div className='navbar' style={style}>
            <Link to="/" className='logo'>
                Dwaine Matthew
            </Link>
            <div className='nav-links'>
                <Link to={Pdf} className='link'> Resume</Link>
            </div>
        </div>
    )
}
export default Navi