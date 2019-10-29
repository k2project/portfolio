import post1 from './post1';

// const postId={
//     id:'',
//     featured:false,
//     title:'',
//     subtitle:'',
//     date:'YYYY-MM-DD',
//     image:{
//         path:'',
//         position:'right center '
//     },
//     body:((<div className="Post_body"></div>),
// }
//export default postId;

const posts=[
    post1,

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
