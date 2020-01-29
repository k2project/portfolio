import React from 'react';
import Accordion from './../../components/Accordion/Accordion';

const accessibility_checklist={
    id:'11',
    featured:true,
    title:'Checklist',
    subtitle:'Web Accesibility Best Practices',
    date:'2020-01-29',
    image:{
        path:'accessibility.jpg',
        position:'right center '
    },
    tags:['Coding','Accessibility'],
    body:(
        <article className="post__body">

            <section className="post__section">
                <h3 className="post__heading">POUR websites.</h3>
                <p>There are four main guiding principles of accessibility in WCAG v.2.0: <strong>Perceivable, Operable, Understandable and Robust</strong>. Theye have been created to encourages developers to think through the process of  developing websites more conceptually by focusing on principles rather than techniques as per previous version.</p>

            </section>
            <section className="post__section">
                <h3 className="post__heading">My WCAG 2 Checklist</h3>
                <PerceivableChecklist/>
                <OperableChecklist/>
                <UnderstandableChecklist/>
                <RobustChecklist/>
            </section>
            
            <References/>
        </article>
    ),

}
export default accessibility_checklist;

function References(){
    return(
        <section className="post__ref">
            <p className="post__ref-title">References:</p>
            <ol className="post__ref-list">
                <li>
                    <a href="https://webaim.org/techniques/hypertext/"> WebAIM - <b>Links and Hypertext</b></a>
                </li>
               
            </ol>
        </section>
    )
}
function PerceivableChecklist(){
    const headingInfo={
        heading:4,
        title:'PERCEIVABLE.',
        subtitle:'Content is made available to the senses - sight, hearing, and/or touch.',
        color:'red',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                test
            </Accordion>
        </section>
    )
}
function OperableChecklist(){
    const headingInfo={
        heading:4,
        title:'OPERABLE.',
        subtitle:'Interface forms, controls, and navigation are operable.',
        color:'red',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                test
            </Accordion>
        </section>
    )
}
function UnderstandableChecklist(){
    const headingInfo={
        heading:4,
        title:'UNDERSTANDABLE.',
        subtitle:'Information and the operation of user interface must be understandable.',
        color:'red',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                test
            </Accordion>
        </section>
    )
}
function RobustChecklist(){
    const headingInfo={
        heading:4,
        title:'ROBUST.',
        subtitle:'Content should be interpreted by a wide variety of user agents, including assistive technologies.',
        color:'red',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                test
            </Accordion>
        </section>
    )
}