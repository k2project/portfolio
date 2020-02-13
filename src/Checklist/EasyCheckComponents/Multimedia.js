import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Multimedia() {
    const accordionData = {
        heading: 3,
        title: 'MULTIMEDIA',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist multimedia'
                >
                    <ChecklistLiEl id='aec-multimedia-1'></ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default Multimedia;
