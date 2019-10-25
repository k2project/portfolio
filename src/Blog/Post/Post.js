import React from 'react';
import { useHistory} from "react-router-dom";
import './Post.scss';

import BlogPage from './../BlogPage';

import {getPostViaURL, getPostLink} from './../posts';

function Post() {
    let history = useHistory();
    const post = getPostViaURL(window.location);
    if(!post){
        history.push('/blog')
        return (null);
    }
    //post exist (id) but link is wrong
    if(window.location.pathname !== getPostLink(post)){
        history.push('/blog')
        return (null);
    }


    return(
        <BlogPage cls="Post">
            <h1>{post.title}</h1>
        </BlogPage>
    )
}
export default Post;
