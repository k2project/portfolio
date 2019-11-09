import React from 'react';
import LinkNewTab from './../../components/LinkNewTab';
import Stickers from './../../components/Stickers/Stickers';
import file from './../../media/blog/file.png';
import reactContextVid from './../../media/blog/reactContextVid.gif';
import {Fun, Tab, CurlyBrackets, SqrBrackets, Brackets, Tags, Div} from './editor/editor';

const post3={
    id:'3',
    featured:false,
    title:'React Context Cheat Sheet',
    subtitle:'What\'s new in React?',
    date:'2019-10-08',
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
                UserContext.displayName = 'UserContext'; * <br/>
                export const UserProvider = UserContext<span className="color_themed_secondary">.Provider</span>; <br/>
                export const UserConsumer = UserContext<span className="color_themed_secondary">.Consumer</span>; <br/>
                export default UserContext; <br/>
            </p>

        </div>
        <div className="Post_card">
            <p><img src={file} alt="" className="Post_card_imgSmall"/> <i>App.js</i></p>
            <p>
                import React, <CurlyBrackets>useState</CurlyBrackets> from 'react';<br/>
                import <CurlyBrackets> UserProvider </CurlyBrackets> from './UserContext';
            </p>
            <p>
                <Fun name="App">
                    <Tab> const user = <CurlyBrackets>...</CurlyBrackets></Tab><br/>
                    <Tab> const <SqrBrackets> currentUser, setCurrentUser</SqrBrackets> = useState<Brackets> user </Brackets></Tab><br/>
                    <Tab>return <Brackets><br/>
                            <Tab><Tags> UserProvider value=<CurlyBrackets>currentUser</CurlyBrackets></Tags>
                            ...
                            <Tags>/ UserProvider</Tags></Tab>
                        <br/></Brackets>
                    </Tab>
                </Fun>
            </p>

        </div>
        <div className="Post_card">
            <p><b>SUBSCRIBE TO CONTEXT WITHIN A FUNCTIONAL COMPONENT</b></p>
            <p><img src={file} alt="" className="Post_card_imgSmall"/> <i>Page.js</i></p>
            <p>
                import React, <CurlyBrackets>useContext</CurlyBrackets> from 'react';<br/>
                import <CurlyBrackets> UserConsumer </CurlyBrackets> from './UserContext';
            </p>
            <p className="Post_card_divider"></p>
            <p>
                <Fun name="Page">
                    <Tab>return <Brackets><br/>
                            <Tab><Tags> UserConsumer</Tags><br/>
                            <Tab><CurlyBrackets> currentUser => <Div> <CurlyBrackets>currentUser.name</CurlyBrackets> </Div></CurlyBrackets></Tab><br/>
                            <Tags>/ UserConsumer</Tags></Tab>
                        <br/></Brackets>
                    </Tab>
                </Fun>
            </p>
            <p className="Post_card_divider"></p>
            <p>
                <Fun name="Page">
                    <Tab>
                        <b className="color_themed_primary">const currentUser = useContext<Brackets>UserContext</Brackets></b>
                    </Tab><br/>
                    <Tab>return <Brackets><br/>
                        <Tab><Div> <CurlyBrackets>currentUser.name</CurlyBrackets> </Div></Tab><br/>
                    </Brackets>
                    </Tab>
                </Fun>
            </p>

        </div>
        <div className="Post_card">
            <p><b>SUBSCRIBE TO CONTEXT WITHIN A CLASS COMPONENT</b></p>
            <p><img src={file} alt="" className="Post_card_imgSmall"/> <i>Page.js</i></p>
            <p>
                import React, <CurlyBrackets>Component</CurlyBrackets> from 'react';<br/>
            </p>
            <p className="Post_card_divider"></p>
            <p>
                class Page extends Component<CurlyBrackets><br/>
                    <Tab>render<Brackets></Brackets><CurlyBrackets><br/>
                    <Tab>return<Brackets><br/>
                        <Tab><Tags>UserConsumer</Tags></Tab><br/>
                            <Tab>
                                <Tab><CurlyBrackets> props => <Div> <CurlyBrackets>props.name</CurlyBrackets> </Div>
                                </CurlyBrackets>
                                </Tab><br/>
                            </Tab><br/>
                        <Tab><Tags>/UserConsumer</Tags></Tab>
                    <br/></Brackets></Tab>
                    <br/></CurlyBrackets></Tab>
                <br/></CurlyBrackets>
            </p>
            <p className="Post_card_divider"></p>
            <p>
                class Page extends Component<CurlyBrackets><br/>
                    <Tab>componentDidMount<Brackets></Brackets><CurlyBrackets><br/>
                        <Tab>const currentUser = this.context; </Tab>
                    <br/></CurlyBrackets></Tab>
                <br/></CurlyBrackets>

            </p>
            <p><b className="color_themed_primary">Page.contextType = UserContext;</b></p>

        </div>

        <p>*Context object accepts a <b>displayName</b> string property. React DevTools uses this string to determine what to display for the context. <i><small> Egzample above will print in DevTools "UserContext.Provider" accordingly.</small></i>.</p>


        <p className="Post_subtitle">Context in a working example.</p>
        <p>A demo of a very simplified version of login page using React's Context . The code is available at <LinkNewTab link={{href:'https://github.com/k2project',text:'my GitHub account'}}/>.</p>
        <div className="Post__imgContainer">
            <img src={reactContextVid} alt="react context in working example gif"/>
            <Stickers git={'https://github.com/k2project/react_context_example'}/>
        </div>


    </div>),

}
export default post3;
