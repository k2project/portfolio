import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Headings() {
    const accordionData = {
        heading: 3,
        title: 'PAGE HEADINGS',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist page headings'
                >
                    <ChecklistLiEl id='aec-hadings-1'></ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default Headings;
