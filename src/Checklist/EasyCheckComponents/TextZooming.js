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
                    <ChecklistLiEl id='aec-zoom-1'>
                        All text gets larger (text in images doesn't zoom).
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-zoom-2'>
                        Text doesn't disappear or get cut off.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-zoom-3'>
                        Text, images, and other content do not overlap.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-zoom-4'>
                        All buttons, form fields, and other controls are visible
                        and usable.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-zoom-5'>
                        Horizontal scrolling is not required to read sentences
                        or "blocks of text".{' '}
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default TextZooming;
