import React, { Fragment } from 'react';
import skills from './SkillsList';

export default function SkillsListMobile() {
    return (
        <Fragment>
            <section className='skills-mob__primary'>
                <h3 className='sr-only' id='mob-skills-main'>
                    Featured developer skills acquired.
                </h3>
                <ul aria-labelledby='mob-skills-main'>
                    {skills
                        .filter(skill => skill.img && skill.featured)
                        .map(skill => (
                            <li key={'mob-' + skill.name}>
                                <img
                                    src={skill.img}
                                    alt={skill.name}
                                    className='skills-mob__img-primary'
                                />
                            </li>
                        ))}
                </ul>
            </section>
            <section className='skills-mob__secondary'>
                <h3 className='sr-only' id='mob-skills-other'>
                    Other developer skills studied.
                </h3>
                <ul aria-labelledby='mob-skills-other'>
                    {skills
                        .filter(skill => skill.img && !skill.featured)
                        .map(skill => (
                            <li key={'mob-' + skill.name}>
                                <img
                                    src={skill.img}
                                    alt={skill.name}
                                    className='skills-mob__img-secondary'
                                />
                            </li>
                        ))}
                </ul>
            </section>
        </Fragment>
    );
}
