import React from 'react';

function LinkNewTab(props){
    const{icon, text, href}=props.link;
    return(
        <a href={href} target="_blank" rel="noopener noreferrer">
            {icon && <span>
                <img src={icon} alt=""/>
            </span>}
            {text && <span>{text}</span>}
            <span className="sr-only">links opens in a new tab</span>
        </a>
    )
}
export default LinkNewTab;
