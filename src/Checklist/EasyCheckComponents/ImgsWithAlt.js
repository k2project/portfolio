import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function ImgsWithAlt() {
    const accordionData = {
        heading: 3,
        title: 'Images With Alt',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist page imgages with text alternative'
                >
                    <ChecklistLiEl id='aec-img-1'>
                        Every image has alt with appropriate alternative text.
                    </ChecklistLiEl>

                    <ChecklistLiEl id='aec-img-2'>
                        If an image conveys information useful for interacting
                        with or understanding the web page content, then it
                        needs alternative text.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-img-3'>
                        If an image is just decorative and people don't need to
                        know about the image, then it should have null alt
                        (alt="").
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-img-4'>
                        The text should be functional and provide an equivalent
                        user experience, not necessarily describe the image.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-img-5'>
                        The text needs to convey the same meaning as the image.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-img-6'>
                        Alternative text depends on context.{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-img-7'>
                        Images that are functional — for example, images that
                        initiate actions (like submit buttons) and linked images
                        (like in navigation) — need alt text that is the
                        functional equivalent.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-img-8'>
                        If there is text in the image (logo) that text needs to
                        be included in the alt text.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-img-9'>
                        If the image has complex information — such as charts or
                        graphs — the image should have a short alt text to
                        identify the image, and then the detailed description of
                        the information should be provided elsewhere.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-img-10'>
                        he alternative text does not need to include the words
                        "button", "link", or "image of".
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default ImgsWithAlt;
