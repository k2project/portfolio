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
                              To display decorative or non-meaningful images, such as icons and backgrounds, use CSS methods.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="images-2">

                              <b className="color-themed--primary">
                                   Images used with <i>img</i> tag must have text alternatives alt="" that describe the information or function represented by them at all time.
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
                              Complex images contain substantial information – more than can be conveyed in a short phrase or sentence (graphs, maps, charts, diagrams and illustrations where the page text relies on the user being able to understand the image).
                         </ChecklistLiEl>
                         <ChecklistLiEl id="complex-img-2">
                              A two-part text alternative used for complex images: short description to identify the image and, where appropriate, indicate the location of the long description and a long description – a textual representation of the essential information conveyed by the image.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="complex-img-3">
                              For the long description use a text link to the long description adjacent to the image or describe the location of the long description in the alt attribute.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="complex-img-4">
                              The HTML5 <i>figure</i> and <i>figcaption</i> elements can be used to group image and link semantically. Adding role="group" to the figure maintains backward compatibility with web browsers that don’t support the native semantics.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="complex-img-5">
                              For long descriptions that are text-only and without needing structural information use the WAI-ARIA <i>aria-describedby="[ID]"</i> attribute to link to a description of the image that is provided anywhere on the same web page.
                         </ChecklistLiEl>

                    </ul>
               </section>
               <section>
                    <h4 className="checklist__subcaption" id="#group-img">Groups of Images</h4>
                    <ul className="checklist__list" aria-labelledby="group-img">
                         <ChecklistLiEl id="group-img-1">
                              For multiple images conveying a single piece of information (stars for rating) use alt attribute with description only on one of the images (rest - alt-"");
                         </ChecklistLiEl>
                         <ChecklistLiEl id="group-img-2">
                              For a collection of images wrap each image in <i>figure</i> and <i>figcaption</i> elements to provide the information for each one individually.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="group-img-3">
                              The WAI-ARIA attribute <i>role="group"</i> is used to indicate grouping of images in collection to assistive technologies. Aria-labelledby on <i>figure</i> elemnt makes sure that the figcaption element with an ID is used as a label for the individual group/image.
                         </ChecklistLiEl>
                    </ul>
               </section>

          </AccordionWidget >
     )
}
export default Images;