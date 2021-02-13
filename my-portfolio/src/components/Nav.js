import React from 'react'
import logo from './Logo.png';

const Nav = () => {
    return (
        <nav className="navbar" >
            <div className="container">
                <div className="navbar__container">
                <ul className="navbar__left">
                    <div className="navbar__left-logo">
                        <img src={logo} ></img>
                    </div>
                </ul>
                <ul className="navbar__right">
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
