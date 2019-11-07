import React from 'react';

import file from './../../media/blog/file.png';
import {Fun, Tab, CurlyBrackets, Brackets, Tags} from './editor/editor';

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
                const UserContext = <span className="color_themed_primary">React.createContext<Brackets><CurlyBrackets></CurlyBrackets></Brackets></span>; <br/>
                export const UserProvider = UserContext<span className="color_themed_secondary">.Provider</span>; <br/>
                export const UserConsumer = UserContext<span className="color_themed_secondary">.Consumer</span>; <br/>
                export default UserContext; <br/>
            </p>

        </div>
        <div className="Post_card">
            <p><img src={file} alt="" className="Post_card_imgSmall"/> <i>App.js</i></p>
            <p>import <CurlyBrackets> UserProvider </CurlyBrackets> from './UserContext';</p>
            <p>
                <Fun name="App">
                    <Tab> const user = <CurlyBrackets>...</CurlyBrackets></Tab><br/>
                    <Tab>return <Brackets><br/>
                            <Tab><Tags> UserProvider value=<CurlyBrackets>user</CurlyBrackets></Tags>
                            ...
                            <Tags>/ UserProvider</Tags></Tab>
                        <br/></Brackets>
                    </Tab>
                </Fun>
            </p>

        </div>


    </div>),

}
export default post3;
