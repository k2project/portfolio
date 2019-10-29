import React from 'react';
import { NavLink } from 'react-router-dom';
import {Helmet} from "react-helmet";

import './Blog.scss';
import BlogPage from './BlogPage/BlogPage';
import posts, {getPostLink, formatDate} from './posts/posts';
import og from './../media/blog/og.png';

const postFreatured = posts.filter(post=>post.featured);

function Blog() {

    return(
        <BlogPage>
            <OpenGraph/>
           {/* =======no posts========*/}
            {posts.length===0 && <div className="wrapper">
                <p className="p_large"> I have no posts yet, but I'm working on it. Please check with me again later.</p>
            </div>}
            {/* =======posts available========*/}
            {posts.length>0 && <div className="wrapper">
                {postFreatured.length > 2 && <FeaturedPostList />}
                <RecentPostList />
            </div>}
        </BlogPage>
    )
}

export default Blog;

function OpenGraph(){
    return (
        <Helmet>
           <title>Kris Kopczynski Portfolio | Blog</title>
           <link rel="canonical" href='https://k2project.github.io/portfolio/blog/' />
           <meta name="description" content='Bits and pieces on my journey to become a better web developer.'/>

           <meta property="og:title" content='Kris Kopczynski Portfolio | Blog' />
           <meta property="og:url" content='https://k2project.github.io/portfolio/blog/' />
           <meta property="og:type" content="website" />
           <meta property="og:description" content='Bits and pieces on my journey to become a better web developer.' />
           <meta property="og:image" content={'https://k2project.github.io'+og}/>

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content='https://k2project.github.io/portfolio/blog/' />
            <meta name="twitter:title" content='Kris Kopczynski Portfolio | Blog'/>
            <meta name="twitter:description" content='Bits and pieces on my journey to become a better web developer.' />
            <meta name="twitter:image" content={'https://k2project.github.io'+og}/>
       </Helmet>
   )
}

function FeaturedPostList(){
    const postFreaturedDisplay = postFreatured.map(post=><BlogPostDisplay post={post}/>)
    return(
        <div className="BlogPostsList__featured">
            <div className="Blog__divider"> Featured Posts</div>
            {postFreaturedDisplay}
        </div>
    )
}
function RecentPostList(){
    const postRecentDisplay = postFreatured.map(post=><BlogPostDisplay post={post}/>)
    return(
        <div className="BlogPostsList__recent">
            <div className="Blog__divider"> Most Recent Posts</div>
            {postRecentDisplay}
        </div>
    )
}

function BlogPostDisplay(props){
    const{id, title, subtitle, date, image} = props.post;
    const bg = require('./../media/blog/'+image.path);
    return <NavLink to={getPostLink(props.post)} key={'props.post_'+id}>
        <div className="BlogPostList__img" style={{backgroundImage:"url("+bg+")"}}></div>
        <div>
            <p className="BlogPostList__title"><b>{title}</b></p>
            {subtitle && <p className="BlogPostList__subtitle">{subtitle}</p>}
            <p className="BlogPostList__date">{formatDate(date)}</p>
        </div>
    </NavLink>
}
