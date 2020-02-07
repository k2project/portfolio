import React from 'react';
import './Checklist.scss';
import ChecklistLiEl from './ChecklistLiEl';
import AccordionWidget from '../components/AccordionWidget/AccordionWidget';

function DynamicContent() {

     const accordionData = {
          heading: 3,
          title: 'Interactive Elements',
          subtitle: null,
          styling: 'bg-dark',
     }
     return (
          <AccordionWidget data={accordionData}>
               <section>
                    <ul className="checklist__list" aria-label="interactive element functionality">
                         <ChecklistLiEl id="dynamic-1">
                              If an element creates or shows new custom content, ensure that the content directly follows the activating element in the DOM (such as a hide/show dropdown).
                         </ChecklistLiEl>
                         <ChecklistLiEl id="dynamic-2">
                              Ensure that content changes, status messages, and system state changes are announced to <abbr title="assistive technology">AT</abbr> and the <i>title</i> tag reflects dynamic changes to the application.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="dynamic-3">
                              Ensure use of relevant HTML elements for interactive content, such as <i>details/summary</i> - for accordions, <i>dialog</i> or <i>menu</i> - for a group of interactive commands that a user can perform or activate.
                         </ChecklistLiEl>
                    </ul>
               </section>


          </AccordionWidget>
     )
}
export default DynamicContent;