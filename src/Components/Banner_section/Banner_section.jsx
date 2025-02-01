import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
// import logo from 'img/logo/logo.svg'

const Banner_section = () => {
    return (
        <div className="banner">
            <div className="img">
                <img src="img/mine_img/profile.jpg" alt="profile.jpg" />
            </div>
            <div className="details">
                <div className="text">
                    <h1>Vanshit Garg</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, odio.</p>
                </div>
                <div className="btn-group">
                    <button className='btn-primary'><a href="#">View My Work</a></button>
                    <button className='btn-primary'><a href="#">Resume</a></button>
                </div>
                <div className="social-links">
                    <a href="#"><FaGithub className='icon' /></a>
                    <a href="#"><FaInstagram className='icon' /></a>
                    <a href="#"><FaLinkedin className='icon' /></a>
                    <a href="#"><SiHackerrank className='icon' /></a>
                    <a href="#"><SiLeetcode className='icon' /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner_section;