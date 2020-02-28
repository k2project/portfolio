import React, { useState, useEffect } from 'react';
import './Projects.scss';
import gitHub from './../../media/icons/gitHub.png';
import Stickers from './../../components/Stickers/Stickers';

function Projects({ projectsSelected, totalProjects }) {
    const projectsAriaLabel =
        projectsSelected.length === totalProjects
            ? 'List of all projects.'
            : 'List of projects based on selected skills.';
    const projectsToDisplay = projectsSelected.map((project, i) => {
        if (project !== null) {
            return <Project project={project} key={i + '_' + project.name} />;
        }
        return null;
    });
    //adding empty project display to make up the grid
    const [emptyProjects, setEmptyProjectsNum] = useState(0);
    let emptyProjectsDisplay = Array.from(
        Array(Number(emptyProjects))
    ).map((el, i) => <ProjectNull key={i + '_emptyProject'} />);

    function addEpmtyProjectsToGrid() {
        let mqMobile = matchMedia('(max-width: 768px)');
        let mqTablet = matchMedia('(max-width: 1200px)');
        const projectsEl = document.querySelector('.projects');
        if (projectsSelected.length === totalProjects || mqMobile.matches) {
            projectsEl.classList = 'projects';
            setEmptyProjectsNum(0);
            return;
        } else {
            if (mqTablet.matches) {
                projectsEl.classList = 'projects projects--are-selected';
                if (
                    projectsSelected.length % 2 === 1 ||
                    projectsSelected.length === 1
                ) {
                    setEmptyProjectsNum(1);
                    return;
                }
                setEmptyProjectsNum(0);
                return;
            }
            projectsEl.classList = 'projects';
            if (projectsSelected.length % 3 === 1) {
                setEmptyProjectsNum(2);
                return;
            } else if (projectsSelected.length % 3 === 2) {
                setEmptyProjectsNum(1);
                return;
            }
            setEmptyProjectsNum(0);
        }
    }

    useEffect(() => {
        addEpmtyProjectsToGrid();
        window.addEventListener('resize', addEpmtyProjectsToGrid);
        //projects slide in anim on rendering
        const projectsList = document.querySelectorAll('.project');
        projectsList.forEach((project, index) => {
            project.style.opacity = 0;
            project.style.top = '150px';
            project.style.transition = 'none';
            setTimeout(() => {
                project.style.opacity = 1;
                project.style.top = 0;
                project.style.transition = '.5s ease-in-out';
            }, index * 100 + 500);
        });
        return () => {
            window.removeEventListener('resize', addEpmtyProjectsToGrid);
        };
    });
    return (
        <section className='projects' id='projects'>
            <ul aria-label={projectsAriaLabel}>
                {projectsToDisplay}
                {emptyProjectsDisplay}
            </ul>
        </section>
    );
}

export default Projects;

function Project({ project: { name, desc, img, web, git, cml, skills } }) {
    const bg = require('./../../media/imgs/' + img);
    const projectStyle = {
        backgroundImage: 'url(' + bg + ')'
    };
    function handleOnFocus(e) {
        e.target.parentElement.classList.add('project--in-focus');
    }
    function handleOnBlur(e) {
        e.target.parentElement.classList.remove('project--in-focus');
    }
    function handleOnMouseEnter(e) {
        const desc = e.target.nextElementSibling;
        desc.classList.add('project__desc--on-hover');
    }
    function handleOnMouseLeave(e) {
        const desc = e.target.nextElementSibling;
        desc.classList.remove('project__desc--on-hover');
    }
    return (
        <li className='project' style={projectStyle}>
            <a
                href={web}
                target='_blank'
                rel='noopener noreferrer'
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                className='project__link'
            >
                <span className='sr-only'>{name} (opens in a new tab)</span>
            </a>
            <div className='project__desc'>
                <div className='project__name'>
                    <b>{name}</b>
                </div>
                <div className='project__info'>
                    {desc}

                    <ul
                        className='project__skills-list'
                        aria-label={`skills utilised within the ${name} project`}
                    >
                        {skills.map((skill, i) => (
                            <li key={`skillList-${name}-${i}`}>
                                <span aria-hidden='true'>&#10004;</span> {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Stickers git={git} cml={cml} name={name} />
        </li>
    );
}
function ProjectNull() {
    function handleOnFocus(e) {
        e.target.classList.add('project__null--in-focus');
    }
    function handleOnBlur(e) {
        e.target.classList.remove('project__null--in-focus');
    }
    return (
        <li className='project project__null'>
            <a
                href='https://github.com/k2project'
                target='_blank'
                rel='noopener noreferrer'
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                aria-hidden='true'
                className='project__link'
            >
                <img src={gitHub} alt='gitHub account (opens in a new tab)' />
            </a>
        </li>
    );
}
