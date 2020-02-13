import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function RobustContent() {
    const accordionData = {
        heading: 3,
        title: 'Robust content and reliable interpretation',
        subtitle: null,
        styling: 'bg-primary'
    };
    return (
        <AccordionWidget data={accordionData}>
            <section>
                <h4 className='checklist__subcaption' id='robust-content'>
                    Content is compatible with current and future user tools
                </h4>
                <ul
                    className='checklist__list'
                    aria-labelledby='robust-content'
                >
                    <ChecklistLiEl id='robust-content-1'>
                        Content is compatible with different browsers, assistive
                        technologies, and other user agents.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='robust-content-2'>
                        Ensure a valid markup that can be reliably interpreted
                        and used in a way that facilitates accessibility. Use
                        valid, error-free HTML, including unique (non-duplicate)
                        element IDs.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='robust-content-3'>
                        Avoid using non-standard controls. When using
                        non-standard controls, make sure that it is keyboard
                        accessible.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='robust-content-4'>
                        Providing a name, role, and value for non-standard user
                        interface components.
                    </ChecklistLiEl>
                    <ChecklistLiEl id='robust-content-5'>
                        Status messages must be available to{' '}
                        <abbr title='assistive technoloqies'>AT</abbr>s uch as
                        screen readers vis ARIAs.
                    </ChecklistLiEl>
                </ul>
            </section>
        </AccordionWidget>
    );
}
export default RobustContent;
