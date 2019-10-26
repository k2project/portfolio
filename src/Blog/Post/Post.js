import React from 'react';
import { useHistory} from "react-router-dom";
import './Post.scss';

import BlogPage from './../BlogPage';

import {getPostViaURL, getPostLink} from './../posts';

function Post() {
    console.log(window.location.pathname)
    const post = getPostViaURL(window.location);
    let history = useHistory();
    if(!post){
        history.push('/blog')
        return (null);
    }
    // post exist (id) but link is wrong
    //first condition for production
    //second condition for development
    if((window.location.pathname !== '/portfolio'+getPostLink(post))&& (window.location.pathname !== getPostLink(post))){
        history.push('/blog')
        return (null);
    }


    return(
        <BlogPage cls="Post" post={post}>
            <div className="wrapper">
                <h1>{post.title}</h1>
                {post.body}
            </div>
        </BlogPage>
    )
}
export default Post;
