import React from 'react';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';
import Code from './../../components/Code/Code';


const accessibility_semantic={
    id:'12',
    featured:true,
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

                <DocumentTags/>
                <ContentSectioning/>
                <TextContent/>
                <InlineTextSemantics/>
                <MediaContent/>
                <TableContent/>
                <FormContent/>
                <InteractiveElements/>
                <DeprecatedElements/>

            </section>
            
           <section className="post__section">
           <h3 className="post__heading">Semantic Code Best Practices.</h3>
           <ul className="post__list">
               <li>To ensure <b>HTML validity</b> nest elements accordingly to their specifications with complete start and end tags, don not duplicate attributes and keep all IDs unique.</li>
              
               <li><b>Lang Tag.</b> Provide a language tag (&lt;html lang="en"&gt;) on every page. Wrap text in the same tag when referring to a language different to the page language.</li>
               <li><b>Page Title.</b> Provide a descriptive page title that distinguishes it from other pages in format <span className="color-themed--primary">PAGE NAME -SITE NAME</span>.</li>
               <li><b>Headings.</b> Break up content into logical chunks and precede each area of content with a descriptive heading. There should be only one h1 heading. Heading must be hierarchically ordered. Provide designs that use labels, controls, status indicators, and other UI elements consistently across all pages. Ensure that the HTML content in the DOM is in a logical order (visually from left-to-right and top-to-bottom).</li>
               <li><b>Emphasized Text.</b> Use <i>em </i>to indicate stress emphasis. Use <i>strong</i> to indicate stronger importance. Use <i>mark</i> to indicate relevance. Use  <i>cite</i> to mark the name of a work, such as a book, play, or song. Use <i>dfn</i> to mark the defining instance of a term. Use <i>i</i> for technical terms, foreign language phrases, or fictional character thoughts, etc. Use <i>b</i> to draw attention to the text. </li>
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
        title:'Content Sectioning Tags',
        subtitle:null,
        styling:'bg-secondary',
    }
    return (
        <AccordionWidget data={headingInfo}>
                <p>Content sectioning elements allow you to organize the document content into logical pieces. Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.</p>
            <table className="post__table">
                    <tr>
                        <th>Element</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>address</td>
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
    )
}

