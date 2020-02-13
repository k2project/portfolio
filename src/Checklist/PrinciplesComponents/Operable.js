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
                    <ChecklistLiEl id='users-seizures-1'>
                        Do not include content that flashes at particular rates
                        and patterns (more than 3 times per second, and flashes
                        fall below the general flash thresholds).
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-seizures-2'>
                        Warn users before flashing content is presented, and
                        provide alternatives.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-seizures-3'>
                        Provide mechanisms to switch off animations, unless they
                        are essential.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='users-nav'>
                    Users can easily navigate, find content, and determine where
                    they are
                </h4>
                <ul className='checklist__list' aria-labelledby='users-nav'>
                    <ChecklistLiEl id='users-nav-1'>
                        Provide well organized content to help users to orient
                        themselves and to navigate effectively.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-nav-2'>
                        Pages have clear titles and are organized using
                        descriptive section headings.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-nav-3'>
                        There is more than one way to find relevant pages within
                        a set of web pages (sitemap,headings).
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-nav-4'>
                        Users are informed about their current location within a
                        set of related pages (breadcrumps).
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-nav-5'>
                        There are ways to bypass blocks of content that are
                        repeated on multiple pages (<q>skip to main</q> link).
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-nav-6'>
                        The keyboard focus is visible, and the focus order
                        follows a meaningful sequence.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-nav-7'>
                        The purpose of a link is evident, ideally even when the
                        link is viewed on its own.
                    </ChecklistLiEl>
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
                    <ChecklistLiEl id='users-modalities-1'>
                        Gestures that require dexterity or fine movement have
                        alternatives that do not require high dexterity.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-modalities-2'>
                        Components are designed to avoid accidental activation,
                        for example by providing undo functionality.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-modalities-3'>
                        Labels presented to users match corresponding object
                        names in the code, to support activation by voice.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-modalities-4'>
                        Functionality that is activated by movement can also be
                        activated through user interface components.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-modalities-5'>
                        Buttons, links, and other active components are large
                        enough to make them easier to activate by touch.
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default Operable;
