import React, { useEffect } from 'react';
import './Projects.scss';
import gitHub from './../../media/icons/gitHub.png';
import LinkNewTab from './../../components/LinkNewTab';
import Stickers from './../../components/Stickers/Stickers';

function Projects({ projectsSelected, totalProjects }) {
    const projectsAriaLabel =
        projectsSelected.length === totalProjects
            ? 'List of all projects.'
            : 'List of projects based on selected skills.';
    if (projectsSelected.length % 3 === 1) {
        projectsSelected.push(null, null);
    } else if (projectsSelected.length % 3 === 2) {
        projectsSelected.push(null);
    }
    const projectsToDisplay = projectsSelected.map((project, i) => {
        if (project !== null) {
            return <Project project={project} key={i + '_' + project.name} />;
        }
        return <ProjectNull key={i + '_emptyProject'} />;
    });

    useEffect(() => {
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
    });
    return (
        <section className='projects' id='projects'>
            <ul aria-label={projectsAriaLabel}>{projectsToDisplay}</ul>
        </section>
    );
}

export default Projects;

function Project({ project: { name, desc, img, web, git, cml } }) {
    const bg = require('./../../media/imgs/' + img);
    const projectStyle = {
        backgroundImage: 'url(' + bg + ')'
    };
    return (
        <li className='project' style={projectStyle}>
            <a href={web} target='_blank' rel='noopener noreferrer'>
                <span className='sr-only'>{name} (opens in a new tab)</span>
            </a>
            <div className='project__desc'>
                <div className='project__name'>
                    <b>{name}</b>
                </div>
                <div className='project__info'>{desc}</div>
            </div>

            {/* <div className='project' style={projectStyle}>
            <div className='Project_desc'>
                <div className='Project_title'>
                    <b>{name}</b>
                </div>
                <div className='Project_details'>{desc}</div>
            </div>
            <LinkNewTab link={{ href: web, cls: 'Project_web fill' }} />
            <Stickers git={git} cml={cml ? true : null} />
        </div> */}
        </li>
    );
}
function ProjectNull() {
    return (
        <li>
            <a
                href='https://github.com/k2project'
                target='_blank'
                rel='noopener noreferrer'
                className='project project__null'
            >
                <img src={gitHub} alt='gitHub account (opens in a new tab)' />
            </a>
        </li>
    );
}
