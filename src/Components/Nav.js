import React, { useState } from 'react'
import './Nav.scss'
import useWindowScrollPosition from "@rehooks/window-scroll-position";

function Nav() {
    // const [change, setChange] = useState(false);
    // const changePosition = 50;

    // let position = useWindowScrollPosition();
    // // position == { x: 0, y: 0 }

    // if (position.y > changePosition && !change) {
    //     setChange(true);
    // }

    // if (position.y <= changePosition && change) {
    //     setChange(false);
    // }

    // let style = {
    //     backgroundColor: change ? "white" : "transparent",
    //     transition: "300ms ease",
    //     position: "fixed",
    //     right: 0,
    //     left: 0,
    //     top: 0,
    //     color: 'black!important',
    // };

    return (
        <div className='navbar'>
            <a href='/' className='logo'>
                Dwaine Matthew
            </a>
            <div className='nav-links'>
                <a href='/projects' className='link'>Projects</a>
                <a href='/contact' className='link'>Contact</a>
                <a href='/resume' className='link'>Resume</a>
            </div>
        </div>
    )
}
export default Nav