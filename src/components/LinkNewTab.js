import React from 'react';

function LinkNewTab(props){
    const{icon, text, href, cls, ariaHidden}=props.link;
    return(
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls? cls : null} aria-hidden={ariaHidden? "true":null}>
            {icon && <span>
                <img src={icon} alt=""/>
            </span>}
            {text && <span>{text}</span>}
            <span className="sr-only">external link</span>
        </a>
    )
}
export default LinkNewTab;
