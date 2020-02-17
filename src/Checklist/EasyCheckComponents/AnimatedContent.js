import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function AnimatedContent() {
    const accordionData = {
        heading: 3,
        title: 'Animated Content',
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
                    <ChecklistLiEl id='aec-anim-1'>
                        Check if there is any moving, blinking, or scrolling
                        information that starts automatically and lasts more
                        than five seconds. If there is, check that there is a
                        way for the user to pause, stop, or hide the movement.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-anim-2'>
                        Check if there is any auto-updated information. If there
                        is, check that there is a way for the user to pause,
                        stop, or hide the updated information, or for the user
                        to control the frequency of the update.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-anim-3'>
                        Check that no content flashes or blinks more than three
                        times in one second.
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default AnimatedContent;
