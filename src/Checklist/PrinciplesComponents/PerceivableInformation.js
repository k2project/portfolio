import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function PerceivableInformation() {
    const accordionData = {
        heading: 3,
        title: 'Perceivable information and user interface',
        subtitle: null,
        styling: 'bg-primary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <h4 className='checklist__subcaption' id='txt-alt'>
                    Text alternatives for non-text content
                </h4>
                <ul className='checklist__list' aria-labelledby='txt-alt'>
                    <ChecklistLiEl id='txt-alt-1'>
                        Text alternatives are present for non-text content.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='txt-alt-2'>
                        All functional and informative images, buttons' images,
                        and links' images have descriptive alternative text.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='txt-alt-3'>
                        Decorative images are given null alt text (alt="").
                    </ChecklistLiEl>
                    <ChecklistLiEl id='txt-alt-4'>
                        Complex images are provided with equivalent alternatives
                        in context or on a separate linked page.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='txt-alt-5'>
                        Form's buttons have a descriptive value and form's
                        inputs have associated text labels.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='txt-alt-6'>
                        Provide a descriptive TITLE attribute for all embedded
                        audio/video, non-image charts, Flash, form elements and
                        other items that require textual explanation in order to
                        be understood.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='txt-alt-7'>
                        Do not use CAPTCHA that relies on visual identification.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='multimedia-alt'>
                    Captions and other alternatives for multimedia
                </h4>
                <ul
                    className='checklist__list'
                    aria-labelledby='multimedia-alt'
                >
                    <ChecklistLiEl id='multimedia-alt-1'>
                        Text transcripts and captions for audio content
                        available.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='multimedia-alt-2'>
                        Audio descriptions, which are narrations to describe
                        important visual details in a video present.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='multimedia-alt-3'>
                        Sign language interpretation of audio content, including
                        relevant auditory experiences accessable.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='content-alt'>
                    Content can be presented in different ways (simpler layout)
                    without losing information or structure
                </h4>
                <ul className='checklist__list' aria-labelledby='content-alt'>
                    <ChecklistLiEl id='content-alt-1'>
                        Headings, lists, tables, input fields, and content
                        structures are marked-up properly.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-alt-2'>
                        Sequences of information or instructions are independent
                        of any presentation (css styling).
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-alt-3'>
                        The reading and navigation order (determined by code
                        order) is logical and intuitive.{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-alt-4'>
                        Browsers and assistive technologies provide settings to
                        customize the presentation.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__subcaption' id='content-vis'>
                    Content is easier to see and hear
                </h4>
                <ul className='checklist__list' aria-labelledby='content-vis'>
                    <ChecklistLiEl id='content-vis-1'>
                        Color is not used as the only way of conveying
                        information or identifying content.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-vis-2'>
                        Default foreground and background color combinations
                        provide sufficient contrast.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-vis-3'>
                        When users resize text up to 200% or change text
                        spacing, no information is lost.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-vis-4'>
                        Text reflows in small viewports and when users make the
                        text larger.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-vis-5'>
                        Images of text are resizable, replaced with actual text,
                        or avoided where possible.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-vis-6'>
                        Users can pause, stop, or adjust the volume of audio
                        that is played on a website.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='content-vis-7'>
                        Background audio is low or can be turned off, to avoid
                        interference or distraction.
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default PerceivableInformation;
