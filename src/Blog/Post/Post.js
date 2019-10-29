import React from 'react';
import { useHistory} from "react-router-dom";
import {Helmet} from "react-helmet";
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

    let img = require('./../../media/blog/'+post.image.path);
    img = 'https://k2project.github.io'+img;

    return(
        <BlogPage cls="Post" post={post}>
            <Helmet>
               <title>Kris Kopczynski Portfolio | Blog</title>
               {/* <link rel="canonical" href="http://mysite.com/example" /> */}
               <meta property="og:title" content={post.title+' |Blog'} />
                {/* <meta property="og:url" content={canonical} /> */}
                <meta property="og:description" content={post.subtitle} />
                <meta property="og:image" content={img}/>
           </Helmet>
            <div className="wrapper">
                {post.body}
            </div>
        </BlogPage>
    )
}
export default Post;
