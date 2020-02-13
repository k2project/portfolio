import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function TextZooming() {
    const accordionData = {
        heading: 3,
        title: 'TEXT ZOOMING',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist text zooming'
                >
                    <ChecklistLiEl id='aec-zoom-1'></ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default TextZooming;
