import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomeSection from '../HomeSection/HomeSection';
import Project from '../Project/Project';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            
            <HomeSection></HomeSection>
            <Projects></Projects>
            <Skills></Skills>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;