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
                              Functional images are used to initiate actions rather than to convey information. They are used in buttons, links, and other interactive elements.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="f-img-2">
                              The text alternative for the image should convey the action that will be initiated.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="f-img-3">
                              Using image alone as logo in a link contains alt attribute describing the website name and page it likns to (egz,. W3C home).
                         </ChecklistLiEl>
                         <ChecklistLiEl id="f-img-4">
                              For logo image within link text supply alt="" to avoid redundancy and repetition.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="f-img-5">
                              Icon images conveying information within links text or buttons and stand-alone icon images that have a function (egz., file format, opens in a new tab) should have descriptive alt attribute.
                         </ChecklistLiEl>
                    </ul>
               </section>
               <section>
                    <h4 className="checklist__subcaption" id="#text-img">Images Of Text</h4>
                    <ul className="checklist__list" aria-labelledby="text-img">
                         <ChecklistLiEl id="txt-img-1">
                              Images of text display text that is intended to be read.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="txt-img-2">
                              Use actual text that is styled with CSS rather than image-based text presentation.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="txt-img-3">
                              If images of text must be used, the text alternative must contain the same text presented in the image.
                         </ChecklistLiEl>
                    </ul>
               </section>
               <section>
                    <h4 className="checklist__subcaption" id="#logo-img">Images Of Logos</h4>
                    <ul className="checklist__list" aria-labelledby="logo-img">
                         <ChecklistLiEl id="logo-img-1">
                              Images used as logos are exempt from some of the accessibility requirements that apply to other images of text. For example, there are no minimum color contrast and text size requirements.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="logo-img-2">
                              Images of logo that are not linked should contain alt attribute with company name (without a word 'logo').
                         </ChecklistLiEl>
                         <ChecklistLiEl id="logo-img-3">
                              Images of logo that are linked become a functional images.
                         </ChecklistLiEl>
                    </ul>
               </section>
               <section>
                    <h4 className="checklist__subcaption" id="#math-img">Images of Math Expressions</h4>
                    <ul className="checklist__list" aria-labelledby="math-img">
                         <ChecklistLiEl id="math-img-1">
                              Images of math expressions only used in exceptional circumstances –  when the expression is an exception to the regular content of the page or website.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="math-img-2">
                              When math forms are a substantial part of the content (for example, for online maths courses), <i>MathML</i> should be used.
                         </ChecklistLiEl>

                    </ul>
               </section>
               <section>
                    <h4 className="checklist__subcaption" id="#complex-img">Complex Images</h4>
                    <ul className="checklist__list" aria-labelledby="complex-img">
                         <ChecklistLiEl id="complex-img-1">

                         </ChecklistLiEl>
                         <ChecklistLiEl id="complex-img-2">

                         </ChecklistLiEl>
                         <ChecklistLiEl id="complex-img-3">

                         </ChecklistLiEl>
                         <ChecklistLiEl id="complex-img-4">

                         </ChecklistLiEl>
                         <ChecklistLiEl id="complex-img-5">

                         </ChecklistLiEl>
                         <ChecklistLiEl id="complex-img-6">

                         </ChecklistLiEl>
                    </ul>
               </section>

          </AccordionWidget >
     )
}
export default Images;