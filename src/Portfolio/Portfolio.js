import React, {useState, useEffect} from 'react';
import { useHistory} from "react-router-dom";
import './../App.scss';

import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';

import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

import projects from './projects';

//for resize function
let projectsSelected = [];
const hashArr = ['skills', 'projects', 'resume'];

function Portfolio() {
    //handle routing
    let history = useHistory();

    let hash = window.location.hash;
    hash = hash.slice(1,);
    if(hash && !hashArr.includes(hash)){
        history.push('/')
        window.scrollTo(0,0);

    }

    const [projectsList, setProjectsList] = useState(projects)
    function setSkills(skillsArr){
        const newProjectsList = [];
        if(skillsArr.length > 0){
            projects.forEach(project=>{
                if(skillsArr.every(val => project.skills.includes(val))){
                    newProjectsList.push(project)
                }
            })
            setProjectsList(newProjectsList)
            projectsSelected = newProjectsList;
            return newProjectsList;
        }else{
            setProjectsList(projects)
            projectsSelected = [];
        }

    }
    function handleResize(){
        //display all projects when smaller viewscreen
        //even when projects are selected in skills section
        if(document.documentElement.clientWidth > 1024){
            if(projectsSelected.length>0){
                setProjectsList(projectsSelected);
            }else{

                setProjectsList(projects)
            }

        }else{
            setProjectsList(projects)
        }
    }
    useEffect(()=>{
        handleGoBackBtn();

        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);

        }
    })
  return (
    <div className="Portfolio">
        <Header/>
        <About/>
        <Skills setSkills={setSkills}/>
        <Projects projects={projectsList}/>
        <Resume/>
        <Footer/>
    </div>
  );
}

export default Portfolio;

function handleGoBackBtn(){
    let hash = window.location.hash;
    hash = hash.slice(1,);
    if(hash && hashArr.includes(hash)){
        document.getElementById(hash).scrollIntoView({behavior:'smooth'});
        return;
    }
    return;
}
