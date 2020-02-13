import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Headings() {
    const accordionData = {
        heading: 3,
        title: 'PAGE HEADINGS',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist page headings'
                >
                    <ChecklistLiEl id='aec-hadings-1'>
                        The page has a heading. In almost all pages there should
                        be at least one heading.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-hadings-2'>
                        There is only one <i>h1</i> heading per page.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-hadings-3'>
                        All text that looks like a heading is marked up as a
                        heading.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-hadings-4'>
                        All text that is marked up as a heading is really a
                        conceptual section heading.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-hadings-5'>
                        The heading hierarchy is meaningful.
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default Headings;
