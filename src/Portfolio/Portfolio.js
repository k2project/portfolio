import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './../App.scss';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';

import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

import projects from './projects';
import og from './../media/imgs/og.png';

function Portfolio() {
    const [projectsDisplayed, setProjectsDisplayed] = useState(projects);
    const [projectsSelected, setProjectsSelected] = useState([]);

    function selectProjectsBySkills(skillsArr) {
        const newProjectsList = [];
        if (skillsArr.length > 0) {
            projects.forEach(project => {
                if (skillsArr.every(val => project.skills.includes(val))) {
                    newProjectsList.push(project);
                }
            });
            setProjectsDisplayed(newProjectsList);
            setProjectsSelected(newProjectsList);
            return newProjectsList;
        } else {
            setProjectsDisplayed(projects);
            setProjectsSelected([]);
        }
    }
    function handleProjectsDisplayOnResize() {
        //display all projects on a smaller viewport
        //display only selected projects on a viewport > 1024
        if (document.documentElement.clientWidth > 1024) {
            if (projectsSelected.length > 0) {
                setProjectsDisplayed(projectsSelected);
            } else {
                setProjectsDisplayed(projects);
            }
        } else {
            setProjectsDisplayed(projects);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleProjectsDisplayOnResize);
        return () => {
            window.removeEventListener('resize', handleProjectsDisplayOnResize);
        };
    });
    return (
        <div className='portfolio'>
            <OpenGraph />
            <Header />
            <div id='main-content'>
                <About />
                <Skills selectProjectsBySkills={selectProjectsBySkills} />
                <Projects projects={projectsDisplayed} />
                <Resume />
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;

function OpenGraph() {
    return (
        <Helmet>
            <title>Kris Kopczynski Portfolio</title>
            <link
                rel='canonical'
                href='https://k2project.github.io/portfolio/'
            />
            <meta
                name='description'
                content='An online portfolio of Edinburgh based front-end web developer passionate about React and Web Accessibility.'
            />

            <meta property='og:title' content='Kris Kopczynski Portfolio' />
            <meta
                property='og:url'
                content='https://k2project.github.io/portfolio/'
            />
            <meta property='og:type' content='website' />
            <meta
                property='og:description'
                content='An online portfolio of Edinburgh based front-end web developer passionate about React and Web Accessibility.'
            />
            <meta
                property='og:image'
                content={'https://k2project.github.io' + og}
            />

            <meta name='twitter:card' content='summary' />
            <meta
                name='twitter:url'
                content='https://k2project.github.io/portfolio/'
            />
            <meta name='twitter:title' content='Kris Kopczynski Portfolio' />
            <meta
                name='twitter:description'
                content='An online portfolio of Edinburgh based front-end web developer passionate about React and Web Accessibility.'
            />
            <meta
                name='twitter:image'
                content={'https://k2project.github.io' + og}
            />
        </Helmet>
    );
}
