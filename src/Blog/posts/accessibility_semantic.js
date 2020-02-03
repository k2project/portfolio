import React from 'react';


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
                <h3 className="post__heading">What are Semantic Elements?</h3>
                <p>A semantic element clearly describes its meaning to both the browser and the developer. There are commonly used <strong>non-semantic elements</strong> that tell nothing about their content, such as <em>div</em> and <em>span</em>. However HTML5 offers great range of <strong>semantic elements</strong> to define different parts of a web page, which should be used in order to help users using AT to navigate easily around the page. Also search engines will consider its contents as important keywords to influence the page's search rankings (SEO).</p>

            </section>
            <section className="post__section">
                <table className="post__table">
                    <tr>
                        <th>Element</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>article</td>
                        <td>Element that specifies independent, self-contained content. It should make sense on its own, and it should be possible to read it independently from the rest of the web site, eg. blog post.</td>
                    </tr>
                    <tr>
                        <td>aside</td>
                        <td>Eelement that defines some content aside from the content it is placed in (like a sidebar) and must be realated to that surrending content.</td>
                    </tr>
                    <tr>
                        <td>details</td>
                        <td>Defines content that the user can view or hide on demand. <strong>Can be used to create an interactive widget that the user can open and close (two states).</strong> Any sort of content can be put inside the tag. The content of the element should not be visible (but summary) unless the open attribute is set. Used along with <em>summary</em> tag.</td>
                    </tr>
                    <tr>
                        <td>figcaption</td>
                        <td>It adds a visual explanation to an image. Commonly grouped together with image and enclosed with figure tag.</td>
                    </tr>
                    <tr>
                        <td>figure</td>
                        <td>Specifies self-contained content, like illustrations, diagrams, photos, code listings.</td>
                    </tr>
                    <tr>
                        <td>footer</td>
                        <td>A footer typically contains the author of the document, copyright information, links to terms of use, contact information, etc. It can be used for a document or/and sections.</td>
                    </tr>
                    <tr>
                        <td>header</td>
                        <td>Element that should be used as a container for introductory content of section or/and document itself. There can be several headers in the document.</td>
                    </tr>
                    <tr>
                        <td>main</td>
                        <td>Specifies the main content of a document.</td>
                    </tr>
                    <tr>
                        <td>mark</td>
                        <td>Defines marked/highlighted text.</td>
                    </tr>
                    <tr>
                        <td>nav</td>
                        <td>Defines navigation links.</td>
                    </tr>
                    <tr>
                        <td>section</td>
                        <td>A section is a thematic grouping of content, typically with a heading.</td>
                    </tr>
                    <tr>
                        <td>summary</td>
                        <td>Defines a visible heading for a <em>details</em> element</td>
                    </tr>
                    <tr>
                        <td>time</td>
                        <td>Defines a date/time/time duration. Comes with <strong>datetime</strong> attribute, that indicates the time and/or date of the element and must be in a correct format. <br/>
                        <code>
                        TIME: &lt;time datetime="20:00"&gt;20:00&lt;/time&gt; <br/>
                        DATE: &lt;time datetime="2011-11-18"&gt;18th Nove,2011&lt;/time&gt; <br/>
                        DURATION: &lt;time datetime="PT2H30M"&gt;2h 30m&lt;/time&gt;.
                        </code> <br/>
                        If the element does not have a datetime attribute, it must not have any element descendants, and the datetime value is the element’s child text content. <br/>
                        <small> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time" className="post__link">MDN web docs accepted formats of datetime attribute.</a></small>
                        </td>
                    </tr>

                  
                </table>
            
            </section>
           <section className="post__section">
           <h3 className="post__heading">Semantic Code Best Practices.</h3>
           <ul className="post__list">
               <li>To ensure <strong>HTML validity</strong> nest elements accordingly to their specifications with complete start and end tags, don not duplicte attributes and keep all IDs unique.</li>
              
               <li><strong>Lang Tag.</strong> Provide a language tag (&lt;html lang="en"&gt;) on every page. Wrap text in the same tag when refering to a language different to the page language.</li>
               <li><strong>Page Title.</strong> Provide a descriptive page title that distinguishes it from other pages in format <span className="color-themed--primary">PAGE NAME -SITE NAME</span>.</li>
               <li><strong>Hedings.</strong> Break up content into logical chunks and precede each area of content with a descriptive heading. There should be only one h1 heading. Heading must be hierarchically ordered. Provide designs that use labels, controls, status indicators, and other UI elements consistently across all pages. Ensure that the HTML content in the DOM is in a logical order (visually from left-to-right and top-to-bottom).</li>
               <li><strong>Emphasized Text.</strong> Use <em>strong</em> and <em>em </em> tags to ensure that the block of text is stressed.</li>
               <li>For lists, use list tags <em>ul, ol</em> and <em>li</em>. The menu items are structured in HTML as an unordered list. In hierarchical menus (menus within menus), use unordered lists within unordered lists.</li>
               <li><strong className="color-themed--primary">Use BUTTON for elements that perform a within-page function and LINKS for elements that load a new page.</strong> </li>
               <li><strong>Links.</strong> Ensure that link text accurately describes the destination of the link. Link text must not be empty. Avoid using ambiguous link names, such as "Click Here" or "More". Ensure links are underlined. Otherwise provide high contrast (3:1 contrast ratio) between link and non-linked text. Provide a method to skip the page header and navigation menus and go straight to the content, through a hidden "skip to main content" or "skip navigation" link at the top of the page.</li> 
               <li><strong>Images.</strong> To display decorative or non-meaningful images, such as icons and backgrounds, use CSS methods. Use the <em>img</em> tag ONLY to show 'content' images, such as photos or illustrations, that are meaningful to the content. An <em>alt property</em> must be present on all img tags. Purely decorative images should use null alt text (alt=""). You can also provide an onscreen text description (using the HTML5 tag figcaption) for charts and other illustrations. </li>
               <li><strong>Tables.</strong> For tabular data use proper table markup including scope attributes. For table headers using colspan or rowspan, use scope="colgroup/rowgroup". Do NOT use HTML table elements for positional layout.</li>
               <li><strong>Forms.</strong> Provide an accessible name to all fields by using a <em>label</em> tag with a "for" attribute that references the <em>input</em> ID. Ensure that error messages are properly connected with their associated form fields. Provide a description for groups of related form elements by using  <em>fieldset</em> and <em> legend </em>tags. Ensure that all error text is clearly marked as such with a heading, "Error:", or by use of an error symbol.</li>
               <li><strong>ARIA.</strong> Avoid custom ARIA elements and use standard HTML controls and elements, such as <em>input, select, button</em>. If you use ARIA attributes, ensure they are applied correctly on the right elements. <strong>No ARIA is better than bad ARIA.</strong></li>
           </ul>

           <p>For dynamicly created content content, make sure that the content directly follows the activating element in the DOM (such as a hide/show dropdown) and that content changes, status messages, and system state changes are announced to assistive technology. </p>
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
