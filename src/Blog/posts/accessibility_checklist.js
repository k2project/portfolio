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
                <h3 className="post__heading"> WCAG 2.0 Checklist</h3>
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
                    <a href="https://webaim.org/standards/wcag/checklist"> WebAIM - <b>WebAIM's WCAG 2 Checklist</b></a>
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
                <TextAlternative/>
                <AudioAndMedia/>
                <Adaptable/>
                <Distinguishable/>
            </Accordion>
        </section>
    )
}
function Distinguishable(){
    const headingInfo={
        heading:5,
        title:'DISTINGUISHABLE.',
        subtitle:'Make it easier for users to see and hear content including separating foreground from background.',
        color:'blue',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                <ul className="post__list">
                  <li><strong>Use of color. </strong>Color is not used as the sole method of conveying content or distinguishing visual elements. Color alone is not used to distinguish links from surrounding text unless the contrast ratio between the link and the surrounding text is at least 3:1 and an additional distinction (e.g., it becomes underlined) is provided when the link is hovered over and receives focus.</li> 
                  <li>Text and images of text have a contrast ratio of at least 4.5:1. Large text - at least 18 point (typically 24px) or 14 point (typically 18.66px) and bold - has a contrast ratio of at least 3:1.</li>
                  <li>If the same visual presentation can be made using text alone, an image is not used to present that text.</li>
                  <li>The page is readable and functional when the page is zoomed to 200%.</li>
                  <li>Text is used within an image only for decoration (image does not convey content) OR when the information cannot be presented with text alone.</li>
                  <li>Text is NOT fully justified,has adequate line spacing (at least 1/2 the height of the text) and paragraph spacing (1.5 times line spacing) and has a specified foreground and background color.</li>
                </ul>
            </Accordion>
        </section>
    )
}
function Adaptable(){
    const headingInfo={
        heading:5,
        title:'ADAPTABLE.',
        subtitle:'Create content that can be presented in different ways (for example simpler layout) without losing information or structure.',
        color:'blue',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                <ul className="post__list">
                   <li><strong>Semantic markup</strong>is used to designate headings (h1-h6), regions/landmarks, lists (ul,ol,dl), emphasized text ( <strong>strong</strong> and <strong>em</strong> used instead ofb and i), etc. </li>
                   <li>Tables are used for tabular data and data cells are associated with their headers. Data table captions, if present, are associated to data tables.</li>
                   <li>Text labels are associated with form input elements. Related form elements are grouped with fieldset/legend. ARIA labelling may be used when standard HTML is insufficient.</li>
                   <li><strong>Meaningful Sequence</strong>. The reading and navigation order (determined by code order) is logical and intuitive.</li>
                   <li>Instructions do not rely upon shape, size, sound or visual location (e.g., "Click the square icon to continue").</li>
                   <li>Orientation of web content is not restricted to only portrait or landscape, unless a specific orientation is necessary.</li>
                   <li>Input fields that collect certain types of user information have an appropriate autocomplete attribute defined.</li>
                   <li>HTML5 regions or ARIA landmarks are used to identify page regions. ARIA is used, where appropriate, to enhance HTML semantics to better identify the purpose of interface components.</li>
                </ul>
            </Accordion>
        </section>
    )
}
function TextAlternative(){
    const headingInfo={
        heading:5,
        title:'TEXT ALTERNATIVES.',
        subtitle:'Provide text alternatives for any non-text content.',
        color:'blue',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                <ul className="post__list">
                    <li>Images, buttons images, and all linked images have descriptive alternative text. </li>
                    <li>Images that do not convey content, are decorative, contain content that is already conveyed, or implemented as CSS backgrounds in text are given null alt text (alt="")</li>
                    <li>Equivalent alternatives to complex images are provided in context or on a separate linked page.</li>
                    <li>Form buttons have a descriptive value.</li>
                    <li>Form inputs have associated text labels.</li>
                    <li>Embedded multimedia is identified via accessible text.</li>
                    <li>Frames and iframes are appropriately titled.</li>
                </ul>
            </Accordion>
        </section>
    )
}
function AudioAndMedia(){
    const headingInfo={
        heading:5,
        title:'AUDIO & MEDIA.',
        subtitle:'Provide alternatives for time-based media.',
        color:'blue',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                <ul className="post__list">
                   <li>A transcript of relevant content is provided for <strong>non-live audio-only</strong> (audio podcasts, MP3 files, etc.).</li>
                   <li>A transcript or audio description of relevant content is provided for <strong>non-live video-only</strong>, unless the video is decorative.</li>
                   <li>Synchronized captions are provided for non-live video.</li>
                   <li>A transcript or audio description is provided for non-live video. NOTE: Only required if there is relevant visual content that is not presented in the audio.</li>
                   <li>Synchronized captions are provided for live media that contains audio (audio-only broadcasts, web casts, video conferences, etc.)</li>
                   <li>Audio descriptions are provided for non-live video. NOTE: Only required if there is relevant visual content that is not presented in the audio.</li>
                   <li>A sign language video is provided for media that contains audio.</li>
                   <li>When audio description cannot be added to video due to audio timing (e.g., insufficient pauses in the audio), an alternative version of the video with pauses that allow audio descriptions is provided.</li>
                   <li>A transcript is provided for pre-recorded media that has a video track. For optimal accessibility, WebAIM strongly recommends transcripts for all multimedia.</li>
                   <li>A descriptive text transcript (e.g., the script of the live audio) is provided for live content that has audio.</li>
                   <li>A mechanism is provided to stop, pause, mute, or adjust volume for audio that automatically plays on a page for more than 3 seconds.</li>
                   <li>Audio with speech has no or very low background noise so the speech is easily distinguished.</li>
                </ul>
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
            <ul className="post__list">
                <li>Maximize compatibility with current and future user agents, including assistive technologies.</li>
                <li>Markup is used in a way that facilitates accessibility. This includes following the HTML/XHTML specifications and using forms, form labels, frame titles, etc. appropriately.</li>
                <li>ARIA is used appropriately to enhance accessibility when HTML is not sufficient.</li>
                <li>f an important status message is presented and focus is not set to that message, the message must be announced to screen reader users, typically via an ARIA alert or live region.</li>
            </ul>
            </Accordion>
        </section>
    )
}