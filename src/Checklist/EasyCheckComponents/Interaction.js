import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Interaction() {
    const accordionData = {
        heading: 3,
        title: 'FORMS, LABELS AND ERRORS',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist forms'
                >
                    <ChecklistLiEl id='aec-interaction-1'></ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default Interaction;
