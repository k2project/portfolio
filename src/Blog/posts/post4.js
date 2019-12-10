import React from 'react';
import LinkNewTab from './../../components/LinkNewTab';
import Stickers from './../../components/Stickers/Stickers';
import file from './../../media/blog/file.png';
import reactContextVid from './../../media/blog/reactContextVid.gif';
import {Fun, Tab, CurlyBrackets, SqrBrackets, Brackets, Tags, Div} from './editor/editor';

const post4={
    id:'4',
    featured:false,
    title:'Good Code vs Bad Code pt.1',
    subtitle:'Common Practices for Writing Clean, Good Quality Code.',
    date:'2019-11-10',
    image:{
        path:'code.jpg',
        position:'right center '
    },
    tags:['Coding'],
    body:(<div className="Post_body">
        <p className="Post_subtitle">As a self-taught programmer who is trying to make it into industry, I have come to realisation that most interviewers would address concerns regarding the quality of my code. Learning from many sources and without a supervison of a senior figure makes falling into bad habits easy and that justifies their worries.   </p>
        <p>I agree with Christian Maioli M. that ignoring bad habits would be the worst thing to do. Therefore I have taken this steps to overview and improve the quality of my work. I am determined to show my potential employers that as much as it is hard to break bad habits, I'm willing to try.</p>
        <p>There are many aspects of bad practise in coding: code organization, teamwork, writing code, testing and maintenance. My main focus for now would be to overview structuring and writting of my code. </p>

        <p className="Post_subtitle">Naming conventions in programming.</p>

        <p>It can be easy for the beginner to underestimat the importance of naming in your code. It's your code so it seems clear to you what you are writting at that moment, but it takes only a few days to take a break from your work and go back to it only to realise that you are confused with the way you decide to name those variables or classes. Imagine a stranger trying to follow your logic... So as long as the names are descriptive and informative about the code they refere to, other developers will have an easier time reading your code.  </p>

        <p className="Post_subtitle">Best practise.</p>
        <ul className="Post__list">
            <li><b>Intention of the variable should be clear from its name and it should be meaningfully distinct.</b> <br/><small>Writing a comment to make the purpose of the variable clear shoud make you rethink the name.</small></li>
            <li><b>Do not use variable names which could be missliding.</b> <br/><small>Eg.Naming a collection of objects as a list.</small></li>
            <li><b>Use searchable variables and constants when needed.</b> <br/><small>Use a constant eg. <i>MIN_AGE_REQ=18 </i> if you gonna use the same value in other places. You would have to simply change the value of this constant only once to satisfy the new requirement when needed.</small></li>
            <li><b>Class names and objects should always be nouns.</b> <br/><small>Avoid generic and language-specific technical names like <i> Info</i>, <i>Manager</i> and <i>Controller</i>.</small></li>
            <li><b>Method names should have verb or verb phrase names (preferably in the start) like <i> get</i>, <i>set </i>and <i>delete</i></b>.</li>
            <li><b>Decide a standard for names serving similar purposes like <i> getters</i> and <i>setters</i>.</b></li>
            <li><b>Use context with variable names wherever is necessary.</b> <br/><small>Using the variable name, <i>member_address_state</i> for the state object inside a class <i>MemberAddress</i> would be more meaningful than just generic <i>state</i> name.</small></li>

        </ul>

        <p className="Post_subtitle">CSS Methodology.</p>

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
export default post4;
