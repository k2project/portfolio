import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function KeyboardAccess() {
    const accordionData = {
        heading: 3,
        title: 'KEYBOARD ACCESS',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist keyboard access'
                >
                    <ChecklistLiEl id='aec-kbd-1'>
                        Ensure that the page is completely keyboard accessible.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-kbd-2'>
                        Ensure that interactive custom elements can be reached
                        and activated with the keyboard alone.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-kbd-3'>
                        Ensure that the HTML content in the DOM is in a logical
                        order (visually from left-to-right and top-to-bottom).
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-kbd-4'>
                        Ensure that all keyboard-interactive elements have a
                        visible focus indicator. The more noticeable, the
                        better.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-kbd-5'>
                        Drop-down lists: Check that after you tab into a
                        drop-down list, you can use the arrow keys to move
                        through all the options without triggering an action.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-kbd-6'>
                        Image links: Check that when images are links, they have
                        clear visual focus and can be activated using the
                        keyboard (usually by pressing the Enter key).
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default KeyboardAccess;
