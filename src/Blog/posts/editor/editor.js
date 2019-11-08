import React from 'react';
import './editor.scss';

//  &#40; &#41;       =>()
//  &#123; &#125;     =>{}
//  &#91; &#93;     =>[]
//  &#60; &#62;       =><>

function Div(props){
    return <span>
        <span>&#60; div &#62;</span>
        {props.children}
        <span>&#60; /div &#62;</span>
    </span>
}
function Tags(props){
    return <span>&#60; {props.children} &#62;</span>
}
function CurlyBrackets(props){
    return <span>&#123; {props.children} &#125;</span>
}
function SqrBrackets(props){
    return <span>&#91; {props.children} &#93;</span>
}
function Brackets(props){
    return <span>&#40; {props.children} &#41;</span>
}

function Fun(props){
    return(
        <div>
            function {props.name}<Brackets></Brackets><CurlyBrackets>
                <div>
                    {props.children}
                </div>
            </CurlyBrackets>;
        </div>

    )

}
function Tab(props){
    return <div className="editor__tab">{props.children}</div>
}

 export {
     Fun,
     Tab,
     Brackets,
     CurlyBrackets,
     SqrBrackets,
     Tags,
     Div,
 };
