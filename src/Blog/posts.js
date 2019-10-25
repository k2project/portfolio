import React from 'react';


const posts=[
    {
        id:'1',
        featured:true,
        title:'Web development with accessibility in mind.',
        date:'2019-10-24',
        image:{
            path:'post1.jpeg',
            position:'right center '
        },
    },


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
export function formatDate(date){
    let _date = new Date(date);
    const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "Novemebr", "December"];
    return  months[(_date.getMonth() + 1)]+" " +_date.getDate() + ", " + _date.getFullYear()

}
