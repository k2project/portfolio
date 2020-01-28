import React from 'react';


const accessibility_links={
    id:'9',
    featured:false,
    title:'Links',
    subtitle:'Web Accesibility Best Practices',
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
                    Hypertext links are one of the most basic elements of HTML, therfore making them accessible should be one of the most basic and most important aspects of web accessibility. Some types of links are more accessible than others, and some types of links are completely inaccessible to people with certain types of disabilities. Because links are so basic to the functionality of web content, inaccessible links are one of the most severe barriers to overall accessibility.
                </p>
            </section>
            <section className="post__section">
                <h3 className="post__heading">Links Attributes</h3>
                <div className="post__card">
                    <table className="post__table">
                        <tr>
                            <th>Attribute</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>href</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className="post__section">
                <h3 className="post__heading">Links Accessibility Best Practices</h3>
                <ul className="post__list">
                    <li><b>Use good link's text.</b> Links should make sense out of context. Avoid phrases such as "click here", "more", "click for details".</li>
                    <li><b>Links should never be empty! </b> Their text should be as concise as possible without sacrificing the meaning.</li>
                    <li>Place the distinguishing information of links at the beginning of a link. Don't put extra information first, like "Link opens in a new window: Products." Instead, say "Products (opens in a new window)". Users also should generally be alerted to links that lead to non-HTML resources, such as PDF files, Word files, PowerPoint files, egz. "Application Form (PDF)"</li>
                     <li>Links do not need to include "link" in the link text. Screen readers generally inform users that a piece of text (or a graphic) is a link. And with graphics used as links, the alt text does not need to say "link" neither. </li>
                     <li>Use human-readable text instead of the URL as they are more screen-reader friendly.</li>
                     <li><span className="color--red">LINKS WITH IMAGES.</span> <b>Images that are the only thing within a link MUST have alternative text.</b> Otherwise a screen reader may read the image file name or the URL being linked to. The alternative text should convey the content of the image and the function of the link, which in most cases are the same. However, sometimes it may require more text (egz., alt="Chart showing 10% sales increase over the last decade with link to more sales data.").</li>
                     <li><span className="color--red">LINKS APPEARANCE.</span> <b>Links should look like links, and nothing else should.</b> Browsers underline hypertext links by default. Without underlining, the links should be designed so it is apparent that the user can click on them to perform an action. According to WCAG 2.0 <i>the link text must have a 3:1 contrast ratio from the surrounding non-link text and must present a "non-color designator" (typically the introduction of the underline) on both mouse hover and keyboard focus. To ansure the same visual presentation of link for both keyboard and mouse user always use a:hover and a:focus.</i></li>
                    <li>Steer clear of creating links that go nowhere, such as dropdown menu on mouse action.
                        <span className="post__card">
                            <code>&lt;a href="#" onmouseover="dropdownmenu()" &gt; Submenu &lt;/a&gt;</code>
                        </span>
                     </li>
                      <li><b>Avoid using JavaScript event handlers that do not permit keyboard access.</b> <br/> <i>In most browsers, the "TAB" key allows users to jump from link to link, and the "ENTER" key allows users to select a link. </i></li>

                </ul>
            </section>
            <section className="post__section"></section>
        </article>
    ),

}
export default accessibility_links;
