import React from 'react';
import './Checklist.scss';
import ChecklistLiEl from './ChecklistLiEl';
import AccordionWidget from './../components/AccordionWidget/AccordionWidget';

function SemanticStructure() {

     const accordionData = {
          heading: 3,
          title: 'Page Semantic Structure',
          subtitle: null,
          styling: 'bg-grey',
     }
     return (
          <AccordionWidget data={accordionData}>
               <section>
                    <ul className="checklist__list">
                         <ChecklistLiEl id="regions-1"><strong className="color-themed--primary">Mark up different regions of applications, so that they can be identified by web browsers and assistive technologies.</strong></ChecklistLiEl>
                         <ChecklistLiEl id="regions-2">Provide designs that use labels, controls, status indicators, and other UI elements consistently across all pages.</ChecklistLiEl>
                         <h5 className="checklist__list-subcaption">HTML  Validity :</h5>
                         <ChecklistLiEl id="regions-3">Elements have complete start and end tags.</ChecklistLiEl>
                         <ChecklistLiEl id="regions-4">Elements are nested according to their specifications.</ChecklistLiEl>
                         <ChecklistLiEl id="regions-5">Elements do not contain duplicate attributes.</ChecklistLiEl>
                         <ChecklistLiEl id="regions-6">All IDs are unique.</ChecklistLiEl>
                         <ChecklistLiEl id="regions-7">If HTML5 cannot be used, to improve accessibility, add WAI-ARIA code (<b>role=""</b>) to div elements that function as their HTML5 counterparts, egz. &lt;id="main" role="main"&gt;</ChecklistLiEl>
                         <h5 className="checklist__list-subcaption">HTML meta-related elements :</h5>
                         <ChecklistLiEl id="meta-1">
                              Providing a <i>lang=""</i> attribute on the root <i>html</i> element with a valid IETF identifying language tag to help <abbr title="Assistive Technologies">AT</abbr> determine the proper language to announce.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="meta-2">
                              Provide a descriptive page <i>title</i> that distinguishes it from other pages. Use <q>PAGE NAME - SITE NAME</q> format.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="meta-3">
                              Use a descriptive, as unique as possible phrase (55-60 chars) for the <i>title </i> element.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="meta-4">
                              Ensure that the <i>title</i> element describes the page's purpose and <strong>updates the description  to reflect significant page state changes</strong>.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="meta-5">
                              Meta tag <i>charset="utf-8"</i> present.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="meta-6">
                              Meta tag <i>name="viewport"</i> with <i>content="width=device-width, initial-scale=1"</i> present.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="meta-7">
                              Check for presence and content of other meta tag's names: author, description, robots, googlebot, slurp. If present validate Open Graph (og:) meta property and content.
                         </ChecklistLiEl>
                    </ul>
               </section>
               <section>
                    <h4 className="checklist__list-caption">Page Regions</h4>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Page Header :</h5>
                         <ChecklistLiEl id="regions-8"><i>&lt;header&gt;</i> element present at the top of every page for the website logo, search function, and navigation options. </ChecklistLiEl>
                         <ChecklistLiEl id="regions-9"><i>&lt;header&gt;</i> used inside <i>&lt;article&gt;</i> and <i>&lt;section&gt;</i> elements, not to be associated with the whole page, but only with that specific element.</ChecklistLiEl>
                         <h5 className="checklist__list-subcaption">Page Footer :</h5>
                         <ChecklistLiEl id="regions-10"><i>&lt;footer&gt;</i> element present at the bottom of every page that contains site-wide information, such as copyright information, privacy statements, or disclaimers.</ChecklistLiEl>
                         <ChecklistLiEl id="regions-11"><i>&lt;footer&gt;</i> used inside <i>&lt;article&gt;</i> and <i>&lt;section&gt;</i> elements, not to be associated with the whole page, but only with that specific element.</ChecklistLiEl>
                         <h5 className="checklist__list-subcaption">Navigation:</h5>
                         <ChecklistLiEl id="regions-12">Use &lt;nav&gt; element to identify a navigation menu.</ChecklistLiEl>
                         <ChecklistLiEl id="regions-13">If a web page has a number of navigation menus, use labels to identify each one.</ChecklistLiEl>
                         <h5 className="checklist__list-subcaption">Main content:</h5>
                         <ChecklistLiEl id="regions-14">Use &lt;main&gt; element to identify the main content region of a web page.</ChecklistLiEl>
                         <ChecklistLiEl id="regions-15">Use <q>Skip to main content</q> link at very top of appliction.</ChecklistLiEl>
                         <h5 className="checklist__list-subcaption">Complementary content:</h5>
                         <ChecklistLiEl id="regions-16">Use &lt;aside&gt; element to identify regions that support the main content, yet are separate and meaningful sections on their own.</ChecklistLiEl>
                         <ChecklistLiEl id="regions-17">Often represented as sidebars. It can be used for advertising, for groups of nav elements, etc.</ChecklistLiEl>
                         <ChecklistLiEl id="regions-18">Is &lt;aside&gt; element used in realation to page structure while &lt;section&gt; and &lt;article&gt; elements are used in context of the content structure?</ChecklistLiEl>

                    </ul>

               </section>
               <section>
                    <h4 className="checklist__list-caption">Labeling Regions (aria-label/aria-labelledby)</h4>
                    <ul className="checklist__list">
                         <ChecklistLiEl id="labeling-1">
                              Provide labels to distinguish two page regions of the same type (same HTML element) when used on the same page.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="labeling-2">
                              Use labels to change or specify the default identification of page regions, egz. aside element labeled as “advertisement”.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="labeling-3">
                              <strong>Unique regions (main) do not need additional labels.</strong>
                         </ChecklistLiEl>
                         <ChecklistLiEl id="labeling-4">
                              Use the WAI-ARIA <i>aria-label</i> attribute to label the region if the label should not appear visually on the page.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="labeling-5">
                              Use <i>aria-labelledby="[ID]" </i> to point to an existing element by its id - consider using heading with that id.
                         </ChecklistLiEl>

                    </ul>
               </section>
               <section>
                    <h4 className="checklist__list-caption">Content Structure</h4>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Headings:</h5>
                         <ChecklistLiEl id="headings-1">
                              Break up content into logical chunks and precede each area of content with a descriptive heading. </ChecklistLiEl>
                         <ChecklistLiEl id="headings-2">
                              Headings are useful for labeling page regions. Use <i>aria-labelledby</i> to associate headings with their page region.</ChecklistLiEl>
                         <ChecklistLiEl id="headings-4">
                              There should be only one &lt;h1&gt; element on the page and it doesn't have to be placed in the top region of the web page if its used in main section.</ChecklistLiEl>
                         <ChecklistLiEl id="headings-3">
                              <strong>Nest headings by their rank (or level h1-h6).</strong> Avoid skipping heading ranks.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="headings-5">
                              HEADINGS AND SECTIONS. Headings with an equal or higher rank start a new section. Headings with a lower rank start new subsections that are part of the higher ranked section.</ChecklistLiEl>
                         <ChecklistLiEl id="headings-6">
                              In fixed, complementary sections of the page (sidebars) the heading ranks should not change depending on the ranks in the content area. In those cases, consistency across pages is more important.
                         </ChecklistLiEl>
                    </ul>
               </section>
          </AccordionWidget>
     )
}
export default SemanticStructure;