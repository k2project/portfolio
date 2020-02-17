import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function DynamicContent() {
    const accordionData = {
        heading: 3,
        title: 'Interactive Elements',
        subtitle: null,
        styling: 'bg-dark'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='interactive element functionality'
                >
                    <ChecklistLiEl id='dynamic-1'>
                        If an element creates or shows new custom content,
                        ensure that the content directly follows the activating
                        element in the DOM (such as a hide/show dropdown).
                    </ChecklistLiEl>
                    <ChecklistLiEl id='dynamic-2'>
                        Ensure that content changes, status messages, and system
                        state changes are announced to{' '}
                        <abbr title='assistive technology'>AT</abbr> and the{' '}
                        <i>title</i> tag reflects dynamic changes to the
                        application.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='dynamic-3'>
                        Ensure use of relevant HTML elements for interactive
                        content, such as <i>details/summary</i> - for
                        accordions, <i>dialog</i> or <i>menu</i> - for a group
                        of interactive commands that a user can perform or
                        activate.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__caption' id='dynamic-carousel'>
                    Carousel
                </h4>

                <ul
                    className='checklist__list'
                    aria-labelledby='dynamic-carousel'
                >
                    <ChecklistLiEl id='dynamic-carousel-1'>
                        Implement an accessible carousel widget by providing a
                        robust structure and user control.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='dynamic-carousel-2'>
                        Users must be able to pause carousel movement because it
                        can be too fast or distracting, making text hard to
                        read.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='dynamic-carousel-3'>
                        All functionality, including navigating between carousel
                        items, must be operable by keyboard.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='dynamic-carousel-4'>
                        Changes to carousel items must be communicated to all
                        users, including screen reader users.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='dynamic-carousel-5'>
                        The keyboard position (“focus”) is managed in a
                        reasonable and comprehensible fashion.
                    </ChecklistLiEl>
                </ul>
                <section>
                    <h5
                        className='checklist__subcaption'
                        id='carousel-structure'
                    >
                        Carousel Structure
                    </h5>
                    <ul
                        className='checklist__list'
                        aria-labelledby='dynamic-carousel carousel-structure'
                    ></ul>
                    <ChecklistLiEl id='carousel-structure-1'>
                        Ensure structural markup of a carousel so the meaning of
                        the content is conveyed clearly. Use{' '}
                        <i>headings, sections, lists, articles,</i> and other
                        elements as needed.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-structure-2'>
                        As a collection of content items, carousels are
                        typically best represented as unordered lists.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-structure-3'>
                        Every carousel should be enclosed in a labeled region,
                        to allow users to find the carousel easily. Use{' '}
                        <i>aria-labelledby</i>.
                    </ChecklistLiEl>
                </section>
                <section>
                    <h5 className='checklist__subcaption' id='carousel-func'>
                        Carousel Functionality
                    </h5>
                    <ul
                        className='checklist__list'
                        aria-labelledby='dynamic-carousel carousel-func'
                    ></ul>
                    <ChecklistLiEl id='carousel-func-1'>
                        Provide functionality to select carousel items and to
                        inform users about the change of carousel items.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-func-2'>
                        Provide buttons to allow users to switch back and forth
                        between items using <i>button</i> element.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-func-3'>
                        Use a WAI-ARIA live region to inform screen reader users
                        what item is currently shown.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-func-4'>
                        Allow the user to maintain control of the keyboard
                        focus.{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-func-5'>
                        When the carousel advances automatically, users should
                        not be drawn away from their current place in the page.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-func-6'>
                        Do not move keyboard focus when the previous or next
                        buttons are used. By default, carousel's elements cannot
                        receive focus (tabindex="-1").
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-func-7'>
                        Display buttons for each item in the carousel and
                        highlight the current item.{' '}
                    </ChecklistLiEl>
                </section>
                <section>
                    <h5 className='checklist__subcaption' id='carousel-anim'>
                        Carousel Animations
                    </h5>
                    <ul
                        className='checklist__list'
                        aria-labelledby='dynamic-carousel carousel-anim'
                    ></ul>
                    <ChecklistLiEl id='carousel-anim-1'>
                        Provide users with control over animations in the
                        carousel.{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-anim-2'>
                        Provide a button to allow users to stop and resume
                        animation.{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-anim-3'>
                        Pause the carousel animation when the mouse pointer is
                        hovering over the carousel or when it receives keyboard
                        focus.{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-anim-4'>
                        During transitions, the current and next items are
                        visible to assistive technologies. Add
                        <i>aria-hidden="true" </i> to transitioning item and
                        remove it when it becomes past item.
                    </ChecklistLiEl>
                </section>
                <section>
                    <h5 className='checklist__subcaption' id='carousel-style'>
                        Carousel Styling
                    </h5>
                    <ul
                        className='checklist__list'
                        aria-labelledby='dynamic-carousel carousel-style'
                    ></ul>
                    <ChecklistLiEl id='carousel-style-1'>
                        Use appropriately sized buttons and links, and provide
                        whitespace around them, to allow people with reduced
                        dexterity to use the carousel more easily.{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-style-2'>
                        Ensure sufficient contrast between the foreground and
                        the background of text, links, and buttons.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='carousel-style-3'>
                        Ensure that the navigation buttons status are indicated
                        both in color and shape.
                    </ChecklistLiEl>
                </section>
            </section>
        </AccordionWidget>
    );
}
export default DynamicContent;
