import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Operable() {
    const accordionData = {
        heading: 3,
        title: 'Operable user interface and navigation',
        subtitle: null,
        styling: 'bg-primary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <h4 className='checklist__subcaption' id='kbd-users'>
                    Functionality is available for keyboard users
                </h4>
                <ul className='checklist__list' aria-labelledby=''>
                    <ChecklistLiEl id='txt-alt-1'>
                        Text alternatives are present for non-text content.
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default Operable;
