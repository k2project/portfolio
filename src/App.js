import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Footer from './Footer/Footer';

import projects from './projects';

//for resize function
let projectsSelected = [];

function App() {
    const [projectsList, setProjectsList] = useState(projects)
    function setSkills(skillsArr){
        const newProjectsList = [];
        if(skillsArr.length > 0){
            console.log(skillsArr)
            projects.forEach(project=>{
                if(skillsArr.every(val => project.skills.includes(val))){
                    newProjectsList.push(project)
                }
            })
            setProjectsList(newProjectsList)
            projectsSelected = newProjectsList;
            return newProjectsList;
        //
        }else{
            setProjectsList(projects)
            projectsSelected = [];
        }

        // document.querySelector('.Projects').scrollIntoView();

    }
    function handleResize(){
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

export default App;
