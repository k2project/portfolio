import React, {useState, useContext } from 'react';
import './BlogPage.scss';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';

import {postFreatured,formatDate} from './../posts/posts';
import LikesContext from './../posts/LikesContext';

// localStorage.removeItem("k2BlogLikes");
// localStorage.setItem("k2BlogLikes", JSON.stringify([1,2]))

function BlogPage(props) {
    const cls = props.cls? props.cls : '';
    const styleDiv = {};
    if(props.post && props.post.image){
        const bg = require('./../../media/blog/'+props.post.image.path);
        styleDiv.backgroundImage = "url("+bg+")";
        styleDiv.backgroundPosition = props.post.image.position;
    }


    return(
        <div className={"BlogPage "+cls}>
            <Header/>
            <div>
                <div className="BlogPage__accordion" style={styleDiv}>
                    <div className="fill"></div>
                    <div className="wrapper">
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

function AccordionBlog(props){

    return <div className="BlogPage__accordion_blog">
        <p className="accordion__blogTag"><b> &#10094; KrisBlog &#x2215;&#10095; </b></p>
        <p className="p_larger">Bits and pieces on my journey to become a better web developer.</p>
        <p>Feel free to comment on my post via <a href="https://twitter.com/_k2project" target="_blank" rel="noopener noreferrer">
                <b>my twitter</b>
                <span className="sr-only">external link</span>
            </a>. I welcome all constructive feedback.
        </p>
        <PostsLiked />
        <PostsFeatured />
    </div>
}
function AccordionPost(props){
    let{title, subtitle, date, id, featured} = props.post;
    const likes = useContext(LikesContext).likes;
    return<div className="BlogPage__accordion_post">
        <p className="accordion__post_date"><small>{formatDate(date)}</small></p>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2> }
        <div className="accordion__post_stickers">
            {featured && <span className="star">&#x2605;</span>}
            {likes.includes(+id) && <span className="heart">&#9829;</span>}
        </div>

    </div>
}


function PostsLiked(props){
    const likes = useContext(LikesContext).likes;
    return(
        <span className="PostsLiked">
            <a href="#posts-liked">&#9825;</a>
            <span>{likes.length}</span>
            <span className="sr-only">posts liked</span>
        </span>
    )
}
function PostsFeatured(){
    return(
        <span className="PostsFeatured">
            <a href="#posts-featured" className="icon-heart" aria-hidden="true">&#9734;</a>
            <span>{postFreatured.length}</span>
            <span className="sr-only">posts featured</span>
        </span>
    )
}
