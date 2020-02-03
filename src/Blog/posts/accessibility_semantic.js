import React from 'react';


const accessibility_semantic={
    id:'12',
    featured:false,
    title:'Semantic Structure',
    subtitle:'Web Accessibility Best Practices',
    date:'2020-02-03',
    image:{
        path:'accessibility.jpg',
        position:'right center '
    },
    tags:['Coding','Accessibility'],
    body:(
        <article className="post__body">
            <section className="post__section">
                <h3 className="post__heading">Links Attributes.</h3>

            </section>
            <section className="post__section">
                <table className="post__table">
                    <tr>
                        <th>Attribute</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>

                  
                </table>
            
            </section>
           <section className="post__section">
           <h3 className="post__heading">Semantic Code Best Practices.</h3>
           <ul className="post__list">
               <li>To ensure <strong>HTML validity</strong> nest elements accordingly to their specifications with complete start and end tags, don not duplicte attributes and keep all IDs unique.</li>
              
               <li><strong>Lang Tag.</strong> Provide a language tag (&lt;html lang="en"&gt;) on every page. Wrap text in the same tag when refering to a language different to the page language.</li>
               <li><strong>Page Title.</strong> Provide a descriptive page title that distinguishes it from other pages in format <span className="color-themed--primary">PAGE NAME -SITE NAME</span>.</li>
               <li><strong>Hedings.</strong> Break up content into logical chunks and precede each area of content with a descriptive heading. There should be only one h1 heading. Heading must be hierarchically ordered. Provide designs that use labels, controls, status indicators, and other UI elements consistently across all pages. Ensure that the HTML content in the DOM is in a logical order (visually from left-to-right and top-to-bottom).</li>
               <li><strong>Emphasized Text.</strong> Use <em>strong</em> and <em>em </em> tags to ensure that the block of text is stressed.</li>
               <li>For lists, use list tags <em>ul, ol</em> and <em>li</em>. The menu items are structured in HTML as an unordered list. In hierarchical menus (menus within menus), use unordered lists within unordered lists.</li>
               <li><strong className="color-themed--primary">Use BUTTON for elements that perform a within-page function and LINKS for elements that load a new page.</strong> </li>
               <li><strong>Links.</strong> Ensure that link text accurately describes the destination of the link. Link text must not be empty. Avoid using ambiguous link names, such as "Click Here" or "More". Ensure links are underlined. Otherwise provide high contrast (3:1 contrast ratio) between link and non-linked text. Provide a method to skip the page header and navigation menus and go straight to the content, through a hidden "skip to main content" or "skip navigation" link at the top of the page.</li> 
               <li><strong>Images.</strong> To display decorative or non-meaningful images, such as icons and backgrounds, use CSS methods. Use the <em>img</em> tag ONLY to show 'content' images, such as photos or illustrations, that are meaningful to the content. An <em>alt property</em> must be present on all img tags. Purely decorative images should use null alt text (alt="").</li>
               <li><strong>Tables.</strong> For tabular data use proper table markup including scope attributes. For table headers using colspan or rowspan, use scope="colgroup/rowgroup". Do NOT use HTML table elements for positional layout.</li>
               <li><strong>Forms.</strong> Provide an accessible name to all fields by using a <em>label</em> tag with a "for" attribute that references the <em>input</em> ID. Ensure that error messages are properly connected with their associated form fields. Provide a description for groups of related form elements by using  <em>fieldset</em> and <em> legend </em>tags. Ensure that all error text is clearly marked as such with a heading, "Error:", or by use of an error symbol.</li>
               <li><strong>ARIA.</strong> Avoid custom ARIA elements and use standard HTML controls and elements, such as <em>input, select, button</em>. If you use ARIA attributes, ensure they are applied correctly on the right elements. <strong>No ARIA is better than bad ARIA.</strong></li>
           </ul>

           <p>For dynamicly created content content, make sure that the content directly follows the activating element in the DOM (such as a hide/show dropdown) and that content changes, status messages, and system state changes are announced to assistive technology. </p>
           <p>At all times page must be completely keyboard accessible. Interactive custom elements should be reached and activated with the keyboard alone. Ensure that all keyboard-interactive elements have a visible focus indicator - the more noticeable, the better.</p>

           </section>
           
            <References/>
        </article>
    ),

}
export default accessibility_semantic;

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
