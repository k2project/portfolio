import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function ColorContrast() {
    const accordionData = {
        heading: 3,
        title: 'COLOR CONTRAST',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist color contrast'
                >
                    <ChecklistLiEl id='aec-color-1'></ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default ColorContrast;
