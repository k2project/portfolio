import React from 'react';
import LinkNewTab from './../../components/LinkNewTab';
import Stickers from './../../components/Stickers/Stickers';
import file from './../../media/blog/file.png';
import reactContextVid from './../../media/blog/reactContextVid.gif';
import {Fun, Tab, CurlyBrackets, SqrBrackets, Brackets, Tags, Div} from './editor/editor';

const post5={
    id:'5',
    featured:false,
    title:'Coding: CSS Methodologies',
    subtitle:'Common Practices for Writing Clean, Good Quality Code.',
    date:'2019-11-11',
    image:{
        path:'code.jpg',
        position:'right center '
    },
    tags:['Coding'],
    body:(<div className="Post_body">
        <p className="Post_subtitle">Naming classes in programming is as much important as naming variables. Let's talk about the CSS most three popular methodologies: OOCSS, BEM and SMACSS.</p>

        <p>CSS methodologies give you a system to manage and optimize your CSS codes. They can be combined, like OOCSS-SMACSS, or OOCSS-BEM, or BEM-SAMCSS to suit your needs. However, which ever you chose it is important to stick to that convention throughout (at least) the entire project.</p>


        {/* <p className="Post_subtitle">Best practise.</p>
        <ul className="Post__list">
            <li><b>The intention of the variable should be clear from its name and it should be meaningfully distinct.</b> <br/><small>Writing a comment to make the purpose of the variable clear should make you rethink the name.</small></li>


        </ul> */}



        <div className="Post__references">
            <div className="Post__references_title"><b>References:</b></div>
            <ol>
                <li>
                    <a href="https://medium.com/better-programming/good-code-vs-bad-code-35624b4e91bc" target="_blank" rel="noopener noreferrer">
                        Navdeep Singh - <b>Good Code vs Bad Code. Why writing good code matters, and how to do it.</b>
                    </a>
                </li>
                <li>
                    <a href="https://techbeacon.com/app-dev-testing/35-programming-habits-make-your-code-smell" target="_blank" rel="noopener noreferrer">
                        Christian Maioli M. - <b>35 programming habits that make your code smell.</b>
                    </a>
                </li>
                <li>
                    <a href="https://dev.to/danialmalik/a-beginner-s-guide-to-clean-code-part1-naming-conventions-139l" target="_blank" rel="noopener noreferrer">
                        Danial Malik - <b>A Brief Guide to Clean Code: Naming Conventions</b>
                    </a>
                </li>
            </ol>

        </div>

    </div>),

}
export default post5;
