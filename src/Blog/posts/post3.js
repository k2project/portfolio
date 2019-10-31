import React from 'react';

const post3={
    id:'3',
    featured:false,
    title:'Test. Post 3.',
    subtitle:'JavaScript\'s Interview Q&A.',
    date:'2019-10-31',
    image:{
        path:'js.png',
        position:'right center '
    },
    tags:['JavaScript', 'Q&A'],
    body:(<div className="Post_body">
        <p className="Post_subtitle">Q: Test?</p>

        <p><b>A:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsum unde repellendus, error perferendis fuga, voluptatum iure odio asperiores. Officiis suscipit voluptatem culpa ducimus eveniet maiores, deleniti error molestiae in.</p>

    </div>),

}
export default post3;
