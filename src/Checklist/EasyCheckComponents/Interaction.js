import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Interaction() {
    const accordionData = {
        heading: 3,
        title: 'Forms, Labels, And Errors',
        subtitle: null,
        styling: 'bg-secondary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul
                    className='checklist__list'
                    aria-label='easy checklist forms'
                >
                    <ChecklistLiEl id='aec-interaction-1'>
                        Ensure labels, keyboard access, clear instructions, and
                        effective error handling for forms.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-interaction-2'>
                        Check that all form controls are keyboard accessible.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-interaction-3'>
                        {' '}
                        Check that every form control has a label associated
                        with it using <i>label</i>, <i>for</i>, and <i>id</i>.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-interaction-4'>
                        Check that any fields that are required/mandatory are
                        clearly indicated.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-interaction-5'>
                        Check that the indicator does not rely on color alone.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-interaction-6'>
                        Check that the indicator (such as asterisks (*)) is
                        included in the marked up field label for text boxes and
                        drop-down lists, or legend for radio buttons and
                        checkboxes.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-interaction-7'>
                        Check that any instructions for completing the form are
                        before they are needed.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='aec-interaction-8'>
                        Check that required formats, such as dates, are included
                        in the marked up label.
                    </ChecklistLiEl>
                </ul>
                <section>
                    <h4 className='checklist__subcaption' id='aec-err'>
                        Errors Handling
                    </h4>
                    <ul className='checklist__list' aria-labelledby='aec-err'>
                        <ChecklistLiEl id='err-1'>
                            Check that clear and specific guidance is provided
                            to help people understand and fix the error.{' '}
                        </ChecklistLiEl>
                        <ChecklistLiEl id='err-2'>
                            Check that the errors are easily findable. Generally
                            it is best if the error messages are before the
                            form, rather than after the form.
                        </ChecklistLiEl>
                        <ChecklistLiEl id='err-2.1'>
                            Ensure that all error text is clearly marked as such
                            with a heading, "Error:", or by use of an error
                            symbol.
                        </ChecklistLiEl>
                        <ChecklistLiEl id='err-3'>
                            Check that the fields without errors are still
                            populated with the data you entered. People should
                            not have to re-enter all the information in the
                            form, except for some sensitive data such as credit
                            card numbers.
                        </ChecklistLiEl>
                        <ChecklistLiEl id='err-4'>
                            If the error concerns a format such as date, time,
                            or address, check that the correct format is clearly
                            explained.
                        </ChecklistLiEl>
                    </ul>
                </section>
            </section>
        </AccordionWidget>
    );
}
export default Interaction;
