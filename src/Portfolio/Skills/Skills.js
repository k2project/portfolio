import React, { useState, useEffect } from 'react';
import './Skills.scss';
import skills from './SkillsList';
import SkillsListMobile from './SkillsListMobile';
import SkillsListDesktop from './SkillsListDesktop';
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

export default function Skills({ selectProjectsBySkills }) {
    const [selectedSkillsArr, setSelectedSkillsArr] = useState([]);
    function updateselectedSkillsArr(skill) {
        if (!selectedSkillsArr.includes(skill)) {
            //add skill to the list
            setSelectedSkillsArr([...selectedSkillsArr, skill]);
        } else {
            //remove skill from the list
            setSelectedSkillsArr(selectedSkillsArr.filter(s => s !== skill));
        }
        return;
    }
    function updateBtnDynamicContentForAris(arr) {
        const btnsDynamicAria = document.querySelectorAll(
            '.skills .btn__content-dynamic'
        );
        Array.from(btnsDynamicAria).forEach(aria => {
            let text = '. Currently selected items: ';
            aria.textContent =
                arr.length > 0
                    ? text + toStringCustom(arr) + '.'
                    : text + 'none.';
        });
    }
    function toStringCustom(arr) {
        if (arr.length > 1) {
            return arr.slice(0, -1).join(', ') + ' and ' + arr.slice(-1);
        }
        return arr.toString();
    }
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
        //update selected project lists
        selectProjectsBySkills(selectedSkillsArr);
        updateBtnDynamicContentForAris(selectedSkillsArr);

        window.addEventListener('load', changeSkillsDisplayOnResize);
        window.addEventListener('resize', changeSkillsDisplayOnResize);
        return () => {
            window.removeEventListener('load', changeSkillsDisplayOnResize);
            window.removeEventListener('resize', changeSkillsDisplayOnResize);
        };
    }, [selectedSkillsArr]);
    return (
        <section className='skills' id='skills'>
            <div className='wrapper'>
                <AnimatedSection
                    title='Skills &amp; Projects.'
                    subtitle='Select skills to reveal associated projects.'
                >
                    {!mobileViewPort && (
                        <SkillsListDesktop
                            updateSelection={updateselectedSkillsArr}
                        />
                    )}
                    {mobileViewPort && <SkillsListMobile />}
                </AnimatedSection>
            </div>
        </section>
    );
}
