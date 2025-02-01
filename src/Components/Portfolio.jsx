import React from 'react';
import './Portfolio.css'
import Navbar from './Navbar/Navbar';
import Banner_section from './Banner_section/Banner_section';
import About_me_section from './About_me_section/About_me_section';
import Skills from './Skills_section/Skills_section';
import Works_section from './Works_section/Works_section';
import Contact_section from './Contact_section/Contact_section';

const Portfolio = () => {
    return (
        <>
            <Navbar/>
            <Banner_section/>
            <About_me_section/>
            <Skills />
            <Works_section/>
            <Contact_section/>
        </>
    );
};

export default Portfolio;