import React, {useState, useContext, useEffect } from 'react';
import './BlogPage.scss';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';

import {postFeatured,formatDate} from './../posts/posts';
import LikesContext, {LikesProvider, LikesConsumer} from './../posts/LikesContext';

// localStorage.removeItem("k2BlogLikes");
// localStorage.setItem("k2BlogLikes", JSON.stringify([1,2]))

function BlogPage(props) {

    //Likes context
    const savedPosts = {}
    const [likes, setLikes] = useState(savedPosts);
    savedPosts.arr =  JSON.parse(localStorage.getItem("k2BlogLikes")) || [];
    savedPosts.add = function(id){
        if(!this.arr.includes(+id)){
            this.arr.push(+id)
            localStorage.setItem("k2BlogLikes", JSON.stringify(this.arr));
            setLikes(this)

        }

    }
    savedPosts.remove = function(id){
        this.arr.splice(this.arr.indexOf(+id), 1);
        localStorage.setItem("k2BlogLikes", JSON.stringify(this.arr));
        setLikes(this)
    }
    const cls = props.cls? props.cls : '';
    const styleDiv = {};
    if(props.post && props.post.image){
        const bg = require('./../../media/blog/'+props.post.image.path);
        styleDiv.backgroundImage = "url("+bg+")";
        styleDiv.backgroundPosition = props.post.image.position;
    }
    // console.log(likes.arr)
    return(
        <LikesProvider value={likes}>
            <div className={"BlogPage "+cls}>
                <Header/>
                <div>
                    <div className="BlogPage__accordion" style={styleDiv}>
                        <div className="fill"></div>
                        <div className="wrapper">
                            {props.post && <AccordionPost post={props.post} likesArr={likes.arr}/>}
                            {!props.post && <AccordionBlog/>}
                        </div>
                    </div>
                    <div className="BlogPage_body">
                        {props.children}
                    </div>
                </div>
                <Footer/>
            </div>
        </LikesProvider>
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
    let{title, subtitle, date} = props.post;

    return(
        <div className="BlogPage__accordion_post">
            <p className="accordion__post_date"><small>{formatDate(date)}</small></p>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2> }

        </div>

    )
}


function PostsLiked(props){
    const likes = useContext(LikesContext);
    return(
        <span className="PostsLiked">
            <a href="#posts-liked">&#9825;</a>
            <span>{likes.arr.length}</span>
            <span className="sr-only">posts liked</span>
        </span>
    )
}
function PostsFeatured(){
    return(
        <span className="PostsFeatured">
            <a href="#posts-featured" className="icon-heart" aria-hidden="true">&#9734;</a>
            <span>{postFeatured.length}</span>
            <span className="sr-only">posts featured</span>
        </span>
    )
}
