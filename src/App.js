import React, {useState} from 'react';
import './App.scss';
import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Footer from './Footer/Footer';

import projects from './projects';

function App() {
    const [projectsList, setProjectsList] = useState(projects)
    function setSkills(skills){
        const newProjectsList = [];
        projects.filter(project=>{
            if(project.skills.includes(skills) && !newProjectsList.includes(project)){
                newProjectsList.push(project)
            }
            return null;
        })
        setProjectsList(newProjectsList)
        document.querySelector('.Projects').scrollIntoView();

    }
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
