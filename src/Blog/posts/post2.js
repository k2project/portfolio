import React from 'react';

const post2={
    id:'2',
    featured:false,
    title:'UNDEFINED vs NOT DEFINED in JS?',
    subtitle:'JavaScript\'s Interview Q&A.',
    date:'2019-10-05',
    image:{
        path:'js.png',
        position:'right center '
    },
    tags:['JavaScript', 'Q&A'],
    body:(<div className="Post_body">
        <p className="Post_subtitle">Q: What's the diffrence between UNDEFINED and NOT DEFINED in JavaScript?</p>

        <p>Something easy but confusing for a begginers to start with. </p>

        <p><b>A: <i>UNDEFINED</i> is a variable that has been declared but not assigned any value. While <i>NOT DEFINED </i> variable hasn't been declared at all. </b> </p>

        <p>Whenever we declare a variable without assigning any value to it, javascript implicitly assigns its value as undefined.</p>

        <div className="Post_card">
            <p>
                let a; <br/>
                console.log( a )  //<b>undefined</b> <br/>
                let arr = [ 1, 2, 3 ]; <br/>
                console.log( arr[ 5 ] ); //<b>undefined</b> <br/>
                let obj =&#123; &#125; <br/>
                console.log( obj.id ); //<b>undefined</b>
            </p>
            <p>
                console.log(x); //<b> ReferenceError: x is not defined</b>
            </p>
            <p className="Post_card_important">
                <span className="important">IMPORTANT</span>
                console.log( b ); //<b>undefined</b> <br/>
                let b = 5; <br/><br/>
                function foo( )&#123; <br/>
                <span className="tab"> console.log(b);</span><br/>
                <span className="tab"> let b = 5;</span><br/>
                &#125;<br/>
                foo( ); //<b>undefined</b>

            </p>
        </div>

        <p className="Post_subtitle">Variable declarations hosting in JS.</p>

        <p>The variable <i>b</i> was printed with <i>undefined</i> value above because of the way variable hoisting works in JavaScript. The variable declarations are processed before code execution takes place. In other words, <b className="color_themed_primary"><i>variable and function declarations are moved to the top of their scope</i></b>. </p>

    </div>),

}
export default post2;
