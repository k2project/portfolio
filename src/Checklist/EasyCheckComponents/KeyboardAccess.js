import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function KeyboardAccess() {
    const accordionData = {
        heading: 3,
        title: 'KEYBOARD ACCESS',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist keyboard access'
                >
                    <ChecklistLiEl id='aec-kbd-1'></ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default KeyboardAccess;
