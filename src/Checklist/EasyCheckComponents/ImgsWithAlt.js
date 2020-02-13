import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function ImgsWithAlt() {
    const accordionData = {
        heading: 3,
        title: 'IMAGES WITH ALT',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist page imgages with text alternative'
                >
                    <ChecklistLiEl id='aec-img-1'></ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default ImgsWithAlt;
