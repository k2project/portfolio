import React, { Fragment } from 'react';
import skills from './SkillsList';
import Button from './../../components/Button/Button';

export default function SkillsListDesktop({ updateSelection, selectionArr }) {
    return (
        <Fragment>
            <section className='skills-desktop__primary'>
                <h3 className='sr-only' id='desktop-skills-main'>
                    Featured developer skills acquired.
                </h3>
                <ul aria-labelledby='desktop-skills-main'>
                    {skills
                        .filter(skill => skill.featured)
                        .map(({ name }) => (
                            <li key={'desktop-' + name}>
                                <Button
                                    data={{
                                        name,
                                        updateSelection,
                                        selectionArr
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
                        .map(({ name }) => (
                            <li key={'desktop-' + name}>
                                <Button
                                    data={{
                                        name,
                                        updateSelection,
                                        selectionArr
                                    }}
                                />
                            </li>
                        ))}
                </ul>
            </section>
        </Fragment>
    );
}
