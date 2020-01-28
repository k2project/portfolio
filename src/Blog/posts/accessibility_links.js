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
                <h3 className="post__heading">Links Accessibility Best Practices</h3>
                <ul className="post__list">
                    <li>Avoid using JavaScript event handlers that do not permit keyboard access. <i>In most browsers, the <b>Tab</b> key allows users to jump from link to link, and the <b>Enter</b> key allows users to select a link. </i></li>
                    <li>Steer clear of creating links that go nowhere, such as dropdown menu on mouse action.
                        <span className="post__card">
                            <code>&lt;a href="#" onmouseover="dropdownmenu()" &gt; Submenu &lt;/a&gt;</code>
                        </span>
                     </li>
                </ul>
            </section>
            <section className="post__section"></section>
        </article>
    ),

}
export default accessibility_links;
