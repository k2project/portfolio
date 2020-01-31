import React from 'react';


const accessibility_links={
    id:'9',
    featured:false,
    title:'Links',
    subtitle:'Web Accessibility Best Practices',
    date:'2020-01-28',
    image:{
        path:'accessibility.jpg',
        position:'right center '
    },
    tags:['Coding','Accessibility'],
    body:(
        <article className="post__body">
            <section className="post__section">

                <p>
                    Hypertext links are one of the most basic elements of HTML, therefore making them accessible should be one of the most basic and most important aspects of web accessibility. Some types of links are more accessible than others, and some types of links are completely inaccessible to people with certain types of disabilities. Because links are so basic to the functionality of web content, inaccessible links are one of the most severe barriers to overall accessibility.
                </p>
            </section>
            <section className="post__section">
                <h3 className="post__heading">Links Attributes.</h3>
                <table className="post__table">
                    <tr>
                        <th>Attribute</th>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>href</td>
                        <td>url</td>
                        <td>Linked document, resource, or location.</td>
                    </tr>
                    <tr>
                        <td>hreflang</td>
                        <td></td>
                        <td>Specifies the language of the linked resource.</td>
                    </tr>
                    <tr>
                        <td>download</td>
                        <td></td>
                        <td>Directs the browser to download the linked resource rather than opening it.</td>
                    </tr>
                    <tr>
                        <td>target</td>
                        <td>
                            _blank <br/>
                            _parent <br/>
                            _self <br/>
                            _top <br/>
                            frame name
                        </td>
                        <td>Specifies the context in which the linked resource will open.</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>text</td>
                        <td>Defines the title of a link, which appears to the user as a tooltip.</td>
                    </tr>
                    <tr>
                        <td>media</td>
                        <td>
                            print <br/>
                            screen <br/>
                            aural <br/>
                            braille <br/>
                        </td>
                        <td>Allows the user agent to pick the best adapted one for the device it runs on</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>
                            any <br/>
                            16x16 <br/>
                            16x16 32x32 64x64 <br/>
                        </td>
                        <td>Specifies the sizes of icons for visual media. Can be used for favicons. Multiple values can be provided, as long as they're separated by a space. </td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>image/png</td>
                        <td>The MIME type of content at the link destination </td>
                    </tr>
                    <tr>
                        <td>rel</td>
                        <td>
                            stylesheet <br/>
                            noopener* <br/>
                            noreferrer** <br/>
                            icon <br/>
                        </td>
                        <td>Denotes how the item being linked to is related to the containing document.</td>
                    </tr>
                    <tr>
                        <td>tabindex</td>
                        <td>number (-1, 0, int)</td>
                        <td>Defines an explicit tab order.Link with tabindex value of "-1" can't be reached by the keyboard.</td>
                    </tr>
                </table>
                <p>
                    <small>*Instructs the browser to open the link without granting the new browsing context access to the document that opened it — by not setting the Window.opener property on the opened window (it returns null).This is especially useful when opening untrusted links.</small><br/>
                    <small>**Prevents the browser, when navigating to another page, to send this page address, or any other value, as referrer via the Referer: HTTP header.</small>
                </p>
            </section>
            <section className="post__section">
                <h3 className="post__heading">Links Accessibility Best Practices.</h3>
                <ul className="post__list">
                    <li><b>Use good link's text.</b> Links should make sense when reading out of context. Avoid phrases such as "click here", "more", "click for details".</li>
                    <li><b>Links should never be empty! </b> Their text should be as concise as possible without sacrificing the meaning.</li>
                    <li>Place the distinguishing information of links at the beginning of a link. Don't put extra information first, like "Link opens in a new window: Products." Instead, say "Products (opens in a new window)". Users also should generally be alerted to links that lead to non-HTML resources, such as PDF files, Word files, PowerPoint files, eg. "Application Form (PDF)"</li>
                     <li>Links do not need to include "link" in the link text. Screen readers generally inform users that a piece of text (or a graphic) is a link. And with graphics used as links, the alt text does not need to say "link" neither. </li>
                     <li>Use human-readable text instead of the URL as they are more screen-reader friendly.</li>
                     <li><span className="color--red">LINKS WITH IMAGES.</span> <b>Images that are the only thing within a link MUST have alternative text.</b> Otherwise a screen reader may read the image file name or the URL being linked to. The alternative text should convey the content of the image and the function of the link, which in most cases are the same. However, sometimes it may require more text (eg., alt="Chart showing 10% sales increase over the last decade with link to more sales data.").</li>
                     <li><span className="color--red">LINKS APPEARANCE.</span> <b>Links should look like links, and nothing else should.</b> Browsers underline hypertext links by default. Without underlining, the links should be designed so it is apparent that the user can click on them to perform an action. According to WCAG 2.0 <i>the link text must have a 3:1 contrast ratio from the surrounding non-link text and must present a "non-color designator" (typically the introduction of the underline) on both mouse hover and keyboard focus. To ansure the same visual presentation of link for both keyboard and mouse user always use a:hover and a:focus.</i></li>
                    <li>Steer clear of creating links that go nowhere, such as dropdown menu on mouse action.
                        <span className="card">
                            <code>&lt;a href="#" onmouseover="dropdownmenu()" &gt; Submenu &lt;/a&gt;</code>
                        </span>
                     </li>
                      <li><b>Avoid using JavaScript event handlers that do not permit keyboard access.</b> <br/> <i>In most browsers, the "TAB" key allows users to jump from link to link, and the "ENTER" key allows users to select a link. </i></li>
                      <li><span className="color--red">LINKS ON FOCUS.</span> Use CSS styling for keyboard users to clearly mark the links when in focus ( a::focus ).</li>

                </ul>
            </section>
            <section className="post__section">
                <p className="post__heading">"Skip Navigation" Links.</p>
                <p>Most of the time the main content is not usually the first thing on a web page. Keyboard and screen reader users must navigate a long list of elements before ever arriving at the main content. Without some sort of system for bypassing the long list of links, some users are at a huge disadvantage. </p>
                <p>By providing a link at the top of the page which jumps the user down to an anchor or target at the beginning of the main content, we give screen reader and keyboard users the same capability of going directly to the main content that sighted mouse users take for granted. </p>
            </section>
            <section className="post__section">
                <p className="post__heading">"Skip Navigation" Links.</p>
                <p>Most of the time the main content is not usually the first thing on a web page. Keyboard and screen reader users must navigate a long list of elements before ever arriving at the main content. Without some sort of system for bypassing the long list of links, some users are at a huge disadvantage. </p>
                <p>By providing a link at the top of the page which jumps the user down to an anchor or target at the beginning of the main content, we give screen reader and keyboard users the same capability of going directly to the main content that sighted mouse users take for granted. </p>
            </section>
            <section className="post__section">
                <p className="post__heading">Text For Screen Readers Only.</p>
                <div className="card">
                    <p>TEXT ONLY FOR SCREEN READERS STYLING:</p>
                    <code>
                        border: 0; <br/>
                        clip: rect(1px, 1px, 1px, 1px); <br/>
                        clip: rect(1px 1px 1px 1px); //IE6 and IE7 <br/>
                        clip-path: inset(50%); <br/>
                        height: 1px; <br/>
                        margin: -1px; <br/>
                        overflow: hidden; <br/>
                        padding: 0; <br/>
                        position: absolute; <br/>
                        width: 1px; <br/>
                        word-wrap: normal !important; 
                    </code>
                </div>
                <div className="card">
                    <p>TEXT ONLY FOR SCREEN READERS STYLING <span className="color-themed--primary">ON FOCUS</span>:</p>
                    <code>
                        position: static; <br/>
                        clip: auto !important; <br/>
                        clip-path: none; <br/>
                        display: block; <br/>
                        height: auto; <br/>
                        line-height: normal; <br/>
                        width: auto; <br/>
                        z-index: 100000; <br/>
                        and customised properties for left, right, padding, color, etc.
                    </code>
                </div>
                <ul className="post__list">
                    <li><b>display: none;</b> and <b>visibility: hidden; </b>hide text from screen, but also for a screen reader, so they can’t be used to give extra information to screen reader users.</li>
                    <li>Set width and height to 1 pixel, because some screen readers don’t announce an element with a size of 0 pixels.</li>
                    <li><i>clip</i> is deprecated, but is added to support older browsers that don’t support clip-path yet.</li>
                    <li><i>word-wrap: normal;</i> to avoid screen readers reading the text letter for letter, as the text is placed in a 1 pixel wide space. Many screen reader and browser combinations announce broken words as they would appear visually.</li>
                </ul>
            </section>
            <References/>
        </article>
    ),

}
export default accessibility_links;

function References(){
    return(
        <section className="post__ref">
            <p className="post__ref-title">References:</p>
            <ol className="post__ref-list">
                <li>
                    <a href="https://webaim.org/techniques/hypertext/"> WebAIM - <b>Links and Hypertext</b></a>
                </li>
                <li>
                    <a href="http://web-accessibility.carnegiemuseums.org/content/buttons/"> Studio - <b>Links, Buttons, & Other Clickable Elements</b></a>
                </li>
                <li>
                    <a href="http://www.webaxe.org/proper-use-buttons-links/"> Dennis on WebAxe - <b>Proper Use of Buttons and Links</b></a>
                </li>
                <li>
                    <a href="https://marcysutton.com/links-vs-buttons-in-modern-web-applications"> Marcy Sutton - <b>Links vs. Buttons in Modern Web Applications</b></a>
                </li>
                <li>
                    <a href="https://medium.com/simple-human/but-sometimes-links-look-like-buttons-and-buttons-look-like-links-9b371c57b3d2"> Adam Silver - <b>But sometimes links look like buttons (and buttons look like links)</b></a>
                </li>
            </ol>
        </section>
    )
}
