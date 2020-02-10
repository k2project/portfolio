import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Tables() {

     const accordionData = {
          heading: 3,
          title: 'Tables',
          subtitle: null,
          styling: 'bg-dark',
     }
     return (
          <AccordionWidget data={accordionData}>
               <section>
                    <ul className="checklist__list" aria-label="tables accessibilty">
                         <ChecklistLiEl id="tables-1">
                         </ChecklistLiEl>
                    </ul>
               </section>
               <section>
                    <h4 className="checklist__subcaption" id="#t-one-h">Tables with one header</h4>
                    <ul className="checklist__list" aria-labelledby="t-one-h">
                         <ChecklistLiEl id="t-one-h-1">
                         </ChecklistLiEl>

                    </ul>
               </section>
               <section>
                    <h4 className="checklist__subcaption" id="#t-two-h">Tables with two headers</h4>
                    <ul className="checklist__list" aria-labelledby="t-two-h">
                         <ChecklistLiEl id="t-two-h-1">
                         </ChecklistLiEl>

                    </ul>
               </section>
               <section>
                    <h4 className="checklist__subcaption" id="#t-irr-h">Tables with irregular headers</h4>
                    <ul className="checklist__list" aria-labelledby="t-irr-h">
                         <ChecklistLiEl id="t-irr-h-1">
                         </ChecklistLiEl>

                    </ul>
               </section>
               <section>
                    <h4 className="checklist__subcaption" id="#t-multi-h">Tables with multi-level headers</h4>
                    <ul className="checklist__list" aria-labelledby="t-multi-h">
                         <ChecklistLiEl id="t-multi-h-1">
                         </ChecklistLiEl>

                    </ul>
               </section>
          </AccordionWidget >
     )
}
export default Tables;