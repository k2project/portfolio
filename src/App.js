import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Portfolio from './Portfolio/Portfolio';
import Blog from './Blog/Blog';
import Post from './Blog/Post/Post';




function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path={`/`} component={Portfolio}/>
                <Route  exact path={`/blog/`} component={Blog}/>
                <Route  exact path={`/blog/:post`} component={Post}/>
                <Route  component={Portfolio}/>
            </Switch>
       </Router>

    );
}

export default App;
