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
        <span>
            function {props.name}<Brackets></Brackets><CurlyBrackets>
                <br/>
                <span>
                    {props.children}
                </span>
                <br/>
            </CurlyBrackets>;
        </span>

    )

}
function Tab(props){
    return <span className="editor__tab">{props.children}</span>
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
