import React, {useEffect} from 'react';
import './Skills.scss';
import Button from './../components/Button/Button';

const mainSkillsList = ['CSS3', 'HTML5', 'JavaScript', 'React'];
const otherSkillsList = [ 'jQuery','Node.js', 'Meteor.js', 'GitHub', 'Heroku','Sass', 'SVG', 'Canvas', 'CSS Grid/Flexbox', 'Responsive Design',];

function Skills(props) {
    function handleClick(e){
        const btn = e.target.closest('.Button');
        if(btn){
            const skills = btn.dataset.skills;
            props.setSkills(skills)
        }
    }
    useEffect(()=>{
        document.querySelector('.Skills').addEventListener('click',handleClick)
        return ()=>{
            document.querySelector('.Skills').removeEventListener('click',handleClick)
        }
    })
    const mainSkills = mainSkillsList.map(skill=><Button
        dataSet={skill}
        key={"main_skill_"+skill}>
            <span class="sr-only">display</span>
            <b>{skill}</b>
            <span class="sr-only">based projects</span>
        </Button>);
    const otherSkills = otherSkillsList.map(skill=><Button
        dataSet={skill}
        key={"main_skill_"+skill}
        secondary>
            <span class="sr-only">display</span>
            <span>{skill}</span>
            <span class="sr-only">based projects</span>
        </Button>);
  return (
    <div className="Skills" id="skills">
        <div className="wrapper">
            <div className="Skills_main">
                {mainSkills}
            </div>
            <div className="Skills_other">
                {otherSkills}
            </div>
        </div>
    </div>
  );
}

export default Skills;
