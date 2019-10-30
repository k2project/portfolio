import React from 'react';

const post2={
    id:'2',
    featured:false,
    title:'Test',
    subtitle:'JavaScript\'s Interview Questions And Answers.',
    date:'2019-10-30',
    image:{
        path:'js.png',
        position:'right center '
    },
    tags:['JavaScript', 'Q&A'],
    body:(<div className="Post_body">
        <p className="Post_subtitle">Q: Test?</p>

        <p><b>A:</b> Test.</p>

    </div>),

}
export default post2;
