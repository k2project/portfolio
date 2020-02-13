import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Understandable() {
    const accordionData = {
        heading: 3,
        title: 'Understandable information and user interface',
        subtitle: null,
        styling: 'bg-primary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <h4 className='checklist__subcaption' id='txt-readable'>
                    Text is readable and understandable
                </h4>
                <ul className='checklist__list' aria-labelledby='txt-readable'>
                    <ChecklistLiEl id='txt-readable-1'>
                        Content authors need to ensure that text content is
                        readable and understandable to the broadest audience
                        possible, including when it is read aloud by
                        text-to-speech.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='txt-readable-2'>
                        Identify the primary language of a web page (
                        <i>title</i> element with <b>lang=""</b> attribute).
                    </ChecklistLiEl>
                    <ChecklistLiEl id='txt-readable-3'>
                        Identifying the language of text passages, phrases, or
                        other parts of a web page with <b>lang=""</b> attribute.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='txt-readable-4'>
                        Provide definitions for any unusual words, phrases,
                        idioms, and abbreviations.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='txt-readable-5'>
                        Use the clearest and simplest language possible, or
                        provide simplified versions.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='content-predictable'>
                    Content appears and operates in predictable ways
                </h4>
                <ul
                    className='checklist__list'
                    aria-labelledby='content-predictable'
                >
                    <ChecklistLiEl id='content-predictable-1'>
                        Navigation mechanisms that are repeated on multiple
                        pages appear in the same place each time.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-predictable-2'>
                        User interface components that are repeated on web pages
                        have the same labels each time.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-predictable-3'>
                        Significant changes on a web page do not happen without
                        the consent of the user.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-predictable-4'>
                        When a UI component receives focus, this does not
                        trigger unexpected actions such as automatically
                        submitting a form, opening a new window or switching
                        focus to another element.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-predictable-5'>
                        Changing the setting of a checkbox, radio button or
                        other UI component does not trigger unexpected changes
                        in context, such as causing significant changes to the
                        page content or opening a new window.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-predictable-6'>
                        When providing a submit button, do not perform any
                        actions until this button is clicked by the user.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='users-help'>
                    Users are helped to avoid and correct mistakes
                </h4>
                <ul className='checklist__list' aria-labelledby='users-help'>
                    <ChecklistLiEl id='users-help-1'>
                        Provide descriptive instructions, error messages, and
                        suggestions for correction.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-help-2'>
                        Include context-sensitive help for more complex
                        functionality and interaction
                    </ChecklistLiEl>
                    <ChecklistLiEl id='users-help-3'>
                        Allow user to review, correct, or reverse submissions if
                        necessary.
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default Understandable;
