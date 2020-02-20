import React, { useState, useEffect } from 'react';
import './Skills.scss';
import skills from './SkillsList';
import SkillsListMobile from './SkillsListMobile';
import Button from './../../components/Button/Button';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

// let skillsArr = [];
// function Skills(props) {
//     function handleClick(e) {
//         const btn = e.target.closest('.Button');
//         if (btn) {
//             const skills = btn.dataset.gen;

//             btn.classList.toggle('selected');

//             if (btn.getAttribute('aria-pressed') === 'true') {
//                 btn.setAttribute('aria-pressed', 'false');
//                 skillsArr = skillsArr.filter(el => el !== skills);
//             } else {
//                 btn.setAttribute('aria-pressed', 'true');
//                 skillsArr.push(skills);
//             }

//             props.selectProjectsBySkills(skillsArr);
//         }
//     }

//     const mainSkills = mainSkillsList.map(skill => (
//         <Button dataSet={skill} toggle key={'main_skill_' + skill}>
//             <span className='sr-only'>display</span>
//             <b>{skill}</b>
//             <span className='sr-only'>based projects</span>
//         </Button>
//     ));
//     const otherSkills = otherSkillsList.map(skill => (
//         <Button dataSet={skill} key={'main_skill_' + skill} toggle secondary>
//             <span className='sr-only'>display</span>
//             <span>{skill}</span>
//             <span className='sr-only'>based projects</span>
//         </Button>
//     ));
//     return (
//         <section className='skills' id='skills' onClick={handleClick}>
//             <div className='wrapper'>
//                 <AnimatedSection
//                     title='Skills and projects.'
//                     subtitle='Select skills to reveal associated projects.'
//                 >
//                     <div className='skills__desk'>
//                         <div className='skills__desk_main'>{mainSkills}</div>
//                         <div className='skills__desk_other'>{otherSkills}</div>
//                     </div>
//                     <div className='skills__mob'>
//                         <div className='skills__mob_main'>
//                             <img src={css3Icon} alt='skilled in css3' />
//                             <img src={html5Icon} alt='skilled in html5' />
//                             <img src={jsIcon} alt='skilled in javascript' />
//                             <img src={reactIcon} alt='skilled in react' />
//                         </div>
//                         <div className='skills__mob_other'>
//                             <img src={sass} alt='skilled in sass' />
//                             <img src={gitHub} alt='skilled in github' />
//                             <img src={heroku} alt='skilled in heroku' />
//                             <img src={jQuery} alt='skilled in jquery' />
//                             <img src={nodeJs} alt='skilled in nodejs' />
//                             <img src={meteor} alt='skilled in meteor' />
//                         </div>
//                     </div>
//                 </AnimatedSection>
//             </div>
//         </section>
//     );
// }

// export default Skills;

export default function Skills() {
    const [mobileViewPort, setMobileView] = useState(false);
    function changeSkillsDisplayOnResize() {
        const mq = matchMedia('(max-width: 768px)');
        if (mq.matches) {
            setMobileView(true);
            return;
        }
        setMobileView(false);
    }
    useEffect(() => {
        window.addEventListener('load', changeSkillsDisplayOnResize);
        window.addEventListener('resize', changeSkillsDisplayOnResize);
        return () => {
            window.removeEventListener('load', changeSkillsDisplayOnResize);
            window.removeEventListener('resize', changeSkillsDisplayOnResize);
        };
    });
    return (
        <section className='skills' id='skills'>
            <div className='wrapper'>
                <AnimatedSection
                    title='Skills &amp; Projects.'
                    subtitle='Select skills to reveal associated projects.'
                >
                    {!mobileViewPort && <SkillsListDesktop />}
                    {mobileViewPort && <SkillsListMobile />}
                </AnimatedSection>
            </div>
        </section>
    );
}
function SkillsListDesktop() {
    return (
        <ul>
            {skills.map(skill => (
                <li key={skill.name}>{skill.name}</li>
            ))}
        </ul>
    );
}