function DocumentTags(){
    const headingInfo={
        heading:5,
        title:'Document\'s Main Tags',
        subtitle:null,
        styling:'bg-secondary',
    }
    return (
        <AccordionWidget data={headingInfo}>
            <p>These tags mainly contain information about the page, which includes styles, scripts and data to help software (search engines, browsers, etc.) </p>
             <table className="post__table">
                <tr>
                    <th>Element</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>html</td>
                    <td>The HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element. <br/>Providing a <b>lang</b> attribute with a valid IETF identifying language tag on the HTML element will help screen reading technology determine the proper language to announce.</td>
                </tr>
                <tr>
                    <td>meta</td>
                    <td>Represents metadata that cannot be represented by other HTML meta-related elements, like <i>base, link, script, style</i> or <i>title</i>.
                    <Code>
                        <code>
                            &lt;meta charset="utf-8"&gt;&lt;/meta&gt; 
                        </code>
                        <code>
                            &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;&lt;/meta&gt; 
                        </code>
                        <code>
                            &lt;meta name="robots" content="index, follow"&gt; &lt;/meta&gt; 
                        </code>
                        <code>
                            &lt;meta name="author/description/keywords/robots/googlebot/slurp" content=""&gt;&lt;/meta&gt;
                        </code>
                    </Code>
                    </td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>Defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored. The contents of a page title can have significant implications for search engine optimization (SEO).  Use a descriptive, as unique as possible phrase (55-60 chars). <br/>
                    <strong>For accessibility it is important to provide a title value that describes the page's purpose and update it to reflect significant page state changes.</strong> </td>
                </tr>
            </table>
        </AccordionWidget>
    )
}
function TextContent(){
    const headingInfo={
        heading:5,
        title:'Text Content Tags',
        subtitle:null,
        styling:'bg-secondary',
    }
    return (
        <AccordionWidget data={headingInfo}>
            <p>Important for accessibility and SEO, these elements identify the purpose or structure of that content. </p>
             <table className="post__table">
                <tr>
                    <th>Element</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>blockquote, <br/>q</td>
                    <td>Indicates that the enclosed text is an extended quotation block (for inline and shorter quotes use <i>q</i> tag). A URL for the source of the quotation may be given using the <b>cite</b> attribute. <br/>
                    <Code>
                        <code>&lt;blockquote cite="https://www..."&gt; </code>
                        <code className="code__indent"> ---Quote goes here---- </code>
                        <code className="code__indent">&lt;footer&gt;—Author, &lt;cite&gt;Quoted work&lt;/cite&gt;&lt;/footer&gt;</code>
                        <code>&lt;/blockquote&gt;</code>
                    </Code>
                    </td>
                </tr>
                <tr>
                    <td>div</td>
                    <td>The generic container for flow content. It has no effect on the content or layout until styled using CSS. <strong>The DIV element should be used only when no other semantic element is appropriate.</strong></td>
                </tr>
                <tr>
                    <td>dl, <br/>dt, <br/>dd</td>
                    <td>
                    Provides the description, definition,or value for the preceding term in a description list. 
                    <Code>
                        <code>
                            &lt;dl&gt;
                        </code>
                            <code className="code__indent">
                                &lt;dt&gt; Owlman &lt;/dt&gt;
                            </code>
                            <code className="code__indent">
                                &lt;dd&gt; A giant owl-like creature. &lt;/dd&gt; 
                            </code>
                        <code>
                            &lt;/dl&gt;
                        </code>
                    </Code> 
                    </td>
                </tr>
                <tr>
                    <td>figure, <br/> figcaption</td>
                    <td>FIGURE element represents self-contained content, potentially with an optional caption, which is specified using the FIGCAPTION element. The figure, its caption, and its contents are referenced as a single unit. <br/>
                    It usually is an image, illustration, diagram, code snippet, quote etc., that is referenced in the main flow of a document, but that can be moved to another part of the document or to an appendix without affecting the main flow.</td>
                </tr>
                <tr>
                    <td>hr</td>
                    <td>Represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.</td>
                </tr>
                <tr>
                    <td>ol, <br/> ul, <br/>li</td>
                    <td> Elements used to represent ordered and unordered lists and their elements.</td>
                </tr>
                <tr>
                    <td>p</td>
                    <td>Represents a paragraph. <br/>Using empty p elements to add space between paragraphs is problematic for people who navigate with screen-reading technology. Screen readers may announce the paragraph's presence, but not any content contained within it, which confuses and frustrates the users.</td>
                </tr>
                <tr>
                    <td>pre</td>
                    <td>Represents preformatted text which is to be presented exactly as written in the HTML file.</td>
                </tr>
            </table>
        </AccordionWidget>
    )
}
function InlineTextSemantics(){
    const headingInfo={
        heading:5,
        title:'Inline Text Semantics',
        subtitle:null,
        styling:'bg-secondary',
    }
    return (
        <AccordionWidget data={headingInfo}>
            <p>Use the HTML inline text semantic to define the meaning, structure, or style of a word, line, or any arbitrary piece of text.</p>
             <table className="post__table">
                <tr>
                    <th>Element</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>a</td>
                    <td>Creates a hyperlink to web pages,files, email addresses, locations in the same page, or anything else a URL can address.</td>
                </tr>
                <tr>
                    <td>abbr</td>
                    <td>Represents an abbreviation or acronym; the optional title attribute can provide an expansion or description for the abbreviation. 
                    <Code>
                        <code>
                        &lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt;
                        </code>
                    </Code>
                    </td>
                </tr>
                <tr>
                    <td>b</td>
                    <td>Used to draw the reader's attention to the element's contents, which are not otherwise granted special importance.</td>
                </tr>
                <tr>
                    <td>cite</td>
                    <td>Used to describe a reference to a cited creative work, and must include the title of that work. </td>
                </tr>
                <tr>
                    <td>code</td>
                    <td>Displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. To represent multiple lines of code, wrap the CODE element within a PRE element. The CODE element by itself only represents a single phrase of code or line of code.
                    <Code>
                        <code>&lt;figure&gt;</code>
                            <code className="code__indent">&lt;figcaption&gt; Code Example &lt;/figcaption&gt;</code>
                            <code className="code__indent">&lt;pre&gt;</code>
                            <code className="code__indent-2">&lt;code&gt; --- Your code goes here ---&lt;/code&gt;</code>
                            <code className="code__indent-2">&lt;code&gt; --- Your code goes here ---&lt;/code&gt;</code>
                            <code className="code__indent">&lt;/pre&gt;</code>
                        <code>&lt;/figure&gt;</code>
                    </Code>
                    </td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>
                        Links a given content with a machine-readable translation. If the content is time- or date-related, the TIME element must be used.
                        <Code>
                            <code>&lt;ul&gt;</code>
                            <code className="code__indent">&lt;li&gt;&lt;data value="444"&gt;Product (value ref to its number)&lt;/data&gt;&lt;/li&gt;</code>
                            <code>&lt;/ul&gt;</code>
                        </Code>
                    </td>
                </tr>
                <tr>
                    <td>del, <br/> ins</td>
                    <td>DEL represents a range of text that has been deleted from a document and the INS element can be used for the opposite purpose: to indicate text that has been added to the document.</td>
                </tr>
                <tr>
                    <td>dfn</td>
                    <td>Indicates the term being defined within the context of a definition phrase or sentence. The P element, the DT/DD pairing, or the SECTION element which is the nearest ancestor of the DFN is considered to be the definition of the term.</td>
                </tr>
                <tr>
                    <td>em, <br/>strong</td>
                    <td>Marks text that has stress emphasis.</td>
                </tr>
                <tr>
                    <td>i</td>
                    <td><strong>Indicates text with different semantic meaning than the surrounding text.</strong> The EM element represents stress emphasis of its contents, while the I element represents text that is set off from the normal prose, such a foreign word, fictional character thoughts, or when the text refers to the definition of a word instead of representing its semantic meaning. (The title of a work, such as the name of a book or movie, should use CITE.)</td>
                </tr>
                <tr>
                    <td>kbd</td>
                    <td>Represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.</td>
                </tr>
                <tr>
                    <td>mark</td>
                    <td>Represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context. <em>The presence of the mark element is not announced by most screen reading technology in its default configuration.</em></td>
                </tr>
                <tr>
                    <td>ruby, <br/>rb, <br/>rt, <br/> rtc, <br/>rp</td>
                    <td>Ruby annotations are for showing pronunciation of East Asian characters.</td>
                </tr>
                <tr>
                    <td>s</td>
                    <td>Renders text with a strikethrough, or a line through it. Use the this element to represent things that are no longer relevant or no longer accurate. However, it is not appropriate when indicating document edits; for that, use the DEL and INS elements, as appropriate. <br/><em>The presence of the s element is not announced by most screen reading technology in its default configuration.</em></td>
                </tr>
                <tr>
                    <td>samp</td>
                    <td>Used to enclose inline text which represents sample (or quoted) output from a computer program.</td>
                </tr>
                <tr>
                    <td>small</td>
                    <td>Represents side-comments and small print, like copyright and legal text, independent of its styled presentation.</td>
                </tr>
                <tr>
                    <td>span</td>
                    <td>A generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purpose.</td>
                </tr>
               
                <tr>
                    <td>sub, <br/>sup</td>
                    <td>Specifies inline text which should be displayed as subscript/superscript for solely typographical reasons.</td>
                </tr>
                <tr>
                    <td>time</td>
                    <td>
                        Defines a date/time/time duration. Comes with <b>datetime</b> attribute, that indicates the time and/or date of the element and must be in a correct format. <br/>
                        If the element does not have a datetime attribute, it must not have any element descendants, and the datetime value is the element’s child text content. <br/>
                        <Code figcaption ={<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time" className="post__link">MDN web docs accepted formats of datetime attribute.</a>}>
                            <code>
                                TIME: &lt;time datetime="20:00"&gt;20:00&lt;/time&gt;
                            </code>
                            <code>
                                DATE: &lt;time datetime="2011-11-18"&gt;18th Nove,2011&lt;/time&gt;
                            </code>
                            <code>
                                DURATION: &lt;time datetime="PT2H30M"&gt;2h 30m&lt;/time&gt;
                            </code>
                        </Code>

                    </td>
                </tr>
                <tr>
                    <td>u</td>
                    <td>Mark text as having some form of non-textual annotation applied, eg. to mark spelling mistakes in text. Most of the time, you actually don't want to use it ( avoid it for styling ).</td>
                </tr>
                <tr>
                    <td>var</td>
                    <td>Represents the name of a variable in a mathematical expression or a programming context.</td>
                </tr>
                <tr>
                    <td>wbr</td>
                    <td>Represents a word break opportunity for browser when dealing with long words.</td>
                </tr>
            </table>
        </AccordionWidget>
    )
}
function MediaContent(){
    const headingInfo={
        heading:5,
        title:'Media And Embedded Content',
        subtitle:null,
        styling:'bg-secondary',
    }
    return (
        <AccordionWidget data={headingInfo}>
             <table className="post__table">
                <tr>
                    <th>Element</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>area</td>
                    <td></td>
                </tr>
                <tr>
                    <td>audio</td>
                    <td></td>
                </tr>
                <tr>
                    <td>canvas</td>
                    <td></td>
                </tr>
                <tr>
                    <td>embed</td>
                    <td></td>
                </tr>
                <tr>
                    <td>iframe</td>
                    <td></td>
                </tr>
                <tr>
                    <td>img</td>
                    <td></td>
                </tr>
                <tr>
                    <td>map</td>
                    <td></td>
                </tr>
                <tr>
                    <td>noscript</td>
                    <td></td>
                </tr>
                <tr>
                    <td>object</td>
                    <td></td>
                </tr>
                <tr>
                    <td>param</td>
                    <td></td>
                </tr>
                <tr>
                    <td>picture</td>
                    <td></td>
                </tr>
                <tr>
                    <td>script</td>
                    <td></td>
                </tr>
                <tr>
                    <td>source</td>
                    <td></td>
                </tr>
                <tr>
                    <td>track</td>
                    <td></td>
                </tr>
                <tr>
                    <td>video</td>
                    <td></td>
                </tr>
            </table>
        </AccordionWidget>
    )
}
function TableContent(){
    const headingInfo={
        heading:5,
        title:'Table Content Tags',
        subtitle:null,
        styling:'bg-secondary',
    }
    return (
        <AccordionWidget data={headingInfo}>
             <table className="post__table">
                <tr>
                    <th>Element</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>caption</td>
                    <td></td>
                </tr>
                <tr>
                    <td>col</td>
                    <td></td>
                </tr>
                <tr>
                    <td>colgroup</td>
                    <td></td>
                </tr>
                <tr>
                    <td>table</td>
                    <td></td>
                </tr>
                <tr>
                    <td>tbody</td>
                    <td></td>
                </tr>
                <tr>
                    <td>td</td>
                    <td></td>
                </tr>
                <tr>
                    <td>tfoot</td>
                    <td></td>
                </tr>
                <tr>
                    <td>th</td>
                    <td></td>
                </tr>
                <tr>
                    <td>thead</td>
                    <td></td>
                </tr>
                <tr>
                    <td>tr</td>
                    <td></td>
                </tr>
            </table>
        </AccordionWidget>
    )
}
function FormContent(){
    const headingInfo={
        heading:5,
        title:'Forms Content Tags',
        subtitle:null,
        styling:'bg-secondary',
    }
    return (
        <AccordionWidget data={headingInfo}>
             <table className="post__table">
                <tr>
                    <th>Element</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>button</td>
                    <td></td>
                </tr>
                <tr>
                    <td>datalist</td>
                    <td></td>
                </tr>
                <tr>
                    <td>fieldset</td>
                    <td></td>
                </tr>
                <tr>
                    <td>form</td>
                    <td></td>
                </tr>
                <tr>
                    <td>input</td>
                    <td></td>
                </tr>
                <tr>
                    <td>label</td>
                    <td></td>
                </tr>
                <tr>
                    <td>legend</td>
                    <td></td>
                </tr>
                <tr>
                    <td>meter</td>
                    <td></td>
                </tr>
                <tr>
                    <td>optgroup</td>
                    <td></td>
                </tr>
                <tr>
                    <td>option</td>
                    <td></td>
                </tr>
                <tr>
                    <td>output</td>
                    <td></td>
                </tr>
                <tr>
                    <td>progress</td>
                    <td></td>
                </tr>
                <tr>
                    <td>select</td>
                    <td></td>
                </tr>
                <tr>
                    <td>textarea</td>
                    <td></td>
                </tr>
            </table>
        </AccordionWidget>
    )
}
function InteractiveElements(){
    const headingInfo={
        heading:5,
        title:'Interactive Elements',
        subtitle:null,
        styling:'bg-secondary',
    }
    return (
        <AccordionWidget data={headingInfo}>
             <table className="post__table">
                <tr>
                    <th>Element</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>details</td>
                    <td></td>
                </tr>
                <tr>
                    <td>dialog</td>
                    <td></td>
                </tr>
                <tr>
                    <td>menu</td>
                    <td></td>
                </tr>
                <tr>
                    <td>summary</td>
                    <td></td>
                </tr>
            </table>
        </AccordionWidget>
    )
}
function DeprecatedElements(){
    const headingInfo={
        heading:5,
        title:'Obsolete And Deprecated Elements',
        subtitle:null,
        styling:'bg-secondary',
    }
    return (
        <AccordionWidget data={headingInfo}>
            <p>The old HTML elements which are deprecated and should not be used.</p>
            <ul className="post__list post__list--tags">
                <li>acronym</li>
                <li>applet</li>
                <li>basefont</li>
                <li>bgsound</li>
                <li>big</li>
                <li>blink</li>
                <li>center</li>
                <li>command</li>
                <li>content</li>
                <li>dir</li>
                <li>element</li>
                <li>font</li>
                <li>frame</li>
                <li>frameset</li>
                <li>image</li>
                <li>isindex</li>
                <li>keygen</li>
                <li>listing</li>
                <li>marquee</li>
                <li>menuitem</li>
                <li>multicol</li>
                <li>nextid</li>
                <li>nobr</li>
                <li>noembed</li>
                <li>noframes</li>
                <li>shdow</li>
                <li>spacer</li>
                <li>strike</li>
                <li>tt</li>
                <li>xmp</li>
            </ul>
        </AccordionWidget>
    )
}