import post1 from './post1';
import post2 from './post2';
import post3 from './post3';
import post4 from './post4';
import post5 from './post5';
import post6 from './post6';
import post7 from './post7';
import post8 from './post8';
import accessibility_links from './accessibility_links'; //id 9
import accessibility_checklist from './accessibility_checklist'; //id 11
import accessibility_semantic from './accessibility_semantic'; //id 12

// &#123; &#125; //{}
//&lsaquo; &rsaquo; // <>
// function foo( )&#123; <br/>
// <span className="tab"> console.log(b);</span><br/>
// <span className="tab"> let b = 5;</span><br/>
// &#125;<br/>
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
    post7, //bootcamp
    accessibility_checklist,
    accessibility_semantic,
    post1,
    post2,
    post3,
    post4,
    post5,
    post6,
    post8,
    accessibility_links,
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
    return  months[(_date.getMonth())]+" " +_date.getDate() + ", " + _date.getFullYear()

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
//updates saved posts in case of change of post title and id
export function updateLikedPosts(){
    let saved = JSON.parse(localStorage.getItem("k2BlogLikes"));
    const ids = [];
    posts.forEach(post=>ids.push(+post.id));
    if(saved && saved.length>0){
        saved.forEach(el=>{
            if(!ids.includes(+el)){
                saved.splice(saved.indexOf(+el), 1)
            }
        })
    }
    saved = saved || [];
    localStorage.setItem("k2BlogLikes", JSON.stringify(saved));
    return saved;
}
