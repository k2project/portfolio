import React from 'react';
import oocss from './../../media/blog/oocss.png';


const post5={
    id:'5',
    cls:'methodology',
    featured:false,
    title:'OOCSS.',
    subtitle:'CSS Methodologies.',
    date:'2019-11-13',
    image:{
        path:'css_methodology.png',
        position:'right center '
    },
    tags:['Coding'],
    body:(<div className="Post_body">

        <p className="Post_subtitle">OOCSS (Object Oriented CSS)</p>
        <p>Developed by Nicole Sullivan in 2008, the key concepts of OOCSS includes CSS object identification, separation of structure and visual styles, and avoiding location-based styles. It aims to make CSS modular and object-based. In a nutshell, there are two main principles of OOCSS:
        </p>
        <p>
            <span className="Post__tab">
                <b>1. Separate Structure and Skin</b>, <br/>
                <b>2. Separate Container and Content</b>.
            </span>
        </p>

        <p>The structure consists of the instructions for how things are laid out (eg.height, width, margins, padding and overflow), and the skin defines what the layout looks like (eg. colours, fonts, shadows and gradients). This allows custom skinning to be applied onto multiple page elements without affecting the structure and is also useful for designing components that can be moved around the layout with ease. </p>

        <p>Separating the container from its content means basically avoidance of using child selectors whenever it’s possible. An object should look the same no matter where you put it.  When customizing any unique page elements like anchor links, headers, blockquotes, or unordered lists, you should give them unique classes rather than descendant selectors. Use 'h2.sidebar' rather than '.sidebar h2' to write clean OOCSS.</p>

        <p className="Post_subtitle">OOCSS best practise.</p>
        <ul className="Post__list">
            <li>Work with classes instead of IDs for styling. Use IDs for JavaScript targeting only.</li>
            <li>Try to abstain from multi-level descendant class specificity unless needed.</li>
            <li>Define unique styles with repeatable classes.</li>
            <li>Extend elements with targeted classes rather than parent classes.</li>
            <li>Organize your stylesheet into sections, consider adding a table of contents.</li>

        </ul>

        <p className="Post_subtitle">OOCSS & SASS — a match made in heaven!</p>
        <p>If you are familiar with Sass, use placeholders as objects, and define classes formed only by merging them through @extend. This will result in an incredibly DRY CSS code. </p>
        <div className="Post__codeImg">
            <img src={oocss} alt="code example"/>
            <div className="Post__codeImg_desc">Image by Ben Marshall</div>
        </div>

        {/* <p className="Post_subtitle">OOCSS Pros and Cons.</p>
        <div className="Post__table_2clms">
            <div>
                <ul className="Post__table_list">
                    <li><span className="Post__check color_green">&#10004;</span><b>Site Speed.</b> Cutting down on repetition helps applications run faster. </li>
                    <li><span className="Post__check color_green">&#10004;</span><b>Scalability.</b> OOCSS allows you to freely mix and re-apply classes on different elements without much regard for their context.</li>
                    <li><span className="Post__check color_green">&#10004;</span><b>Efficiency.</b> Having fewer blocks of code makes CSS easier to scan, which makes editing and updating less of a hassle.</li>
                    <li><span className="Post__check color_green">&#10004;</span><b>Maintainability.</b> Adding or rearranging HTML markups no longer requires you to rethink your entire CSS flow.</li>
                    <li><span className="Post__check color_green">&#10004;</span><b>Readability.</b> Other programmers should be able to quickly understand your CSS file structure.</li>

                </ul>
            </div>

            <div>
                <ul className="Post__table_list">
                    <li><span className="Post__cross red color_red">&#10008;</span>Increases the Number of Classes Added to an Element. </li>
                    <li><span className="Post__cross red color_red">&#10008;</span>May Be Overkill for Small Projects.</li>
                    <li><span className="Post__cross red color_red">&#10008;</span>Requires a Learning Curve.</li>

                </ul>

            </div>
        </div> */}



        <div className="Post__references">
            <div className="Post__references_title"><b>References:</b></div>
            <ol>
                <li>
                    <a href="https://codetheory.in/an-overview-of-oocss-bem-smacss/" target="_blank" rel="noopener noreferrer">
                         Rishabh - <b>An Overview of OOCSS, BEM, SMACSS (CSS Methodologies/Practices) with References.</b>
                    </a>
                </li>
                <li>
                    <a href="https://www.keycdn.com/blog/oocss" target="_blank" rel="noopener noreferrer">
                        Cody Arsenault  - <b>OOCSS - The Future of Writing CSSs.</b>
                    </a>
                </li>
                <li>
                    <a href="https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/" target="_blank" rel="noopener noreferrer">
                        Louis Lazaris  - <b>An Introduction To Object Oriented CSS (OOCSS).</b>
                    </a>
                </li>
                <li>
                    <a href="https://benmarshall.me/oocss-object-oriented-css/2/" target="_blank" rel="noopener noreferrer">
                        Ben Marshall  - <b>OOCSS — The best way to code reusable CSS in an easy way!</b>
                    </a>
                </li>

            </ol>

        </div>


    </div>),

}
export default post5;
