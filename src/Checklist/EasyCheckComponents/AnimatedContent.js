import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function AnimatedContent() {
    const accordionData = {
        heading: 3,
        title: 'ANIMATED CONTENT',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist flashing and animated content'
                >
                    <ChecklistLiEl id='aec-anim-1'></ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default AnimatedContent;
