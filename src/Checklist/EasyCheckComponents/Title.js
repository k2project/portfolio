import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Title() {
    const accordionData = {
        heading: 3,
        title: 'PAGE TITLE',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist page title'
                >
                    <ChecklistLiEl id='aec-title-1'>
                        Check that there is a title that adequately and briefly
                        describes the content of the page.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-title-2'>
                        Check that the title is different from other pages on
                        the website, and adequately distinguishes the page from
                        other web pages.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-title-3'>
                        Titles should be "front-loaded" with the important and
                        unique identifying information first, egz.{' '}
                        <q>Contact COMPANY NAME</q> instead of{' '}
                        <q>COMPANY NAME | Contact Page</q>.
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default Title;
