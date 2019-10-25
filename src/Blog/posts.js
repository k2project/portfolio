import React from 'react';


const posts=[
    // {
    //     id:'1',
    //     title:'My first blog\'s post goes here'
    // },
    // {
    //     id:'2',
    //     title:'My second blog\'s post goes here'
    // },
    // {
    //     id:'3',
    //     title:'3'
    // },

]
export default posts;

function getTitleURL(title){
    return title.split(' ').map(t=>t.replace(/[^\w\s-]/gi, '')).filter(t=> t!=="").join('-').toLowerCase();

}

function getIdFromPathname(pathname){
    return pathname.split('/').pop().split('-').pop();
}
export function getPostLink(post){
    const{id, title} = post;
    const titleURL = getTitleURL(title)
    return '/blog/'+titleURL+'-'+id;
}
export function getPostViaURL(location){
    const id = getIdFromPathname(location.pathname);
    const post = posts.filter(post=>post.id===id)[0];
    if(post){
        return post;
    }
    return;
}
