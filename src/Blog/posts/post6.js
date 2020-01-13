import React from 'react';
import smacss from './../../media/blog/smacss.png';


const post6={
    id:'6',
    cls:'methodology',
    featured:false,
    title:'SMACSS.',
    subtitle:'CSS Methodologies.',
    date:'2019-12-15',
    image:{
        path:'css_methodology.png',
        position:'right center '
    },
    tags:['Coding'],
    body:(<div className="Post_body">

        <p className="Post_subtitle">SMACSS ( Scalable and Modular Architecture for CSS )</p>
        <p>Like Object Oriented CSS, SMACSS is an approach to writing css and html with more emphasis placed on using classes. Unlike OOCSS, it doesn’t suggest using classes for everything. It’s fine with IDs and descendent selectors where appropriate. The purpose of this methodology is less code repetition, a more consistent experience, and easier maintenance. Under SMACSS there are 5 general categories of css rules.</p>
        <p>
            <span className="Post__tab">
                1. <b>BASE</b>— These are your defaults (html, body, h1, ul, etc). <br/>
                2. <b>LAYOUT</b>— The page's major sections with <b><i>l- or layout- prefixes</i></b>.  <br/>
                3. <b>MODULE</b>— The reusable modular components of a design. <br/>
                4. <b>STATE</b>— These describe how things look when in a particular state with <b><i>is- prefix </i></b>as in is-active or is-hidden.<br/>
                5. <b>THEME</b>— These define things like a colour scheme or typographic treatment across a site. <br/>

            </span>
        </p>


        <p><b>Base rules</b> are applied directly to elements through element selectors, descendent selectors, child selectors, pseudo-classes, however not the specific class or ID selectors.</p>

        <p>There are major and minor layout components in every design. The <b>layout rules</b> of SMACSS apply to major components (eg.header, sidebar, etc.). Minor components (eg. img, logo, etc.) fall under the<b> module rules</b>. Use ID selectors for major components or classes also where the convention is to prefix the class name with l- or layout-</p>

        <p><b>Module rules</b> are used to style modules which are basically components from BEM or objects from OOCSS. They should be able to be easily moved around and still look the same. Modules just use module name ( .message ) instead of trying to prefix each. Related modules receive a consistent prefix to help organize them with the following class naming convention for children : 'message-alert'.</p>

        <p>To affect the visual appearance of a module or layouts use <b>state rules</b> (eg.'.is-msg-hidden'). In many cases, they are used to override styles from their base module or layout.</p>

        <p><b>Theme rules</b> are similar to state rules in that they describe how layout and modules might look. They would mostly define colours or typography across a site. </p>


        {/* <p className="Post_subtitle">SMACSS best practise.</p>
        <ul className="Post__list">
            <li></li>
        </ul> */}
        <p className="Post_subtitle">File structure with SMACSS</p>
        <div className="Post__codeImg">
            <img src={smacss} alt="code example"/>
        </div>

        {/* <p className="Post_subtitle">SMACSS Pros and Cons.</p>
        <div className="Post__table_2clms">
            <div>
                <ul className="Post__table_list">
                    <li><span className="Post__check color_green">&#10004;</span> </li>
                </ul>
            </div>

            <div>
                <ul className="Post__table_list">
                    <li><span className="Post__cross red color_red">&#10008;</span> </li>
                </ul>

            </div>
        </div> */}



        <div className="Post__references">
            <div className="Post__references_title"><b>References:</b></div>
            <ol>
                <li>
                    <a href="http://smacss.com/" target="_blank" rel="noopener noreferrer">
                         Jonathan Snook - <b>Scalable and Modular Architecture for CSS.</b>
                    </a>
                </li>
                <li>
                    <a href="https://codetheory.in/an-overview-of-oocss-bem-smacss/" target="_blank" rel="noopener noreferrer">
                         Rishabh - <b>An Overview of OOCSS, BEM, SMACSS (CSS Methodologies/Practices) with References.</b>
                    </a>
                </li>
                <li>
                    <a href="https://vanseodesign.com/css/smacss-introduction/" target="_blank" rel="noopener noreferrer">
                         Steven Bradley - <b>An Introduction To SMACSS Guidelines For Writing CSS.</b>
                    </a>
                </li>

            </ol>

        </div>


    </div>),

}
export default post6;
