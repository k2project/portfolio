import React from 'react';

import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';


import {formatDate} from './posts';

function BlogPage(props) {
    const cls = props.cls? props.cls : '';
    const styleDiv = {};
    if(props.post && props.post.image){
        const bg = require('./../media/blog/'+props.post.image.path);
        styleDiv.backgroundImage = "url("+bg+")";
        styleDiv.backgroundPosition = props.post.image.position;
    }
    return(
        <div className={"BlogPage "+cls}>
            <Header/>
            <div>
                <div className="BlogPage_accordion" style={styleDiv}>
                    <div className="fill"></div>
                    <div className="wrapper">
                        <p className="accordion__blog"><b> &#10094; KrisBlog &#x2215;&#10095; </b></p>
                        {props.post && <AccordionPost post={props.post}/>}
                        {!props.post && <AccordionBlog/>}
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

function AccordionBlog(){
    return <div>
        <p className="p_larger">Bits and pieces on my journey to become a better web developer.</p>
        <p>Feel free to comment on my post via <a href="https://twitter.com/_k2project" target="_blank" rel="noopener noreferrer">
                <b>my twitter</b>
                <span className="sr-only">external link</span>
            </a>. I welcome all constructive feedback.</p>
    </div>
}
function AccordionPost(props){
    let{title, subtitle, date} = props.post;

    return<div>
        <p className="accordion__post_date">{formatDate(date)}</p>
        <p className="accordion__post_title"><b>{title}</b> {subtitle && <small> <br/>{subtitle}</small> }</p>

    </div>
}
