import React, {useEffect} from 'react';
import './Projects.scss';



function Projects(props) {
    const projectsToDisplay = props.projects.map((project,i)=><Project project={project} key={i+'_'+project.name}/>)
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
        {/* <div className="wrapper">
            <p className="p_large">
                 I enjoy turning complex problems into simple, beautiful and intuitive applications. My goal is to make my work a better experience for every user. Take a look at my projects.
            </p>
        </div> */}
        {projectsToDisplay}
    </div>
  );
}

export default Projects;

function Project(props){
    let {name,desc, imgs} = props.project;
    const bg = require('./../media/imgs/'+imgs[0]);
    const projectStyle={
        backgroundImage: "url("+bg+")",
    }
    return(
        <div className="Project" style={projectStyle}>
            <div className="Project_desc">
                <div className="Project_anim">
                    <b>{name}</b>
                    {desc}
                </div>
            </div>
        </div>
    )
}
