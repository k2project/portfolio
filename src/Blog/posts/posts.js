import post1 from './post1';
import post2 from './post2';
import post3 from './post3';

// const postId={
//     id:'',
//     title:'',
//     featured:false,
//     subtitle:'',
//     date:'YYYY-MM-DD',
//     image:{
//         path:'',
//         position:'right center '
//     },
//     tags:[],
//     body:((<div className="Post_body"></div>),
// }
//export default postId;

let posts=[
    post1,
    post2,
    post3,
    post1,
    post2,
    post3,
    post1,
    post2,
    post3,
    post3,
    post1,
    post1,
    post1,
    post1,
    post1,
    post1,
    post1,

]

export const postFeatured = posts.filter(post=>post.featured);
posts = posts.sort(function(a,b){
  return new Date(b.date) - new Date(a.date);
});

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

export function getRelatedPosts(post){
    const relatedPosts = [];
    posts.forEach(p=>{
        if(post.tags.some(val=>p.tags.includes(val))&& !relatedPosts.includes(p)&& p.id !==post.id){
            relatedPosts.push(p)
        }
    })
    if(relatedPosts.length>0){
        const random = getRandom(relatedPosts.length-1)
        return relatedPosts[random];

    }else{
        const allPostsButDisplayed = posts.filter(p=>p.id !==post.id);
        const random = getRandom(allPostsButDisplayed.length-1)
        return allPostsButDisplayed[random];
    }

}

function getRandom(min, max) {
    //When the parameter is only one. The "min" becomes the max and "min" is 0
    return (Math.random() * ((max ? max : min) - (max ? min : 0) + 1) + (max ? min : 0)) | 0;
}
