import React from 'react';
import Accordion from '../../components/Accordion/Accordion';

const accessibility_principles={
    id:'11',
    featured:true,
    title:'Accessibility Principles',
    subtitle:'Web Accessibility Best Practices',
    date:'2020-01-30',
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
                <h3 className="post__heading"> WCAG 2.0 Principles (Levels A - AAA).</h3>
                <PerceivableChecklist/>
                <OperableChecklist/>
                <UnderstandableChecklist/>
                <RobustChecklist/>
            </section>
            <section className="post__section">
            <h3 className="post__heading"> Links To Handy Accessibility Tools.</h3>
                <a href="http://wave.webaim.org" className="post__link">WAVE - Web Accessibility Evaluation Tool</a> <br/>
                <a href="http://validator.w3.org" className="post__link">Markup Validation Service</a> <br/>
                
                <a href="https://webaim.org/resources/contrastchecker/" className="post__link">Web AIM Colour Contrast Checker</a>
            </section>
            
            <References/>
        </article>
    ),

}
export default accessibility_principles;

function References(){
    return(
        <section className="post__ref">
            <p className="post__ref-title">References:</p>
            <ol className="post__ref-list">
                <li>
                    <a href="https://www.w3.org/TR/WCAG21/"> W3C - <b>Web Content Accessibility Guidelines (WCAG) 2.1</b></a>
                </li>
                <li>
                    <a href="https://webaim.org/standards/wcag/checklist"> WebAIM - <b>WebAIM's WCAG 2 Checklist</b></a>
                </li>
                <li>
                    <a href="https://a11yproject.com/checklist/"> The A11Y Project- <b>Checklist</b></a>
                </li>
                <li>
                    <a href="https://romeo.elsevier.com/accessibility_checklist/"> Elsevier - <b>Accessibility Checklist</b></a>
                </li>
                <li>
                    <a href="https://www.w3.org/WAI/tutorials/">W3C - <b>Web Accessibility Tutorials</b></a>
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
                  <li><strong>Use of color. </strong>Color is not used as the sole method of conveying content or distinguishing visual elements. Do not rely solely on color to identify links. Distinguish links from regular text by underlining them, bolding them, showing an icon next to each link, or some other means other than color. In forms, use not just color but also text labels to identify required fields or fields with errors</li> 
                  <li><strong>Contrast. </strong>Text and images of text have a contrast ratio of at least 4.5:1. Large text - at least 18 point (typically 24px) or 14 point (typically 18.66px) and bold - has a contrast ratio of at least 3:1. Text has enough contrast with the background.</li>
                  <li><strong>Images of Text. </strong>If the same visual presentation can be made using text alone, an image is not used to present that text (exceptions: logos,etc.).</li>
                  <li><strong>Resize text. </strong>The page is readable and functional when the page is zoomed to 200%. When content is zoomed in to a large degree, the site will adapt to ensure that scrolling only occurs in one direction.</li>
                  <li>Text is used within an image only for decoration (image does not convey content) OR when the information cannot be presented with text alone.</li>
                  <li><strong>Text Spacing.</strong> Text is NOT fully justified. Line height (line spacing) to at least 1.5 times the font size. Spacing following paragraphs to at least 2 times the font size. Letter spacing (tracking) to at least 0.12 times the font size. Word spacing to at least 0.16 times the font size.</li>
                  <li><strong>Audio Control. </strong>For audio that plays longer than 3 seconds, users should be able to pause or stop the audio, or change the volume of the audio. Low or no background audio, or background audio can be turned off. </li>
                  <li><strong>Content on Hover or Focus.</strong> Content that appears on mouse hover or keyboard focus must be dismissable (the user can close the content without moving the pointer or focus - Esc Key), hoverable (the pointer can move over the additional content without it disappearing), and persistent (the content remains until closed by the user, or if hover/focus is moved away).</li>
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
                   <li><strong>Information and Relationships. </strong>Information, structure, and relationships can be programmatically determined. The structure and meaning of the page can still be understood when all CSS styling is removed. <strong>Semantic markup</strong> is used to define the structure and meaning of the elements on the page: headings (h1-h6), regions/landmarks, lists (ul,ol,dl), emphasized text ( <strong>strong</strong> and <strong>em</strong> used instead ofb and i), etc. </li>
                   <li>Tables are used for tabular data and data cells are associated with their headers. Data table captions, if present, are associated to data tables.</li>
                   <li>Text labels are associated with form input elements. Related form elements are grouped with fieldset/legend. ARIA labelling may be used when standard HTML is insufficient.</li>
                   <li><strong>Meaningful Sequence</strong>. The reading and navigation order (determined by code order) is logical and intuitive. When all CSS styling of the page is removed, the elements on the page are still in a logical reading order in the HTML code. Make sure the tabbing order of the page elements is logical. If necessary, use the tabIndex property to enforce the correct tabbing order.</li>
                   <li>Instructions do not rely upon shape, size, sound or visual location (e.g., "Click the square icon to continue").</li>
                   <li><strong>Orientation</strong> of web content is not restricted to only portrait or landscape, unless a specific orientation is necessary.</li>
                   <li>Input fields that collect certain types of user information have an appropriate autocomplete attribute defined.</li>
                   <li><strong>Identify Purpose. </strong>HTML5 regions or ARIA landmarks are used to identify page regions. ARIA is used, where appropriate, to enhance HTML semantics to better identify the purpose of interface components.</li>
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
                    <li>Provide a descriptive TITLE attribute for all embedded audio/video, non-image charts, Flash, form elements and other items that require textual explanation in order to be understood.</li>
                    <li>Do not use CAPTCHA that relies on visual identification.</li>
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
                   <li>A transcript of relevant content is provided for non-live audio-only (audio podcasts, MP3 files, etc.).</li>
                   <li>A transcript or audio description of relevant content is provided for non-live video-only, unless the video is decorative.</li>
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
                <KeyboardAccessible/>
                <Timing/>
                <Seizures/>
                <Navigable/>
                <InputModalities/>
            </Accordion>
        </section>
    )
}
function KeyboardAccessible(){
    const headingInfo={
        heading:5,
        title:'KEYBOARD ACCESSIBLE.',
        subtitle:'Make all functionality available from a keyboard.',
        color:'blue',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                <ul className="post__list">
                   <li><strong>Keyboard.</strong> All page functionality is available using the keyboard, unless the functionality cannot be accomplished in any known way using a keyboard (e.g., free hand drawing). <strong>All clickable items should also be selectable using the keyboard. </strong>Where "drag and drop" functionality is used, a keyboard-based "cut and paste" alternative should be offered. Do not use non-standard interface elements that are not keyboard-accessible but can be controlled with a mouse only.</li>
                   <li><strong>No Keyboard Trap.</strong> Keyboard focus is never locked or trapped at one particular page element. The user can navigate to and from all navigable page elements using only a keyboard.</li>
                   <li><strong>Keyboard Shortcuts.</strong> Page-specified shortcut keys and accesskeys (accesskey should typically be avoided) do not conflict with existing browser and screen reader shortcuts. If a keyboard shortcut uses printable character keys, then the user must be able to disable the key command, change the defined key to a non-printable key (Ctrl, Alt, etc.), or only activate the shortcut when an associated interface component or button is focused.</li>
                </ul>
            </Accordion>
        </section>
    )
}
function Timing(){
    const headingInfo={
        heading:5,
        title:'TIMING.',
        subtitle:'Provide users enough time to read and use content.',
        color:'blue',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                <ul className="post__list">
                 <li><strong>Timing Adjustable. </strong>If a page or application has a time limit, the user is given options to turn off, adjust, or extend that time limit. This is not a requirement for real-time events (e.g., an auction), where the time limit is absolutely required, or if the time limit is longer than 20 hours.</li>
                 <li>Automatically moving, blinking, or scrolling content (such as carousels, marquees, or animations) that lasts longer than 5 seconds can be paused, stopped, or hidden by the user.</li>
                 <li>Automatically updating content (e.g., a dynamically-updating news ticker, chat messages, etc.) can be paused, stopped, or hidden by the user or the user can manually control the timing of the updates.</li>
                 <li><strong>No Time Limits. </strong>The content and functionality have no time limits or constraints, except for real-time events and non-interactive synchronized audio/video.</li>
                 <li><strong>Interruptions </strong> (alerts, page updates, etc.) can be postponed or suppressed by the user.</li>
                 <li><strong>Re-authenticating. </strong>If an authentication session expires, the user can re-authenticate and continue the activity without losing any data from the current page.</li>
                 <li><strong>Timeouts. </strong>Users must be warned of any timeout that could result in data loss, unless the data is preserved for longer than 20 hours of user inactivity.</li>
                </ul>
            </Accordion>
        </section>
    )
}
function Seizures(){
    const headingInfo={
        heading:5,
        title:'SEIZURES.',
        subtitle:'Do not design content in a way that is known to cause seizures or physical reactions.',
        color:'blue',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                <ul className="post__list">
                    <li><strong>Three Flashes or Below Threshold. </strong> Tho ensure that users with epilepsy and other who have photosensitive seizure disorders do not get seizures from content that flashes onscreen, the content should not flash more than 3 times per second, and flashes fall below the general flash thresholds.</li>
                    <li><strong>Animation from Interactions . </strong>Motion animation instigated by user interaction be disabled, unless the animation is essential to the functionality or information being conveyed, eg. parallax scrolling, where a site includes extra animations when the user scrolls or page transitions such as a page flipping animation.</li>
                </ul>
            </Accordion>
        </section>
    )
}
function Navigable(){
    const headingInfo={
        heading:5,
        title:'NAVIGABLE.',
        subtitle:'Provide ways to help users navigate, find content, and determine where they are.',
        color:'blue',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                <ul className="post__list">
                    <li><strong>Bypass Blocks with "Skip to main content" link at the top of page.</strong>
                    Users can bypass blocks of content that are repeated on multiple Web pages, such as navigation menus.</li>
                    <li><strong>Page Titled.</strong>Each page should have a title clearly describing the topic or purpose of that page.
                    <span className="card">&lt;title&gt; PAGE TITLE - WEB TITLE &lt;/title&gt;</span>
                    </li>
                    <li><strong>Focus Order.</strong> Users can tab through the elements of a page in a logical order. The <strong>tabIndex </strong>property can be used to enforce a certain tabbing order. When the user leaves a modal dialog box on the page, they should not lose their focus on the page and have to start from the top of the page again. Instead, the element that had the focus when the modal dialog opened should get the focus again.</li>
                    <li><strong>Links.</strong> The purpose of each link can be determined from the link text or context. </li>
                    <li>More than one way is available to navigate to other Web pages, such as a sitemap.</li>
                    <li><strong>Headings and Labels</strong> The headings and labels are clear and consistent, accurately describing the topic or purpose. Section headings are used to organize the content.</li>
                    <li><strong>Focus Visible. </strong>The page element with the current keyboard focus has a visible focus indicator.</li>
                    <li><strong>Location. </strong>Show the user's location within a set of Web pages, for instance by using a breadcrumb.</li>
                </ul>
            </Accordion>
        </section>
    )
}
function InputModalities(){
    const headingInfo={
        heading:5,
        title:'IMPUT MODALITIES.',
        subtitle:'Make it easier for users to operate functionality through various inputs beyond keyboard.',
        color:'blue',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                <ul className="post__list">
                    <li><strong>Pointer Gestures.</strong> All operations must use simple gestures that need only a single touch or click. If more complex operations exist, a single touch or click alternative must be given (exceptions: signature,tec.).</li>
                    <li><strong>Pointer Gestures. </strong>All operations must use simple gestures that need only a single touch or click. If more complex operations exist, a single touch or click alternative must be given. NO DOWN EVENT: The down-event of the pointer is not used to execute any part of the function. ABORT/UNDO: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion. UP EVENT: The up-event reverses any outcome of the preceding down-event. </li>
                    <li><strong>Label in Name. </strong> For user interface components with visible text, ensure that the accessible name includes the visible text.</li>
                    <li><strong>Motion Actuation. </strong>Motion input (shaking, orientation change, tilting, etc.) must be accompanied by another means of input (such as a button). The motion actuation or responding to the motion can be disabled to prevent accidental actuation, unless the motion is essential for the function and doing so would invalidate the activity.</li>
                    <li><strong>Target Size. </strong>The size of the target for pointer inputs (mouse, touchscreen) is at least 44 by 44 pixels. </li>
                    <li><strong>Concurrent Input Mechanisms. </strong>
                    Web content does not restrict use of different input types (keyboard, mouse, touch screen, speech input, etc.) except where the restriction is essential.</li>
                </ul>
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
                <Readable/>
                <Predictable/>
                <InputAssistance/>
            </Accordion>
        </section>
    )
}
function InputAssistance(){
    const headingInfo={
        heading:5,
        title:'INPUT ASSISTANCE.',
        subtitle:'Help users avoid and correct mistakes.',
        color:'blue',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                <ul className="post__list">
                <li><strong>Error Identification.</strong> Input errors are clearly marked and described to the user. Display an error message with text alerting the user to the specific fields (or other form elements) containing errors and describing the specific errors in the input. Color or images can be used in addition to the text to mark the form elements containing errors.</li>
                <li><strong>Labels or Instructions.</strong> Items requiring user input are clearly labeled or have clear instructions. Label all form elements. Use clear, unambiguous labels. Identify required (mandatory) fields with a text label. Do not use color or images only to identify required fields. Display the label for an element in close proximity to that element. Provide examples of correct input, such as the correct date format.
                <span className="card">&lt;label for="[ID]"&gt;</span>
                </li>
                <li><strong>Error Suggestion.</strong> When the user makes an input error, give suggestions for valid input.</li>
                <li><strong>Error Prevention.</strong> Input can be reviewed and corrected before final submission, and submissions can be reverted, especially in case of Web pages causes legal or financial commitments.</li>
                </ul>
            </Accordion>
        </section>
    )
}
function Predictable(){
    const headingInfo={
        heading:5,
        title:'PREDICTABLE.',
        subtitle:'Make Web pages appear and operate in predictable ways.',
        color:'blue',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                <ul className="post__list">
                <li><strong>On Focus.</strong>When a UI component receives focus, this does not trigger unexpected actions such as automatically submitting a form, opening a new window or switching focus to another element.</li>
                  <li><strong>On Input.</strong>Changing the setting of a checkbox, radio button or other UI component does not trigger unexpected changes in context, such as causing significant changes to the page content or opening a new window. <em>Provide a submit button. Do not perform any actions until this button is clicked by the user.</em></li>
                  <li><strong>Consistent Navigation.</strong>Navigation menus, search box, login/logout buttons and a "Skip to content" link are in the same location and order on every Web page.</li>
                  <li><strong>Consistent Identification</strong>UI components used across the Web site are identified consistently on every page. </li>
                  <li><strong>Change on Request.</strong>All unexpected changes in context, such as causing significant changes to the page content or opening a new window, are triggered by the user, or such unexpected changes in context can be turned off by the user. 
                  </li>
                </ul>
            </Accordion>
        </section>
    )
}
function Readable(){
    const headingInfo={
        heading:5,
        title:'READABLE.',
        subtitle:'Make text content readable and understandable.',
        color:'blue',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
                <ul className="post__list">
                    <li><strong>Language of Page.</strong>Specify the language (e.g. English) of the Web page. This allows screen reader software (used by blind users) to use the correct pronounciation when speaking the text on the page aloud.
                        <span className="card">
                            &lt;html lang="en"&gt;
                        </span>
                    </li>
                    <li><strong>Language of Partial Text.</strong>Specify the language (e.g. English) of each text phrase or passage that is in a language other than the default language specified for the entire Web page.
                        <span className="card">
                            &lt;blockquote lang="esp"&gt; Hola! &lt;/blockquote&gt;
                        </span>
                    </li>
                    <li><strong>Unusual Words.</strong>Provide definitions of idioms, jargon, and unusual terms and phrases.</li>
                    <li><storng>Abbreviations.</storng>Provide the expanded form of abbreviations.</li>
                    <li><strong>Reading Level.</strong>Provide a simplified version of text that requires an advanced level of understanding.</li>
                    <li><strong>Pronunciation.</strong>Provide the pronunciation of words where the meaning is unclear without knowing the correct pronunciation.</li>
                </ul>
            </Accordion>
        </section>
    )
}
function RobustChecklist(){
    const headingInfo={
        heading:4,
        title:'ROBUST.',
        subtitle:'Maximize compatibility with assistive technologies (such as screen readers) and future browsers',
        color:'red',
    }
    return(
        <section>
            <Accordion data={headingInfo}>
            <ul className="post__list">
                <li>Markup is used in a way that facilitates accessibility. Use valid, error-free HTML, including unique (non-duplicate) element IDs.</li>
                <li>For all UI components, the name, value and role can be programmatically determined. The name and state of all form elements, links and other UI components can be determined and the state can be changed. <strong>Avoid using non-standard controls.</strong> When using non-standard controls, make sure that it is keyboard accessible - it can receive focus and its state can be changed using the keyboard.</li>
                <li>Status Messages (a visual message that provides information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process, or on the existence of errors) must be available to AT such as screen readers vis ARIAs.
                    <span className="card">
                    role="status / marquee / progressbar / timer /alertdialog"
                    </span>

                </li>
            </ul>
            </Accordion>
        </section>
    )
}