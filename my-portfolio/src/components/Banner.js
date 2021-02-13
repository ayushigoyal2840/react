import React from 'react'
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Banner = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header_section">
                            <ul className="header_ul">
                                <li>
                                <FaFacebookMessenger />
                                </li>
                                <li>
                                <FaTwitter />
                                </li>
                                <li>
                                <FaLinkedin />
                                </li>
                                <li>
                                <FaGithub />
                                </li>

                            </ul>
                            <h1>I am Ayushi Goel</h1>
                            <p>i am web deceloper blahh blahh blahh 
                            blahh blahh blahh blahh blahh blahh blahh
                            blahh blahh blahh blahh blahh blahh blahh blahh'blahh
                            blahhv blahh vblahh
                            </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Banner
