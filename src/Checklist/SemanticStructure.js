import React from 'react';
import './Checklist.scss';
import ChecklistLiEl from './ChecklistLiEl';
import AccordionWidget from './../components/AccordionWidget/AccordionWidget';

function SemanticStructure() {

     const accordionData = {
          heading: 3,
          title: 'Page Semantic Structure',
          subtitle: null,
          styling: 'bg-dark',
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
                         <ChecklistLiEl id="headings-7">
                              Use <i>hgroup</i> to create multi-level heading that allows the primary heading for a document section to be grouped with any secondary headings to prevent the later from creating separate sections as it normally would.
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Articles :</h5>
                         <ChecklistLiEl id="articles-1">
                              Ensure that this element specifies independent, self-contained content. It should make sense on its own, and it should be possible to read it independently from the rest of the web site.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="articles-2">
                              Should be identified, typically by including a heading.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="articles-3">
                              Author information can be provided through the <i>address</i> element.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="articles-4">
                              The publication date and time can be described using the <i>datetime </i> attribute of a <i>time </i>element.
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Sections :</h5>
                         <ChecklistLiEl id="sections-1">
                              Ensure that it is a thematic grouping of content, typically with a heading and should logically appear in the outline of a document.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="sections-2">
                              Do not use the section element as a generic container; this is what div is for, especially when the sectioning is only for styling purposes.
                         </ChecklistLiEl>

                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Lists :</h5>
                         <ChecklistLiEl id="lists-1">
                              Use different types of lists to group information according to its nature to provide orientation for users.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="lists-1.1">
                              List can be nested into another list, including a different types of lists.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="lists-2">
                              Unordered lists are used when the order of the items is not relevant.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="lists-3">
                              Ordered lists are used for sequential information and are enumerated for readability.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="lists-4">
                              Description lists are groups of related terms and descriptions which are connected programmatically, that includes: one term (dt) - multiple descriptions (dd), multiple terms - one description and multiple terms - multiple descriptions list.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="lists-5">
                              Individual list items can contain a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists.
                         </ChecklistLiEl>

                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Quotes :</h5>
                         <ChecklistLiEl id="quotes-1">
                              Use the <i>q</i> element for shorter quotes, that are usually embedded in another sentence.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="quotes-2">
                              Use the <i>blockquote</i> element for longer and more complex quotes. It can contain paragraphs, headings, and other text structure elements. Those should reflect the structure of the cited document. The <i>cite</i> element is used to refer to the source of the quote.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="quotes-3">
                              The <i>cite</i> element is used to refer to the source of the quote.
                         </ChecklistLiEl>

                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Figures :</h5>
                         <ChecklistLiEl id="figures-1">
                              Use <i>figure</i> element with <i>figcaption</i> as label for blocks with additional information set off from the main content of the page – sometimes referenced from the main text (lists, images, tables, diagrams, code snipets etc.)
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Contact information :</h5>
                         <ChecklistLiEl id="address-1">
                              Use <i>address</i> element that indicates that the enclosed HTML provides contact information for a person or people, or for an organization.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="address-2">
                              Ensure that <i>address</i> contains no nested address elements, no heading and sectioning content.
                         </ChecklistLiEl>
                    </ul>
               </section>
               <section>
                    <h4 className="checklist__list-caption">Inline text Semantics</h4>
                    <ul className="checklist__list">
                         <ChecklistLiEl id="text-1">
                              Use the HTML inline text semantic to define the meaning, structure, or style of a word, line, or any arbitrary piece of text.
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Emphasized Text :</h5>
                         <ChecklistLiEl id="text-3">
                              Use <b><i>em</i></b> element to indicate stress emphasis and <b><i>strong </i></b> element to mark the text of greater importance.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="text-4">
                              Use <b><i>b</i></b> to draw the reader's attention to the element's contents, which are not otherwise granted special importance.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="text-5">
                              Use <b><i>i</i></b> element to indicate text with different semantic meaning than the surrounding text, egz.technical terms, foreign language phrases, or fictional character thoughts, etc.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="text-6">
                              Use <b><i>mark</i></b> element to indicate relevance. It represents text which is marked or highlighted for reference or notation purposes. IMPORTANT! <em>The presence of the mark element is not announced by most screen reading technology in its default configuration.</em>
                         </ChecklistLiEl>
                         <ChecklistLiEl id="text-7">
                              Use <b><i>s</i></b> element (strikethrough) only to represent things that are no longer relevant or no longer accurate. IMPORTANT! <em>The presence of the mark element is not announced by most screen reading technology in its default configuration.</em>
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption"> Edited text :</h5>
                         <ChecklistLiEl id="edit-1">
                              Use <i>del</i> elemnt to represent a range of text that has been deleted from a document.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="edit-2">
                              Use <i>ins</i> elemnt to indicate text that has been added to the document.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="edit-3">
                              Do not use <i>s</i> elemnt to indicate document's edits.
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption"> Abbreviations and acronyms :</h5>
                         <ChecklistLiEl id="text-2">
                              Use <i>abbr</i> element with the optional title attribute that can provide an expansion or description for the abbreviation.
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Definitions :</h5>
                         <ChecklistLiEl id="dfn-1">
                              Use <i>dfn</i> element to indicates the term being defined within the context of a definition phrase or sentence.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="dfn-2">
                              The paragraph element, the dt/dd pairing of description list, or the section element - the nearest ancestor of the dfn element is considered to be the definition of the term.
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Long words:</h5>
                         <ChecklistLiEl id="wbr-1">
                              Use <i>wbr</i> to represents a word break opportunity for browser when dealing with long words or phrases.
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Small print and side comments :</h5>
                         <ChecklistLiEl id="small-1">
                              Use <i>small</i> to represents side-comments and small print, like copyright and legal text, independent of its styled presentation.
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Lamguages :</h5>
                         <ChecklistLiEl id="lng-1">
                              Use <b><i>lng=""</i> attribute </b> when referring to a language different to the page language.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="lng-2">
                              Use <i>ruby</i> annotations are for showing pronunciation of East Asian characters.
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">cited creative work :</h5>
                         <ChecklistLiEl id="cite-1">
                              Use <i>cite</i> element when reffering to a cited creative work (book, article, show, etc.), <em>It must include the title of that work.</em>
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Computing Terms :</h5>
                         <ChecklistLiEl id="comp-0">
                              Use <i>code</i> element to display text styled in a fashion indicating that the text is a short fragment of computer code. To represent multiple lines of code, wrap the <i>code</i> element within a <i>pre</i>element.
                         </ChecklistLiEl>

                         <ChecklistLiEl id="comp-1">
                              Use <i>kbd</i> element represent an inline text denoting textual user input from a keyboard, voice input, or any other text entry device.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="comp-2">
                              Use <i>samp</i> element to enclose inline text which represents sample (or quoted) output from a computer program.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="comp-3">
                              Use <i>var</i> element to represent the name of a variable in a mathematical expression or a programming context.
                         </ChecklistLiEl>
                    </ul>
                    <ul className="checklist__list">
                         <h5 className="checklist__list-subcaption">Times and Dates :</h5>
                         <ChecklistLiEl id="time-1">
                              Use <i>time</i> element to definea date, time and time duration.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="time-2">
                              When used with <i>datetime</i> attribute ensure the correct format.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="time-4">
                              Valid <i>datetime</i> attribute's date and time formats: YYYY, YYYY-MM, YYYY-MM-DD, MM-DD, YYYY-W(number), HH-MM, HH-MM-SS, HH-MM-SS.MsMsMs. A a valid duration string: PT4H18M3S.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="time-3">
                              If the element does not have a <i>datetime</i> attribute, it must not have any element descendants, and the datetime value is the element’s child text content.
                         </ChecklistLiEl>


                    </ul>
               </section>
          </AccordionWidget >
     )
}
export default SemanticStructure;