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
                {postsList}
        </BlogPage>
    )
}

export default Blog;
