import React from 'react';
import './Projects.scss';



function Projects(props) {
    const projectsToDisplay = props.projects.map(project=><Project project={project} key={project.name}/>)
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
