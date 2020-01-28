import React from 'react';
import bem from './../../media/blog/bem-sass.png';
import bemEg from './../../media/blog/bemEg.png';


const post8={
    id:'8',
    cls:'methodology',
    featured:false,
    title:'BEM',
    subtitle:'CSS Methodologies',
    date:'2020-01-15',
    image:{
        path:'css_methodology.png',
        position:'right center '
    },
    tags:['Coding','CSS Methodology'],
    body:(<div className="Post_body">

        <p className="Post_subtitle">BEM( Blocks, Elements and Modifiers )</p>
        <p>No matter what methodology you choose to use in your projects, you will benefit from the advantages of more structured CSS and UI. Some styles are less strict and more flexible, while others are easier to understand and adapt to a team. BEM seems to fall into the latter category, which explains its popularity, especially amongst the junior web developers.</p>
        <p className="Post_subtitle">How It Works</p>
        <p>
            <span className="Post__tab">
                1. <b>BLOCK</b>— a standalone entity that is meaningful on its own (header, container, menu, checkbox, etc). While blocks can be nested and interact with each other, semantically they remain equal - there is no precedence or hierarchy.
                <div className="Post__card--sml">  <b>.block </b> <br/>
                    class = "button"
                </div>
                2. <b>ELEMENT</b>— a part of a block that has no standalone meaning and is semantically tied to its block (menu title, header logo,etc).
                <div className="Post__card--sml">
                    <b>.block__element </b> <br/>
                    class = "button__icon"
                </div>
                3. <b>MODIFIER</b>— a flag on a block or element. Use them to change appearance or behavior ( disabled, highlighted, checked, fixed, greeen, etc).
                <div className="Post__card--sml">
                    <b>.block--mofifier or .block__element--modifire </b> <br/>
                class = "button button--state-success"
                </div>

            </span>
        </p>
        <p className="Post_subtitle">BEM best practice.</p>
        <ul className="Post__list">
            <li>In BEM everything is a class and nothing is nested, which makes CSS specificity very flat and low.</li>
            <li>
            The primary purpose of BEM methodology is to make the names of CSS selectors as informative and transparent as possible.
            </li>
            <li>BEM names intentionally use double underscores and double hyphens instead of single to separate Block-Element-Modifier. The reason is so that single hyphens can be used as word separators.</li>
            <li>A modifier cannot be used outside of the context of its owner(eg: <s>class="navigation--is-open"</s>).</li>
            <li>If the component has child elements several levels deep, don’t try to represent each level in the class name. BEM is not intended to communicate structural depth (eg: <s>.navigation__item__link</s>). </li>
            <li>If you find yourself consistently modifying elements of the same component together in the same way, then consider adding the modifier to the base of the component and adjusting styles for each child element based on that one modifier (eg: .navigation--is-open .navigation__link ). </li>
        </ul>
        <div className="Post__codeImg">
            <img src={bemEg} alt="code example"/>
        </div>
        <p className="Post_subtitle">BEM ans SASS</p>
        <p></p>
        <div className="Post__codeImg">
            <img src={bem} alt="code example"/>
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
                    <a href="https://css-tricks.com/bem-101/" target="_blank" rel="noopener noreferrer">
                         Robie Rendle - <b>BEM 101</b>
                    </a>
                </li>
                <li>
                    <a href="http://getbem.com/introduction/" target="_blank" rel="noopener noreferrer">
                    Vsevolod Strukchinsky &amp; Vladimir Starkov - <b>Get BEM</b>
                    </a>
                </li>
                <li>
                    <a href="https://www.toptal.com/css/introduction-to-bem-methodology" target="_blank" rel="noopener noreferrer">
                    Tomislav Matijevic - <b>Introduction To BEM Methodology</b>
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/fed-or-dead/battling-bem-5-common-problems-and-how-to-avoid-them-5bbd23dee319" target="_blank" rel="noopener noreferrer">
                    David Berner - <b>Battling BEM – 5 common problems and how to avoid them</b>
                    </a>
                </li>
                <li>
                    <a href="https://seesparkbox.com/foundry/bem_by_example" target="_blank" rel="noopener noreferrer">
                    Nathan Rambeck - <b>BEM by Example</b>
                    </a>
                </li>


            </ol>

        </div>


    </div>),

}
export default post8;
