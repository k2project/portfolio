import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Structure() {
    const accordionData = {
        heading: 3,
        title: 'BASIC STRUCTURE CHECK',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist structure'
                >
                    <ChecklistLiEl id='aec-structure-1'></ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default Structure;
