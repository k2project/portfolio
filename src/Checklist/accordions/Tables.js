import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Tables() {
    const accordionData = {
        heading: 3,
        title: 'Tables',
        subtitle: null,
        styling: 'bg-dark'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='tables accessibilty'
                >
                    <ChecklistLiEl id='tables-1'>
                        Accessible tables need HTML markup that indicates header
                        cells and data cells and defines their relationship.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='tables-1.1'>
                        Tables should not be used for layout purposes.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='tables-3'>
                        Break up complex tables into simple individual tables,
                        each containing the data for one sub-topic if possible.
                        Start a new <i>table</i> when the topic changes.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='tables-3.1'>
                        Make sure that each separate piece of data has its cell.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='tables-4'>
                        Don't use line breaks <i>br</i> element to create table
                        rows as the data in the pseudo-rows may no longer align
                        correctly when text is resized.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='tables-5'>
                        Align text to the left and numeric data to the right.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__caption' id='#t-semantic'>
                    Tables Semantics
                </h4>
                <ul className='checklist__list' aria-labelledby='t-semantic'>
                    <ChecklistLiEl id='t-semantic-1'>
                        There is only one <i>thead</i> and <i>tfoot</i> element
                        per <i>table</i>.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-semantic-1.1'>
                        All non-header and non-footer rows must be inside{' '}
                        <i>tbody</i> element.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-semantic-1.2'>
                        Multiple sections within a table can be created within{' '}
                        <i>tbody</i> with <i>tr</i> filled with <i>th</i>{' '}
                        elements to create headers if the table can not be
                        broken up into a less complex tables.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-semantic-2'>
                        <i>tr</i> element defines a row of cells in a table.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-semantic-2.1'>
                        Header cells within <i>tr</i> must be marked up with{' '}
                        <i>th</i>, and data cells with <i>td</i> to make tables
                        accessible.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-semantic-3'>
                        Use <i>th</i> element with <i>scope="col/row'</i>
                        attribute for tables with ambiguous data.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-semantic-4'>
                        Provide a <i>scope="row"</i> attribute on a <i>th</i>{' '}
                        element to help describe that the cell is the first in a
                        row.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-semantic-5'>
                        Provide a <i>scope="col"</i> on a <i>th</i> element to
                        help describe that the cell is at the top of a column.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-semantic-6'>
                        Use <i>caption</i> as the first child of its parent{' '}
                        <i>table</i> element to specifies the title of a table.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-semantic-7'>
                        When the <i>table</i> element that contains the{' '}
                        <i>caption</i> is the only descendant of a <i>figure</i>{' '}
                        element, you should use the <i>figcaption</i> element
                        instead.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-semantic-8'>
                        To define common semantics on all common cells use{' '}
                        <i>col</i> element with <i>span</i> element encapsulated
                        in <i>colgroup</i>.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__caption' id='#t-style'>
                    Tables Styling
                </h4>
                <ul className='checklist__list' aria-labelledby='t-style'>
                    <ChecklistLiEl id='t-style-1'>
                        Differentiate <i>th</i> and <i>td</i> cells visually.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-style-2'>
                        Style even and odd rows in a different to help people
                        who have reading difficulties or who enlarge text.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-style-3'>
                        Highlight the cell (and row/column) on mouseover and
                        keyboard focus to support people to see where they are.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-style-4'>
                        Make sure that the contrast ratio between the text and
                        background is good for both headers and data cells.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='t-style-5'>
                        Enable scrolling through the table in case of use of
                        smaller screen or zooming.
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__caption' id='#t-structure'>
                    Tables Structure
                </h4>
                <section>
                    <h5 className='checklist__subcaption' id='#t-one-h'>
                        Tables with one header
                    </h5>
                    <ul
                        className='checklist__list'
                        aria-labelledby='t-structure t-one-h'
                    >
                        <ChecklistLiEl id='t-one-h-1'></ChecklistLiEl>
                    </ul>
                </section>
                <section>
                    <h5 className='checklist__subcaption' id='#t-two-h'>
                        Tables with two headers
                    </h5>
                    <ul
                        className='checklist__list'
                        aria-labelledby='t-structure t-two-h'
                    >
                        <ChecklistLiEl id='t-two-h-1'></ChecklistLiEl>
                    </ul>
                </section>
                <section>
                    <h5 className='checklist__subcaption' id='#t-irr-h'>
                        Tables with irregular headers
                    </h5>
                    <ul
                        className='checklist__list'
                        aria-labelledby='t-structure t-irr-h'
                    >
                        <ChecklistLiEl id='t-irr-h-1'></ChecklistLiEl>
                    </ul>
                </section>
                <section>
                    <h5 className='checklist__subcaption' id='#t-multi-h'>
                        Tables with multi-level headers
                    </h5>
                    <ul
                        className='checklist__list'
                        aria-labelledby='t-structure t-multi-h'
                    >
                        <ChecklistLiEl id='t-multi-h-1'></ChecklistLiEl>
                    </ul>
                </section>
            </section>
        </AccordionWidget>
    );
}
export default Tables;
