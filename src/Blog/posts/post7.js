import React from 'react';

const coding_module={
    title:'Coding best practise',
    completed:false,
    content:[
        {
            title:'BEM as my prefered CSS methodology',
            completed:true,
            reference:[]
        },
        {
            title:'Data structuring and algorythms',
            completed:true,
            reference:[]
        },
        {
            title:'Web accesibility best practise',
            completed:true,
            bold: true,
            reference:[]
        },
        {
            title:'Designing accessable and reusable React components',
            completed:false,
            reference:[]
        },
        {
            title:'Refactoring existing applicatins',
            completed:false,
            reference:[]
        }
    ]
};
const mern_module={
    title:'MERN Application with Authorisation',
    completed:true,
    content:[
        {
            title:'Project: Pdf File Invoice Generator',
            completed:false,
            reference:[]
        }
    ]
};
const testing_module={
    title:'Testing best practise',
    completed:false,
    content:[]
};
const bootcamp_moduls=[
    coding_module,
    mern_module,
    testing_module,
];
const ModuleContent = props =>{
    const {title, completed, bold, reference} = props.content;
    return <div className="module__content">
        <div className={completed? "module__tickBox_sml completed" :"module__tickBox_sml"}>
            <span>&#10004;</span>
        </div>
        <div className={bold? "module__content_title bold" :"module__content_title"}>{title}</div>
        { reference.length>0 && <div className="module__content_btn">
            <button></button>
        </div>}
    </div>
}
const Module = props =>{
    const {title, completed, bold, content} = props.module;
    return <div className="module">
        <div className={completed? "module__tickBox completed" :"module__tickBox"}>
            <span>&#10004;</span>
        </div>
        <div className={bold? "module__title bold" :"module__title"}>{title}</div>
        { content.length>0 && content.map(content=><ModuleContent content={content}/>)}
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
        <p>I have recently started job hunting for the position of the front end web developer. Having secure a few interviews has been a great experience. Getting rejected is never fun! However even though you didn’t actually get the position, it is your chance to put your money where your mouth is. Anyone can say that they handle constructive criticism well. But, reaching out and proactively asking for feedback proves that you’re always looking for ways that you can develop, learn, and grow. On that note: here is my personalised bootcamp plan based on latest feedback. </p>

        <p>Positive feedback vs constructive.Being a selftaught developer ... bad habits and luck of team experience. My primary goal is to correct and improve my codding practise. I'm also going to expand my skills of backend experience. ...internship / preferable with an organisation for disable </p>

        {bootcamp_moduls.map(module=><Module module={module}/>)}

    </div>),

}
export default post7;
