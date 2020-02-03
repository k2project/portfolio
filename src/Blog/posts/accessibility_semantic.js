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
               <li><strong>Hedings.</strong> Break up content into logical chunks and precede each area of content with a descriptive heading. There should be only one h1 heading. Heading must be hierarchically ordered.</li>
               <li><strong>Emphasized Text.</strong> Use <em>strong</em> and <em>em </em> tags to ensure that the block of text is stressed.</li>
               <li>For lists, use list tags <em>ul, ol</em> and <em>li</em>.</li>
               <li><strong className="color-themed--primary">Use BUTTON for elements that perform a within-page function and LINKS for elements that load a new page.</strong> </li>
               <li><strong>Tables.</strong> For tabular data use proper table markup including scope attributes. For table headers using colspan or rowspan, use scope="colgroup/rowgroup". Do NOT use HTML table elements for positional layout.</li>
               <li><strong>ARIA.</strong> Avoid custom ARIA elements and use standard HTML controls and elements, such as <em>input, select, button</em>. If you use ARIA attributes, ensure they are applied correctly on the right elements. <strong>No ARIA is better than bad ARIA.</strong></li>
           </ul>

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
