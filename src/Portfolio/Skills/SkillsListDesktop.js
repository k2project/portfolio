import React, { Fragment } from 'react';
import skills from './SkillsList';
import Button from './../../components/Button/Button';

export default function SkillsListDesktop({ updateSelection }) {
    return (
        <Fragment>
            <section className='skills-desktop__primary'>
                <h3 className='sr-only' id='desktop-skills-main'>
                    Featured developer skills acquired.
                </h3>
                <ul aria-labelledby='desktop-skills-main'>
                    {skills
                        .filter(skill => skill.featured)
                        .map(skill => (
                            <li>
                                <Button
                                    data={{
                                        value: skill.name,
                                        updateSelection
                                    }}
                                />
                            </li>
                        ))}
                </ul>
            </section>
            <section className='skills-desktop__secondary'>
                <h3 className='sr-only' id='desktop-skills-other'>
                    Other developer skills studied.
                </h3>
                <ul aria-labelledby='desktop-skills-other'>
                    {skills
                        .filter(skill => !skill.featured)
                        .map(skill => (
                            <li>
                                <Button
                                    data={{
                                        value: skill.name,
                                        updateSelection
                                    }}
                                />
                            </li>
                        ))}
                </ul>
            </section>
        </Fragment>
    );
}
