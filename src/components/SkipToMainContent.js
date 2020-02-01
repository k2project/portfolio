import React from 'react';



function SkipToMainContent(){
    function scrollToHash(e){
        e.preventDefault();
        const hash = e.target.getAttribute('href');
        document.querySelector(hash).scrollIntoView();
        e.target.blur();
    }

    return(
        <a href="#main-content"
            className="sr-only sr-only--is-focusable"
            onClick={scrollToHash}
            tabIndex="0"
        >Skip to main content</a>
    )
}

export default SkipToMainContent;
