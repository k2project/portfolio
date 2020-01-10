import React from 'react';

const coding_module={
    title:'Coding best practise.',
    completed:false,
    bold:true,
    content:[]
};
const mern_module={
    title:'MERN Application with Authorisation.',
    completed:true,
    content:[]
};
const testing_module={
    title:'Testing best practise.',
    completed:false,
    content:[1,3]
};
const bootcamp_moduls=[
    coding_module,
    mern_module,
    testing_module,
];

const Module = (props) =>{
    const {title, completed, bold, content} = props.module;
    return <div className="module">
        <div className={completed? "module__tickBox completed" :"module__tickBox"}>
            <span>&#10004;</span>
        </div>
        <div className={bold? "module__title bold" :"module__title"}>{title}</div>
        { content.length>0 && <div className="module__content_btn">
            <button>+</button>
        </div>}
    </div>
}

const post7={
    id:'7',
    featured:true,
    title:'My Tailored Web Developer Bootcamp',
    subtitle:'Working on interviews fedback.',
    date:'2020-01-01',
    image:{
        path:'bootcamp.png',
        position:'center '
    },
    tags:['Coding', 'Bootcamp', 'MERN', 'Testing'],
    body:(<div className="Post_body">

        <p className="Post_subtitle">Each interview will bring you one stop closer to your dream job if you are willing to learn from the experience.</p>
        <p>Getting rejected is never fun! However even though you didn’t actually get the position, it is your chance to put your money where your mouth is. Anyone can say that they handle constructive criticism well. But, reaching out and proactively asking for feedback proves that you’re always looking for ways that you can develop, learn, and grow. On that note: here is my personalised bootcamp curriculum based on latest feedback. </p>

        {bootcamp_moduls.map(module=><Module module={module}/>)}

    </div>),

}
export default post7;
