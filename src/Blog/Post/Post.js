import React, {useContext, useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory} from "react-router-dom";
import {Helmet} from "react-helmet";

import './Post.scss';
import './Post-BEM.scss';

import BlogPage from './../BlogPage/BlogPage';
import {getPostViaURL, getPostLink, getRelatedPosts} from './../posts/posts';
import LikesContext from './../posts/LikesContext';
import Stickers from './../../components/Stickers/Stickers';
import SkipToMainContent from './../../components/SkipToMainContent';


function Post() {
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    const post = getPostViaURL(window.location);
    let history = useHistory();
    if(!post){
        history.push('/blog')
        return (null);
    }
    // post exist (id) but link is wrong
    //first condition for production
    //second condition for development
    console.log(window.location.pathname)
    if((window.location.pathname !== '/portfolio'+getPostLink(post))&& (window.location.pathname !== getPostLink(post))){
        history.push('/blog')
        return (null);
    }
    //:og meta
    let img = require('./../../media/blog/'+post.image.path);
    img = 'https://k2project.github.io'+img;
    let path = 'https://k2project.github.io/portfolio'+getPostLink(post);

    return(
        <BlogPage cls={post.cls? "Post "+post.cls :"Post"} post={post}>
            <SkipToMainContent/>
            <Helmet>
               <title>Kris Kopczynski Portfolio | Blog</title>
               <link rel="canonical" href={path} />
               <meta name="description" content={post.title+' '+post.subtitle}/>

               <meta property="og:title" content={post.title+' | Kris\'Blog'} />
               <meta property="og:url" content={path} />
               <meta property="og:type" content="website" />
               <meta property="og:description" content={post.subtitle} />
               <meta property="og:image" content={img}/>

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content={path} />
                <meta name="twitter:title" content={post.title+' | Kris\'Blog'} />
                <meta name="twitter:description" content={post.subtitle} />
                <meta name="twitter:image" content={img}/>
           </Helmet>
            <div className="wrapper">
                <PostSidebar post={post}/>
                <div id="main-content">
                    {post.body}
                </div>
            </div>
        </BlogPage>
    )
}
export default Post;

function PostSidebar(props){
    const likes = useContext(LikesContext);
    const [saved, setSaved] = useState(likes.arr.includes(+props.post.id))
    // console.log(props.post.id, likes.arr,likes.arr.includes(+props.post.id), saved)
    function handleClick(e){
        if(e.target.closest('button')){
            if(saved){
                likes.remove(props.post.id);
                setSaved(false);
            }else{
                likes.add(props.post.id)
                setSaved(true);
            }
        }
    }

    function handleLinkClick(){
        //without the saved value doesnt update
        //useState is async
        setSaved(likes.arr.includes(+relatedPost.id))
    }
    const relatedPost = getRelatedPosts(props.post);
    return(
        <div className="PostSidebar">
            <div className="PostSidebar__stickersBox" onClick={handleClick}>
                {props.post.featured && <Stickers featured/>}
                {saved && <button className="saved">
                    <span aria-hidden="true" className="heart">&#9825;</span>
                    <span className="tooltip">Remove From Saved</span>
                </button>}
                {!saved && <button className="unsaved">
                    <span aria-hidden="true" className="heart">&#9825;</span>
                    <span className="tooltip">Save In Browser</span>
                </button>}
            </div>
            {relatedPost && <div className="PostSidebar__relatedPost">
                <NavLink to={getPostLink(relatedPost)} onClick={handleLinkClick} key={'related.postLink_'+relatedPost.id}>
                    <b>{relatedPost.title}</b><br/>
                    <small>{relatedPost.subtitle}</small> <br/>
                    <i>Read more...</i>
                </NavLink>
            </div>}
        </div>

    )
}
