import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Forms() {
    const accordionData = {
        heading: 3,
        title: 'Forms',
        subtitle: null,
        styling: 'bg-dark'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <ul className='checklist__list' aria-label='forms functinality'>
                    <ChecklistLiEl id='forms-1'>
                        {' '}
                        Forms should not be subject to a time limit to allow
                        users to complete the form at their pace.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-2'>
                        If a time limit needs to be in place, for example, for
                        security reasons, the user should have the option to
                        turn it off or extend it.{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-3'>
                        No time limit is due to a live event, such as an auction
                        or a game, or if the time to complete the form is
                        essential for a valid submission.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-3'>
                        <strong>
                            Screen readers often switch to “Forms Mode” when
                            they are processing content within a <i>form</i>{' '}
                            element and usually only read aloud form elements
                            such as <i>input</i>, <i>select</i>, <i>textarea</i>
                            , <i>legend</i>, and <i>label</i>.
                        </strong>
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__caption' id='forms-ctrl'>
                    Controls
                </h4>
                <h5 className='checklist__subcaption' id='forms-ctrl-label'>
                    Labeling Controls
                </h5>
                <ul
                    className='checklist__list'
                    aria-labelledby='forms-ctrl forms-ctrl-label'
                >
                    <ChecklistLiEl id='forms-ctrl-1'>
                        Provide labels to identify all form controls, including
                        text fields, checkboxes, radio buttons, and drop-down
                        menus.{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-2'>
                        Labels need to describe the purpose of the form control
                        and should be in close and distinct visual relationship.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-3'>
                        Whenever possible, use the <i>label </i> element to
                        associate text with form elements explicitly. The{' '}
                        <i>for</i> attribute of the label must exactly match the{' '}
                        <i>id</i> of the form control.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-4'>
                        For hidden label text (when the label of the control is
                        clear from the surrounding content), the code needs to
                        be provided to support other forms of presentation and
                        interaction, such as for screen reader and speech input
                        users.{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-5'>
                        You can hide visually the labels with <i>CSS</i>. Using{' '}
                        <i>display: none;</i> and <i>visibility: hidden;</i>{' '}
                        hides the element from{' '}
                        <abbr title='assistive technologies'>AT</abbr> too.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-6'>
                        <i>aria-label</i> or <i>aria-labelledby</i> attributes
                        can be used to identify form controls with hidden label.{' '}
                        The id of the element containing the label text (search
                        button) is used as the value of the aria-labelledby
                        attribute.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-7'>
                        Explicit labels are better supported by assistive
                        technology than the label element used as a container
                        for both the form control and the label text.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-8'>
                        When using the <i>input</i> element to create buttons,
                        the label is set in the <i>value</i> attribute of the
                        element.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-9'>
                        When using the <i>input</i> element of{' '}
                        <i>type="image"</i> to create buttons, the label is set
                        in the <i>alt</i> attribute of the <i>input</i>.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-10'>
                        In left-to-right languages, it is customary to visually
                        position labels to the right of radio buttons and
                        checkboxes, and to the left or directly above other form
                        fields.{' '}
                    </ChecklistLiEl>
                </ul>
                <h5 className='checklist__subcaption' id='forms-ctrl-group'>
                    Grouping Controls
                </h5>
                <ul
                    className='checklist__list'
                    aria-labelledby='forms-ctrl forms-ctrl-group'
                >
                    <ChecklistLiEl id='forms-ctrl-11'>
                        Related controls should be grouped together visually and
                        and in the code, by using the <i>fieldset</i> and{' '}
                        <i>legend</i> elements to associate related form
                        controls. Related entries of a <i>select</i> element can
                        be grouped using <i>optgroup</i>.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-12'>
                        {' '}
                        Radio button groups should always be grouped using{' '}
                        <i>fieldset</i> and <i>legend</i> elements.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-13'>
                        Make legends as short as possible for situations in
                        which <abbr title='assistive technologies'>AT</abbr>{' '}
                        reads them together with the label each time.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-14'>
                        Make the individual labels sufficiently self-explanatory
                        for situations in which legends are not read aloud,
                        without repeating the legend in every label.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-15'>
                        WAI-ARIA provides a <i>role="group"</i> to indicate that
                        the contained elements are members of a group and the
                        <i>aria-labelledby</i> attribute references the id for
                        text that will serve as the label for the group.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='forms-ctrl-16'>
                        For <i>select</i> elements with groups of options, the{' '}
                        <i>optgroup </i> element can be used to indicate
                        grouping. The <i>label</i> attribute of the{' '}
                        <i>optgroup</i> element is used to provide a label for
                        the group.{' '}
                    </ChecklistLiEl>
                </ul>
            </section>
            <section>
                <h4 className='checklist__caption' id='form-valid'>
                    Description, Validation And Notifications
                </h4>
                <ul className='checklist__list' aria-labelledby='form-valid'>
                    <ChecklistLiEl id='form-valid-1'>
                        Provide instructions to help users understand how to
                        complete the form and use individual form controls.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='form-valid-2'>
                        {' '}
                        Providing instructions before the <i>form</i> element
                        ensures that it is read aloud by screen readers before
                        it enters into <q>Forms mode</q>.{' '}
                    </ChecklistLiEl>
                    <ChecklistLiEl id='form-valid-3'>
                        Provide relevant instructions within the labels of the
                        form controls or with <i>aria-labelledby</i> or/and{' '}
                        <i>aria-describedby</i> attributes.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='form-valid-4'>
                        Do not use <i>placeholder</i> as an alternative to
                        labels.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='form-valid-1'></ChecklistLiEl>
                    <ChecklistLiEl id='form-valid-1'></ChecklistLiEl>
                    <ChecklistLiEl id='form-valid-1'></ChecklistLiEl>
                    <ChecklistLiEl id='form-valid-1'></ChecklistLiEl>
                    <ChecklistLiEl id='form-valid-1'></ChecklistLiEl>
                </ul>
            </section>

            <section>
                <h4 className='checklist__caption' id='forms-multi'>
                    Multi-Page Forms
                </h4>
                <ul className='checklist__list' aria-labelledby='forms-multi'>
                    <ChecklistLiEl id='forms-multi-1'></ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default Forms;
