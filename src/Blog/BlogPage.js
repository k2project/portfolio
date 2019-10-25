import React from 'react';

import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';


function BlogPage(props) {
    const cls = props.cls? props.cls : '';
    return(
        <div className={"BlogPage "+cls}>
            <Header/>
            <div className="BlogPage_body">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default BlogPage;
