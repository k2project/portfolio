import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

function Images() {

     const accordionData = {
          heading: 3,
          title: 'Images',
          subtitle: null,
          styling: 'bg-dark',
     }
     return (
          <AccordionWidget data={accordionData}>
               <section>
                    <ul className="checklist__list" aria-label="accessable images">
                         <ChecklistLiEl id="images-1">
                              <b className="color-themed--primary">
                                   Images must have text alternatives alt="" that describe the information or function represented by them.
                              </b>
                         </ChecklistLiEl>
                    </ul>
               </section>
               <section>
                    <h4 className="checklist__subcaption" id="#informative-img">Informative Images</h4>
                    <ul className="checklist__list" aria-labelledby="informative-img">
                         <ChecklistLiEl id="i-img-1">
                              Informative images graphically represent concepts and information (pictures,photos, and illustrations).
                         </ChecklistLiEl>
                         <ChecklistLiEl id="i-img-2">
                              <span className="color-themed--primary">
                                   The text alternative conveys the meaning or content that is displayed visually and isn’t a literal description of the image.
                              </span>
                         </ChecklistLiEl>
                         <ChecklistLiEl id="i-img-3">
                              Applies to all images used to label and/or supplement other information, images conveying succinct information or impressions and emotions or files format.
                         </ChecklistLiEl>
                    </ul>
               </section>
               <section>
                    <h4 className="checklist__subcaption" id="#decorative-img">Decorative Images</h4>
                    <ul className="checklist__list" aria-labelledby="decorative-img">
                         <ChecklistLiEl id="d-img-1">
                              Decorative images don’t add information to the content of a page: image used as part of page design or as part of a text link, image with adjacent text alternative or used for ambiance.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="d-img-2">
                              <strong> A null (empty) alt text must be provided (alt="") with decorative images</strong> so that they can be ignored by assistive technologies, such as screen readers.
                         </ChecklistLiEl>
                    </ul>
               </section>
               <section>
                    <h4 className="checklist__subcaption" id="#functional-img">Functional Images</h4>
                    <ul className="checklist__list" aria-labelledby="functional-img">
                         <ChecklistLiEl id="f-img-1">
                         </ChecklistLiEl>
                         <ChecklistLiEl id="f-img-2">
                         </ChecklistLiEl>
                         <ChecklistLiEl id="f-img-3">
                         </ChecklistLiEl>
                         <ChecklistLiEl id="f-img-4">
                         </ChecklistLiEl>
                         <ChecklistLiEl id="f-img-5">
                         </ChecklistLiEl>
                    </ul>
               </section>

          </AccordionWidget >
     )
}
export default Images;