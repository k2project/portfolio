import React from 'react';

const post1={
    id:'1',
    featured:true,
    title:'Web development with accessibility in mind...',
    subtitle:'Why it is important to make sure that everyone is included!',
    date:'2019-10-28',
    image:{
        path:'post1.jpg',
        position:'right center '
    },
    tags:['Accessibility', 'Design', 'UX', 'UI'],
    body:(<div className="Post_body">
        <p className="Post_subtitle">Mea culpa of the self-taught web developer.</p>

        <p>As a self-taught web developer, I'm guilty of many coder's sins. However, not until very recently I have realised that my biggest wrongdoing was neglecting the semantic aspect of my code in favour of design and/or making my work easier. How many of us hate the default styling of Html button tag? I would very often favour styling div element with a button class as prefered solution. And that's only one of many... But why is that so bad?</p>

        <p className="Post_subtitle">Awakening...</p>

        <p>Last month I have attended React Meeting group in Edinburgh where I was able to  listen to <b>Kathleen McMahon's </b>, a senior front engineer from O'Reilly Media, talk on <a href="https://noti.st/resource11/MZsVDq"><i>Accessibility-flavored React components make your design system delicious!</i></a>. It has opened my eyes to two things. First of all, to how important it is to stick to the basics rules of coding. And secondly, to how often we forget to include all users in our design thoughts. By giving up the default HTML button tag, I have made it impossible for people with certain disabilities to use my website. How could that happen? </p>

        <p>Certainly, it's not out of the lack of sympathy. I just think that in life we tend to take everything for granted, so unless you get to meet people who raise the awareness of disable users on the web you become unintentionally ignorant to the issue. As junior web developers, we become so preoccupied with mastering new skills that it is easy to forget the real purpose of web design. It should convey a message preferable in the most simple and intuitive format. That's why it is crucial to educate web developers on the importance of the accessibility best practices so that we can tear down the barriers that make websites difficult or impossible for some people to use. We definitely need more advocates like Kathleen! </p>


        <p className="Post_subtitle">Accessibility Standards and Guidelines.</p>

        <p>There are guidelines that govern how accessibility is achieved while building for and using the web. These ensure that people with a diverse range of hearing, movement, sight, and cognitive ability can use the web. Making the web accessible benefits individuals, businesses, and society as it makes us all feel included. Accessibility is essential for developers and organizations that want to create high-quality websites and web tools, and not exclude people from using their products and services. </p>

        <div className="Post_card">
            <p><b>WCAG:</b> The Web Content Accessibility Guidelines provides guidelines for creating accessible web sites. WCAG is developed through the W3C process in cooperation with individuals and organisations around the world, with a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organisations, and governments internationally.</p>
            <p>    <b>WAI-ARIA:</b> The Web Accessibility Initiative — Accessible Rich Internet Applications document contains techniques for building fully accessible JavaScript widgets. It especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies like React.</p>
        </div>


        <p className="Post_subtitle"> Let the learning commence!</p>

        <p>According to WAI many aspects of accessibility are fairly easy to understand and implement. However, some solutions can be more complex and may need more knowledge and work to implement. Over the next few weeks, I will try to tackle as many challenges as possible in a bid to make my code in line with international web standards define for accessibility.</p>
    </div>),

}
export default post1;
