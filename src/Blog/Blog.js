import React, {useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {Helmet} from "react-helmet";

import './Blog.scss';
import BlogPage from './BlogPage/BlogPage';
import Tags from './Tags/Tags';
import Stickers from './../components/Stickers/Stickers';
import posts, { postFeatured, getPostLink, formatDate, updateLikedPosts} from './posts/posts';
import LikesContext from './posts/LikesContext';
import og from './../media/blog/og.png';

function Blog() {
    const [postsSelected, setPostsSelected] = useState(false);

    return(
        <BlogPage>
            <OpenGraph/>
            {posts.length===0 && <BlogNoPosts/>}
            {posts.length>0 && <BlogPostsList/>}
            {posts.length>0 && <Tags setPostsSelected ={setPostsSelected}/>}
            {postsSelected && <BlogPostSelected postsSelected = {postsSelected}/>}
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
function BlogNoPosts(){
    return <div className="BlogPage__noPosts">
        <div className="wrapper">
            <p className="p_large"> I have no posts yet, but I'm working on it. Please check with me again later.</p>
        </div>
    </div>
}
function BlogPostsList(){
    const likes =  updateLikedPosts();
    return(
        <div className="BlogPage__postsLists">
            <div className="wrapper">
                <FeaturedPostList />
                <RecentPostList />
                {likes.length>0 && <BlogPostsLiked />}
            </div>
        </div>
    )
}

function FeaturedPostList(){
    const [arr, setArr] = useState(postFeatured.slice(0,6))
    const postFreaturedDisplay = arr.map(post=><BlogPostLink post={post} key={'featuredPosts_'+post.id}/>)
    function showAll(e){
        e.target.remove();
        setArr(postFeatured);
    }
    return(
        <div className="BlogPostsList__featured" id="posts-featured">
            <div className="Blog__divider"> Featured Posts</div>
            <div className="wrapper">
                {postFreaturedDisplay}
            </div>
            {postFeatured.length>6 && <div className="txt_right">
                <button class="Blog__btn" onClick={showAll}>Show all</button>
            </div>}
        </div>
    )
}
function RecentPostList(){
    //pagination
    const n = 5; //number of posts displayed per page
    const [arr, setArr] = useState(posts.slice(0,n))
    const [range, setRange] = useState(`1 - ${n}`)
    const pages = posts.length%n? Math.floor(posts.length/n)+1 :posts.length/n;
    const pagesBtns = new Array(pages).fill(posts.length).map((p,index,a)=><button
        key={'pag_recentPosts_'+index}
        data-page = {index}
        >
        <span className="sr-only">Posts from {index*n+1} to {index===a.length-1?p:index*n+n}</span>
        {++index}
    </button>)
    function getPage(e){
        let btn = e.target.closest('button');
        if(btn){
            const index = Number(btn.dataset.page);
            const start = index*n;
            const end = index*n+n
            const rangeStart = index*n+1;
            const rangeEnd = index===pagesBtns.length-1 ? posts.length : index*n+n;
            let nums = rangeStart === rangeEnd ? rangeEnd : `${rangeStart} - ${rangeEnd}`;
            // console.log(index,start, end,posts.slice(+start,+end))
            setArr([])
            setRange(nums)
            setTimeout(()=>{
                setArr(posts.slice(start,end))
            },0)
            setTimeout(()=>{
                document.querySelector('.BlogPostsList__recent').scrollIntoView()
            },100)
            document.querySelectorAll('.Blog__pagination button').forEach(btn=>btn.style.background='#fff');
            btn.style.background='#f2f2f2';

        }
    }


    // console.log('@===>',arr, posts.length)
    const postRecentDisplay = arr.map(post=><BlogPostLink post={post} key={'recentPosts_'+post.id}/>)
    return(
        <div className="BlogPostsList__recent">
            <div className="Blog__divider"> Most Recent Posts </div>
            {posts.length>5 && <div className="Blog__range">{range} / {posts.length}</div>}
            <div className="wrapper">
                {postRecentDisplay}
            </div>
            {posts.length>5 && <div className="Blog__pagination" onClick={getPage}>
                {pagesBtns}
            </div>}
        </div>
    )
}
function BlogPostsLiked(){
    const likes = useContext(LikesContext);
    let postsLiked = []
    // posts.forEach(post=>{
    //     if(likes.arr.includes(+post.id)){
    //         postsLiked.push(post)
    //     }
    // })
    likes.arr.forEach(id=>{
        posts.forEach(post=>{
            if(+id===+post.id){
                postsLiked.push(post)
            }
        })
    })
    //from newly liked to oldest
    postsLiked = postsLiked.reverse();
    const [arr, setArr] = useState(postsLiked.slice(0,6))
    function showAll(e){
        e.target.remove();
        setArr(postsLiked);
    }
    const postLikedDisplay = arr.map(post=><BlogPostLink post={post} key={'likedPosts_'+post.id}/>)
    return(
        <div className="BlogPostsList__liked" id="posts-liked">
            <div className="Blog__divider"> Posts You Saved</div>
            <div className="wrapper">
                {postLikedDisplay}
            </div>
            {postsLiked.length>6 && <div className="txt_right">
                <button class="Blog__btn" onClick={showAll}>Show all</button>
            </div>}
        </div>
    )
}

function BlogPostLink(props){
    const{id, title, subtitle, date, image, featured} = props.post;
    const bg = require('./../media/blog/'+image.path);
    const likes = useContext(LikesContext);
    return <NavLink to={getPostLink(props.post)} key={'props.post_'+id} className="BlogPostLink">
        <div className="BlogPostLink__img" style={{backgroundImage:"url("+bg+")"}}>
            <Stickers sm featured={featured? true :null} liked={likes.arr.includes(+id)? true :null}/>
        </div>
        <div className="BlogPostLink__desc">
            <p className="BlogPostLink__title"><b>{title}</b></p>
            {subtitle && <p className="BlogPostLink__subtitle">{subtitle}</p>}
            <p className="BlogPostLink__date">{formatDate(date)}</p>
        </div>
    </NavLink>
}

function BlogPostSelected(props){

    const displaySelectedPosts = props.postsSelected.map(post=><BlogPostLink post={post} key={'selectedPosts_'+post.id}/>)
    return(
        <div className="BlogPostsList__selected ">
            <div className="wrapper">
                {displaySelectedPosts}
            </div>
        </div>
    )
}
