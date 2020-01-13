import React from 'react';
import './Tags.scss';
import Button from './../../components/Button/Button';
import posts from './../posts/posts';

let tagsArr= [];
function Tags(props) {
    const tags = [];
    posts.forEach(post=>{
        post.tags.forEach(tag=>{
            if(!tags.includes(tag)){
                tags.push(tag)
            }
        })
    })
    let tagsList = tags.sort().map(tag=><Button
        dataSet={tag}
        toggle
        key={"tag_"+tag}>
            <span className="sr-only">display posts taged with</span>
            <b>{tag}</b>
        </Button>);

    function handleClick(e){
        const btn = e.target.closest('.Button');
        if(btn){
            const tags = btn.dataset.gen;

            btn.classList.toggle('selected');

            if(btn.getAttribute("aria-pressed")==="true"){
                btn.setAttribute("aria-pressed", "false")
                tagsArr = tagsArr.filter(el=>el!==tags);
            }else{
                btn.setAttribute("aria-pressed", "true")
                tagsArr.push(tags);
            }

            //check if buttons selected
            //hide other posts list on selected
            if(tagsSelected()){
                document.querySelector('.BlogPage__postsLists').style.display = 'none';
                document.querySelector('.BlogPage__tags').scrollIntoView({behavior:'smooth'});
                document.querySelector('.BlogPage__tags').classList.add('selected');

            }else{
                document.querySelector('.BlogPage__postsLists').style.display='block';
                document.querySelector('.BlogPage__tags').classList.remove('selected');
            }

            //get the selected posts
            let selectedPostsArr = [];
            if(tagsArr.length > 0){
                posts.forEach(post=>{
                    if(tagsArr.every(val => post.tags.includes(val))){
                        selectedPostsArr.push(post)
                    }
                })
                //display slected posts
                props.setPostsSelected(selectedPostsArr)
                setTimeout(()=>{
                    document.querySelector('.BlogPage__tags').scrollIntoView({behavior:'smooth'})
                },0)

            }else{
                //hide all selcted posts
                props.setPostsSelected(false);
                setTimeout(()=>{
                    document.querySelector('.BlogPage__tags').scrollIntoView({behavior:'auto'})
                },0)
            }



        }
    }
    function tagsSelected(){
        const tagsSelected = document.querySelectorAll('.BlogPage__tags button.selected');
        return tagsSelected.length;

    }

    return(
        <div className="BlogPage__tags" onClick={handleClick}>
            <div className="wrapper">
                <div className="Blog__divider darker"> Tags</div>
                {tagsList}
            </div>
        </div>
    )
}

export default Tags;
