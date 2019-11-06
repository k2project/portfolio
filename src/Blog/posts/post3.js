import React from 'react';

import file from './../../media/blog/file.png';

const post3={
    id:'3',
    featured:false,
    title:'React Context Cheat Sheet',
    subtitle:'What\'s new in React?',
    date:'2019-10-06',
    image:{
        path:'react.png',
        position:'right center '
    },
    tags:['React', 'Cheat Sheet'],
    body:(<div className="Post_body">
        <p className="Post_subtitle">Context provides a way to pass data through the component tree without having to pass props down manually at every level (React Doc).</p>

        <p>Context is designed to share data that can be considered “global” for a tree of React components. It should be primarily used when some data needs to be accessible by many components at different nesting levels.</p>

        <p><b>Remember!</b> If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>


        <div className="Post_card">
            <p><img src={file} alt="" className="Post_card_imgSmall"/> <i>UserContext.js</i></p>
            <p>
                const UserContext = <span className="color_themed_primary">React.createContext( &#123; &#125; )</span>; <br/>
                export const UserProvider = UserContext<span className="color_themed_secondary">.Provider</span>; <br/>
                export const UserConsumer = UserContext<span className="color_themed_secondary">.Consumer</span>; <br/>
                export default UserContext; <br/>
            </p>

        </div>
        <div className="Post_card">
            <p><img src={file} alt="" className="Post_card_imgSmall"/> <i>App.js</i></p>
            <p>import &#123; UserProvider &#125; from '/.UserContext';</p>
            <p>
                function App( )&#123; <br/>
                <span className="tab"> const user = &#123; ... &#125;</span><br/>
                <span className="tab"> return(</span><br/>
                {/* <span className="tab2">&lsaquo;UserProvider value=&#123; user &#125;&rsaquo;</span><br/>
                <span className="tab">)</span><br/> */}
                &#125;<br/>
            </p>

        </div>


    </div>),

}
export default post3;
