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
                    <ChecklistLiEl id='aec-structure-1'>
                        Check the web page without images, styles, and layout.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-structure-2'>
                        Turn off images and show the text alternatives.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-structure-3'>
                        Turn off style sheets (CSS), which specifies how the
                        page is displayed with layout, colors, etc.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-structure-4'>
                        Linearize the page or the tables (depending on the
                        toolbar).
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-structure-5'>
                        Check that the information makes sense when read in the
                        order it is shown.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-structure-6'>
                        Check that the alternative text provides adequate
                        information for the missing images.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-structure-7'>
                        Check that blocks of information have clear headings.
                    </ChecklistLiEl>
                </ul>
                <small>
                    NOTE: Data tables will not make sense when linearized.
                    However, the screen readers have functionality to make data
                    tables usable (when they are marked up correctly).
                </small>
            </section>
        </AccordionWidget>
    );
}
export default Structure;
