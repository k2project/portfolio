import React from 'react';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';


const accessibility_semantic={
    id:'12',
    featured:false,
    title:'Semantic Structure',
    subtitle:'Web Accessibility Best Practices',
    date:'2020-02-03',
    image:{
        path:'accessibility.jpg',
        position:'right center '
    },
    tags:['Coding','Accessibility'],
    body:(
        <article className="post__body">
            <section className="post__section">
                <h3 className="post__heading">What are the Semantic Elements?</h3>
                <p>A semantic element clearly describes its meaning to both the browser and the developer. There are commonly used <b>non-semantic elements</b> that tell nothing about their content, such as <i>div</i> and <i>span</i>. However, HTML5 offers a great range of <b>semantic elements</b> to define different parts of a web page, which should be used in order to help users using AT to navigate easily around the page. Also, search engines will consider its contents as important keywords to influence the page's search rankings (SEO).</p>

            </section>
            <ContentSectioning/>
            
           <section className="post__section">
           <h3 className="post__heading">Semantic Code Best Practices.</h3>
           <ul className="post__list">
               <li>To ensure <b>HTML validity</b> nest elements accordingly to their specifications with complete start and end tags, don not duplicate attributes and keep all IDs unique.</li>
              
               <li><b>Lang Tag.</b> Provide a language tag (&lt;html lang="en"&gt;) on every page. Wrap text in the same tag when referring to a language different to the page language.</li>
               <li><b>Page Title.</b> Provide a descriptive page title that distinguishes it from other pages in format <span className="color-themed--primary">PAGE NAME -SITE NAME</span>.</li>
               <li><b>Headings.</b> Break up content into logical chunks and precede each area of content with a descriptive heading. There should be only one h1 heading. Heading must be hierarchically ordered. Provide designs that use labels, controls, status indicators, and other UI elements consistently across all pages. Ensure that the HTML content in the DOM is in a logical order (visually from left-to-right and top-to-bottom).</li>
               <li><b>Emphasized Text.</b> Use <i>strong</i> and <i>em </i> tags to ensure that the block of text is stressed and <i>b</i> and <i>i</i> for visual styling.</li>
               <li>For lists, use list tags <i>ul, ol</i> and <i>li</i>. The menu items are structured in HTML as an unordered list. In hierarchical menus (menus within menus), use unordered lists within unordered lists.</li>
               <li><strong className="color-themed--primary">Use BUTTON for elements that perform a within-page function and LINKS for elements that load a new page.</strong> </li>
               <li><b>Links.</b> Ensure that link text accurately describes the destination of the link. Link text must not be empty. Avoid using ambiguous link names, such as "Click Here" or "More". Ensure links are underlined. Otherwise, provide high contrast (3:1 contrast ratio) between link and non-linked text. Provide a method to skip the page header and navigation menus and go straight to the content, through a hidden "skip to main content" or "skip navigation" link at the top of the page.</li> 
               <li><b>Images.</b> To display decorative or non-meaningful images, such as icons and backgrounds, use CSS methods. Use the <i>img</i> tag ONLY to show 'content' images, such as photos or illustrations, that are meaningful to the content. An <i>alt property </i> must be present on all img tags. Purely decorative images should use null alt text (alt=""). You can also provide an onscreen text description (using the HTML5 tag figcaption) for charts and other illustrations. </li>
               <li><b>Tables.</b> For tabular data use proper table markup including scope attributes. For table headers using colspan or rowspan, use scope="colgroup/rowgroup". Do NOT use HTML table elements for positional layout.</li>
               <li><b>Forms.</b> Provide an accessible name to all fields by using a <i>label</i> tag with a "for" attribute that references the <i>input</i> ID. Ensure that error messages are properly connected with their associated form fields. Provide a description for groups of related form elements by using  <i>fieldset</i> and <i> legend </i>tags. Ensure that all error text is clearly marked as such with a heading, "Error:", or by use of an error symbol.</li>
               <li><b>ARIA.</b> Avoid custom ARIA elements and use standard HTML controls and elements, such as <i>input, select, button</i>. If you use ARIA attributes, ensure they are applied correctly on the right elements. <b>No ARIA is better than bad ARIA.</b></li>
           </ul>

           <p>For dynamically created content, make sure that the content directly follows the activating element in the DOM (such as a hide/show dropdown) and that content changes, status messages, and system state changes are announced to assistive technology. </p>
           <p>At all times page must be completely keyboard accessible. Interactive custom elements should be reached and activated with the keyboard alone. Ensure that all keyboard-interactive elements have a visible focus indicator - the more noticeable, the better.</p>

           </section>
           
            <References/>
        </article>
    ),

}
export default accessibility_semantic;

