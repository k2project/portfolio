import React from 'react';

import Portfolio from './Portfolio/Portfolio';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path={`/`} component={Portfolio}/>
            </Switch>
       </Router>

    );
}

export default App;
