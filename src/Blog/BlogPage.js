import React from 'react';

import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';


function BlogPage(props) {
    const cls = props.cls? props.cls : '';
    return(
        <div className={"BlogPage "+cls}>
            <Header/>
            <div>
                <div className="BlogPage_accordion">
                    <div className="fill"></div>
                    <div className="wrapper">
                        {props.post && <p className="p_larger">{props.post.title}</p>}
                        {!props.post && <div>
                            <p className="p_larger"><b> &#10094; KrisBlog &#x2215;&#10095; </b></p>
                            <p className="p_larger">Bits and pieces on my journey to become a better web developer.</p>
                            <p>Feel free to comment on my post via <a href="https://twitter.com/_k2project" target="_blank" rel="noopener noreferrer">
                                    <b>my twitter</b>
                                    <span className="sr-only">external link</span>
                                </a>. I welcome all constructive feedback.</p>
                        </div>}
                    </div>
                </div>
                <div className="BlogPage_body">
                    {props.children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BlogPage;
