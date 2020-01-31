import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Portfolio from './Portfolio/Portfolio';
import Blog from './Blog/Blog';
import Post from './Blog/Post/Post';




function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <SkipToMainContent/>
            <Switch>
                <Route exact path={`/`} component={Portfolio}/>
                <Route  exact path={`/blog`} component={Blog}/>
                <Route  exact path={`/blog/:post`} component={Post}/>
                <Redirect from='*' to='/' />
            </Switch>
            
       </Router>

    );
}

export default App;

function SkipToMainContent(){
    function scrollToHash(e){
        e.preventDefault();
        const hash = e.target.getAttribute('href');
        document.querySelector(hash).scrollIntoView();
        e.target.blur();
    }
  
 
    return(
        <div>
           {/* element nit tabindex for click to work on focus */}
            <a href="#main-content" 
                className="sr-only sr-only--is-focusable" 
                onClick={scrollToHash}
                tabIndex="0"
            >Skip to main content</a>
        </div>
    )
}