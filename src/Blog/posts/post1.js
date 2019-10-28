import React from 'react';

const post1={
    id:'1',
    featured:true,
    title:'Web development with accessibility in mind...',
    subtitle:'Why it is important to make sure that everyone is included!',
    date:'2019-10-24',
    image:{
        path:'post1.jpeg',
        position:'right center '
    },
    body:(<div className="Post_body">
        <p className="Post_subtitle">Mea culpa of self-taught web developer.</p>

        <p>As a self-taught web developer, I'm guilty of many coder's sins. However, not until very recently I have realised that my biggest wrongdoing was neglecting the semantic aspect of my code in favour of design and/or making my work easier. How many of us hate the default styling of Html button tag? I would very often favour styling div element with a button class as prefered solution. And that's only one of many... But why is that so bad?</p>

        <p className="Post_subtitle">awakening...</p>

        <p>Last month I have attended React Meeting group in Edinburgh where I was able to  listen to <b>Kathleen McMahon's </b>, a senior front engineer from O'Reilly Media, talk on <a href="https://noti.st/resource11/MZsVDq"><i>Accessibility-flavored React components make your design system delicious!</i></a>. It has opened my eyes to two things. First of all, to how important it is to stick to the basics rules of coding. And secondly, to how often we forget to include all users in our design thoughts. By giving up the default HTML button tag, I have made it impossible for people with certain disabilities to use my website. </p>

        <p>Let's face it, there are not many tutorials for beginners out there that would emphasise the importance of the accessibility best practices. I get that at this stage of learning particularly, it is hard to implement that in the lectures due to the amount of information one wants to pass on so the content doesn't fell overwhelming. Also, it's not my intention to critise any of the tutors out there, for many of whom I have great respect and eternal gratitude for the hard work they do. My point is, that I would like to raise awareness of accessibilty so that we can tear down the accessibility barriers that make websites difficult or impossible for some people to use.  </p>

        <p className="Post_subtitle">Accessibility Standards and Guidelines.</p>

        <p>These are guidelines that govern how accessibility is achieved while building for and using the web. These ensure that people with a diverse range of hearing, movement, sight, and cognitive ability can use the web. Making the web accessible benefits individuals, businesses, and society as it makes us all feel included. Accessibility is essential for developers and organizations that want to create high-quality websites and web tools, and not exclude people from using their products and services. </p>

        <div className="Post_card">
            <p><b>WCAG:</b> The Web Content Accessibility Guidelines provides guidelines for creating accessible web sites. WCAG is developed through the W3C process in cooperation with individuals and organisations around the world, with a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organisations, and governments internationally.</p>
            <p>    <b>WAI-ARIA:</b> The Web Accessibility Initiative — Accessible Rich Internet Applications document contains techniques for building fully accessible JavaScript widgets. It especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies like React.</p>
        </div>


        <p className="Post_subtitle"> Let's the learning commence!</p>

        <p>According to WAI many aspects of accessibility are fairly easy to understand and implement. However, some solutions can be more complex and may need more knowledge and work to implement. Over the next few weeks, I will try to tackle as many challenges as possible in a bid to make my code in line with international web standards define for accessibility.</p>
    </div>),

}
export default post1;
