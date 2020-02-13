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
                    <ChecklistLiEl id='aec-color-1'>
                        Web pages should have a minimum contrast by default: a
                        contrast ratio text to background of at least 4.5:1 for
                        normal-size text.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-color-2'>
                        Provide designs in which color or other sensory
                        characteristics (shape, size, visual location, etc.) are
                        not used as the only means of conveying information,
                        such as using only red coloring to denote required
                        fields.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-color-3'>
                        Web browsers should allow people to change the color of
                        text and background, and web pages need to work when
                        people change colors.
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default ColorContrast;
