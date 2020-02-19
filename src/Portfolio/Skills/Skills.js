import React from 'react';
import './Skills.scss';
import Button from './../../components/Button/Button';

import reactIcon from './../../media/icons/reactIcon.png';
import css3Icon from './../../media/icons/css3Icon.png';
import html5Icon from './../../media/icons/html5Icon.png';
import jsIcon from './../../media/icons/jsIcon.png';
import sass from './../../media/icons/sass.png';
import gitHub from './../../media/icons/gitHub.png';
import heroku from './../../media/icons/heroku.png';
import jQuery from './../../media/icons/jQuery.png';
import meteor from './../../media/icons/meteor.png';
import nodeJs from './../../media/icons/nodeJs.png';

const mainSkillsList = ['CSS3', 'HTML5', 'JavaScript', 'React'];
const otherSkillsList = [
    'jQuery',
    'Node.js',
    'Meteor.js',
    'GitHub',
    'Heroku',
    'Sass',
    'SVG',
    'Canvas',
    'CSS Grid/Flexbox',
    'Responsive Design'
];

let skillsArr = [];
function Skills(props) {
    function handleClick(e) {
        const btn = e.target.closest('.Button');
        if (btn) {
            const skills = btn.dataset.gen;

            btn.classList.toggle('selected');

            if (btn.getAttribute('aria-pressed') === 'true') {
                btn.setAttribute('aria-pressed', 'false');
                skillsArr = skillsArr.filter(el => el !== skills);
            } else {
                btn.setAttribute('aria-pressed', 'true');
                skillsArr.push(skills);
            }

            props.selectProjectsBySkills(skillsArr);
        }
    }

    const mainSkills = mainSkillsList.map(skill => (
        <Button dataSet={skill} toggle key={'main_skill_' + skill}>
            <span className='sr-only'>display</span>
            <b>{skill}</b>
            <span className='sr-only'>based projects</span>
        </Button>
    ));
    const otherSkills = otherSkillsList.map(skill => (
        <Button dataSet={skill} key={'main_skill_' + skill} toggle secondary>
            <span className='sr-only'>display</span>
            <span>{skill}</span>
            <span className='sr-only'>based projects</span>
        </Button>
    ));
    return (
        <div className='Skills' id='skills' onClick={handleClick}>
            <div className='wrapper'>
                <div className='Skills__desk'>
                    <div className='Skills__desk_main'>{mainSkills}</div>
                    <div className='Skills__desk_other'>{otherSkills}</div>
                </div>
                <div className='Skills__mob'>
                    <div className='Skills__mob_main'>
                        <img src={css3Icon} alt='skilled in css3' />
                        <img src={html5Icon} alt='skilled in html5' />
                        <img src={jsIcon} alt='skilled in javascript' />
                        <img src={reactIcon} alt='skilled in react' />
                    </div>
                    <div className='Skills__mob_other'>
                        <img src={sass} alt='skilled in sass' />
                        <img src={gitHub} alt='skilled in github' />
                        <img src={heroku} alt='skilled in heroku' />
                        <img src={jQuery} alt='skilled in jquery' />
                        <img src={nodeJs} alt='skilled in nodejs' />
                        <img src={meteor} alt='skilled in meteor' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