function References(){
    return(
        <section className="post__ref">
            <p className="post__ref-title">References:</p>
            <ol className="post__ref-list">
                <li>
                    <a href="https://www.w3.org/WAI/tutorials/"> W3C - <b>Web Accessibility Tutorials</b></a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics"> MDN web doc - <b>Semantics</b></a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"> MDN web doc - <b>Elements</b></a>
                </li>
               
            </ol>
        </section>
    )
}

function ContentSectioning(){
    const headingInfo={
        heading:5,
        title:'Content Sectioning',
        subtitle:null,
        color:null,
    }
    return (
        <section className="post__section">
            <AccordionWidget data={headingInfo}>
                <p>Content sectioning elements allow you to organize the document content into logical pieces. Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.</p>
            <table className="post__table">
                    <tr>
                        <th>Element</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>aaddress</td>
                        <td>Element that  indicates that the enclosed HTML provides contact information for a person or people, or for an organization. Takes whatever form is appropriate for the context, and may include any type of contact information that is needed. No nested <i>address</i> elements, no heading and sectioning content within allowed.</td>
                    </tr>
                    <tr>
                        <td>article</td>
                        <td>Element that specifies independent, self-contained content. It should make sense on its own, and it should be possible to read it independently from the rest of the web site, eg. blog post. <br/> Should be identified, typically by including a heading. Author information can be provided through the <i> address </i> and the publication date and time can be described using the <i>datetime</i> attribute of a <i>time</i> element. 
                        <br/>
                        <small>Permitted ARIA roles: application, document, feed, main, presentation,region.</small>

                        </td>
                    </tr>
                    <tr>
                        <td>aside</td>
                        <td>Eelement that represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.
                        <br/>
                        <small>Permitted ARIA roles: feed, note, presentation,region, search.</small>

                        </td>
                    </tr>
                    
                    <tr>
                        <td>footer</td>
                        <td>Represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.</td>
                    </tr>
                    <tr>
                        <td>header</td>
                        <td>Represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements. Although it does not introduce a new section in the outline, header usually contain the section's heading. </td>
                    </tr>
                    <tr>
                        <td>h1-h6</td>
                        <td>Levels of section headings. <i>h1</i> is the highest section level and <i>h6</i> is the lowest. You should only use one <i>h1</i> per page.Avoid skipping heading levels.</td>
                    </tr>
                    <tr>
                        <td>hgroup</td>
                        <td>Allows the primary heading for a document section to be grouped with any secondary headings—such as subheadings or alternative titles—to form a multi-level heading. Prevents any of its secondary heading children from creating separate sections of their own in the outline—as they otherwise normally would if they were not children of any <i>hgroup</i></td>
                    </tr>
                    <tr>
                        <td>main</td>
                        <td>Specifies the main content of a document. A document mustn't have more than one. Content that is repeated across a set of documents or document sections such as sidebars, navigation links, copyright information, site logos, and search forms shouldn't be included unless the search form is the main function of the page.

</td>
                    </tr>
                    <tr>
                        <td>nav</td>
                        <td>Represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus,tables of contents,and indexes. <br/>A document may have several <i>nav</i> elements. Use <b>aria-labelledby </b> in such case to promote.  <br/>Not all documents's links must be contained in this tag, eg. footer's links.</td>
                    </tr>
                    <tr>
                        <td>section</td>
                        <td>A section is a thematic grouping of content, typically with a heading. <br/>
                        Do not use the section element as a generic container; this is what div is for, especially when the sectioning is only for styling purposes. A rule of thumb is that a section should logically appear in the outline of a document. <br/>
                        <small>Permitted ARIA roles: alert, alertdialog, application, banner, complementary, contentinfo, dialog, document, feed, log, main, marquee, navigation, search,status, tabpanel.</small>
                        </td>
                    </tr>
                   
                    {/* <tr>
                        <td>time</td>
                        <td>Defines a date/time/time duration. Comes with <b>datetime</b> attribute, that indicates the time and/or date of the element and must be in a correct format. <br/>
                        <code>
                        TIME: &lt;time datetime="20:00"&gt;20:00&lt;/time&gt; <br/>
                        DATE: &lt;time datetime="2011-11-18"&gt;18th Nove,2011&lt;/time&gt; <br/>
                        DURATION: &lt;time datetime="PT2H30M"&gt;2h 30m&lt;/time&gt;.
                        </code> <br/>
                        If the element does not have a datetime attribute, it must not have any element descendants, and the datetime value is the element’s child text content. <br/>
                        <small> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time" className="post__link">MDN web docs accepted formats of datetime attribute.</a></small>
                        </td>
                    </tr>

                   */}
                </table>
            
            
            </AccordionWidget>
        </section>      
    )
}