import React, {useState, useEffect} from 'react';
import { useHistory} from "react-router-dom";
import {Helmet} from "react-helmet";
import './../App.scss';

import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';

import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

import projects from './projects';

import og from './../media/imgs/og.png';

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
        <OpenGraph/>
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

function OpenGraph(){
    return (
        <Helmet>
           <title>Kris Kopczynski Portfolio</title>
           <link rel="canonical" href='https://k2project.github.io/portfolio/' />
           <meta name="description" content='An online portfolio of Edinburgh based front-end web developer passionate about React and Web Accessibility.'/>

           <meta property="og:title" content='Kris Kopczynski Portfolio' />
           <meta property="og:url" content='https://k2project.github.io/portfolio/' />
           <meta property="og:type" content="website" />
           <meta property="og:description" content='An online portfolio of Edinburgh based front-end web developer passionate about React and Web Accessibility.' />
           <meta property="og:image" content={'https://k2project.github.io'+og}/>

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content='https://k2project.github.io/portfolio/' />
            <meta name="twitter:title" content='Kris Kopczynski Portfolio'/>
            <meta name="twitter:description" content='An online portfolio of Edinburgh based front-end web developer passionate about React and Web Accessibility.' />
            <meta name="twitter:image" content={'https://k2project.github.io'+og}/>
       </Helmet>
   )
}

function handleGoBackBtn(){
    let hash = window.location.hash;
    hash = hash.slice(1,);
    if(hash && hashArr.includes(hash)){
        document.getElementById(hash).scrollIntoView({behavior:'smooth'});
        return;
    }
    return;
}
