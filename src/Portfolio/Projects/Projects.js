import React, {useEffect} from 'react';
import './Projects.scss';
import gitHub from './../../media/icons/gitHub.png';



function Projects(props) {
    let projects = props.projects;
    if(props.projects.length % 3 === 1){
        projects.push(null, null)
    }else if(props.projects.length % 3 === 2){
        projects.push(null)
    }
    const projectsToDisplay = projects.map((project,i)=>{
        if(project !== null){
            return <Project project={project} key={i+'_'+project.name}/>
        }
        return <ProjectNull key={i+'_emptyProject'}/>
    })

    useEffect(()=>{
        const projectsList = document.querySelectorAll('.Project');
        projectsList.forEach((project,index)=>{
            project.style.opacity = 0;
            project.style.top = '150px';
            project.style.transition = 'none';
            setTimeout(()=>{
                project.style.opacity = 1;
                project.style.top = 0;
                project.style.transition = '.5s ease-in-out';

            },index*100+500)
        })
    })
  return (
    <div className="Projects" id="projects">
        {projectsToDisplay}
    </div>
  );
}

export default Projects;

function Project(props){
    let {name,desc, img, web, git, cml} = props.project;
    const bg = require('./../../media/imgs/'+img);
    const projectStyle={
        backgroundImage: "url("+bg+")",
    }
    const cmlCls = !git ? 'toTop': '';
    return(
        <a href={web} target="_blank" rel="noopener noreferrer" className="Project" style={projectStyle} >

            <span className="sr-only">project's external link</span>

            {cml && <div className={"Project_cml "+cmlCls}>cml.</div>}
            <div className="Project_desc">
                <div className="Project_title">
                    <b>{name}</b>
                </div>
                <div className="Project_details">
                    {desc}
                </div>
            </div>
            {git && <div className="Project_git">
                <a href={git} target="_blank" rel="noopener noreferrer" aria-hidden="true" >
                    <img src={gitHub} alt="" className="Project_img"/>
                </a>
            </div>}

        </a>
    )
}
function ProjectNull(){
    return(
        <a href="https://github.com/k2project" target="_blank" rel="noopener noreferrer" className="Project ProjectNull">
            <img src={gitHub} alt="" className="ProjectNull_img"/>
            <span className="sr-only">github account opens up in an external link</span>
        </a>
    )
}
