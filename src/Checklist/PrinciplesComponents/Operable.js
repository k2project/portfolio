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
                <ul className='checklist__list' aria-labelledby='kbd-users'>
                    <ChecklistLiEl id='kbd-users-1'>
                        All functionality that is available by mouse is also
                        available by keyboard.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='kbd-users-2'>
                        All clickable items should also be selectable using the
                        keyboard and styled appropriately with css pseudo class
                        ::focus.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='kbd-users-3'>
                        Web browsers, authoring tools, and other tools provide
                        keyboard support.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='kbd-users-4'>
                        Keyboard focus does not get trapped in any part of the
                        content.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='kbd-users-5'>
                        Where "drag and drop" functionality is used, a
                        keyboard-based "cut and paste" alternative should be
                        offered.
                    </ChecklistLiEl>

                    <ChecklistLiEl id='kbd-users-6'>
                        Page-specified shortcut keys and accesskeys (accesskey
                        should typically be avoided) do not conflict with
                        existing browser and screen reader shortcuts.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='users-timing'>
                    Users have enough time to read and use the content
                </h4>
                <ul className='checklist__list' aria-labelledby='users-timing'>
                    <ChecklistLiEl id='users-timing-1'>
                        Allow to stop, extend, or adjust time limits, except
                        where necessary.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-timing-2'>
                        Allow to pause, stop, or hide moving, blinking, or
                        scrolling content.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-timing-3'>
                        Allow to postpone or suppress interruptions, except
                        where necessary.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-timing-4'>
                        Allow to re-authenticate when a session expires without
                        losing data.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-timing-5'>
                        Warn of any timeout that could result in data loss,
                        unless the data is preserved for longer than 20 hours of
                        user inactivity.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='users-seizures'>
                    Content does not cause seizures and physical reactions
                </h4>
                <ul
                    className='checklist__list'
                    aria-labelledby='users-seizures'
                >
                    <ChecklistLiEl id='users-seizures-1'></ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='users-nav'>
                    Users can easily navigate, find content, and determine where
                    they are
                </h4>
                <ul className='checklist__list' aria-labelledby='users-nav'>
                    <ChecklistLiEl id='users-nav-1'></ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='users-modalities'>
                    Users can use different input modalities beyond keyboard
                </h4>
                <ul
                    className='checklist__list'
                    aria-labelledby='users-modalities'
                >
                    <ChecklistLiEl id='users-modalities-1'></ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default Operable;
