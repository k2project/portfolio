import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import SkipToMainContent from './components/SkipToMainContent';
import AccessibilitySettings from './components/AccessibilitySettings/AccessibilitySettings';
import Portfolio from './Portfolio/Portfolio';
import Blog from './Blog/Blog';
import Post from './Blog/Post/Post';
import Checklist from './Checklist/Checklist';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className='alert alert--red'>
                <p>
                    <b>THIS WEBSITE IS CURRENTLY UNDER RECONSTRUCTION.</b>{' '}
                </p>
                <p>
                    While I am improving its accessibility some of the features
                    might not be available. <br />
                    Please bear with me and check for updates later.
                </p>
            </div>
            <SkipToMainContent />
            {/* <AccessibilitySettings /> */}
            <Switch>
                <Route exact path={`/`} component={Portfolio} />
                <Route exact path={`/notes`} component={Blog} />
                <Route exact path={`/notes/:post`} component={Post} />
                <Route exact path={`/checklist`} component={Checklist} />
                <Redirect from='*' to='/' />
            </Switch>
        </Router>
    );
}

export default App;
