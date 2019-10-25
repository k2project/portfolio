import React from 'react';
import { NavLink } from 'react-router-dom';

import './Blog.scss';

import BlogPage from './BlogPage';

import posts, {getPostLink} from './posts';


function Blog() {

    const postsList = posts.map(post=>{
        const{id, title} = post;
        return <NavLink to={getPostLink(post)} key={'post_'+id}>{title}</NavLink>
    })
    return(
        <BlogPage>
            {posts.length===0 && <div className="wrapper">
                <p className="p_large"> I have no posts yet, but I'm working on it. Please check with me again later.</p>
            </div>}
            {posts.length>0 && <div className="wrapper">
                {postsList}
            </div>}
        </BlogPage>
    )
}

export default Blog;
