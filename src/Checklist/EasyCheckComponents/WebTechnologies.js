import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function WebTechnologies() {
    const accordionData = {
        heading: 3,
        title: 'WEB TECHNOLOGIES',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist web technologies'
                >
                    <ChecklistLiEl id='web-tech-1'>
                        Use web technologies that are compatible with screen
                        readers.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='web-tech-2'>
                        Use HTML for any text content (e.g. use HTML tables
                        instead of images of tables, use plain text instead of
                        images of text).
                    </ChecklistLiEl>
                    <ChecklistLiEl id='web-tech-3'>
                        Use MathML for math content.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='web-tech-4'>
                        Use Highcharts for graphs and charts.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='web-tech-5'>
                        Use Able Player as a media player for video and audio
                        content.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='web-tech-6'>
                        For sites that provide PDFs, also provide HTML, Word,
                        and EPUB3 versions.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='web-tech-7'>
                        Ensure that PDFs are properly tagged.
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default WebTechnologies;
