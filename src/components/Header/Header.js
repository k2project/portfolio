import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';


function Header() {
    function scrollToHash(e){
        e.preventDefault();
        const hash = e.target.getAttribute('href');
        document.querySelector(hash).scrollIntoView({behavior:'smooth'});
    }
  return (
    <header className="Header">
        <nav>
            <NavLink exact to={'/'} className="link_portfolio">portfolio</NavLink>
            <a href="#skills" onClick={scrollToHash}>skills</a>
            <a href="#projects" onClick={scrollToHash}>projects</a>
            <NavLink  to={'/blog'} className="link_blog">blog</NavLink>
            <a href="#resume" className="link_resume" onClick={scrollToHash}>resume</a>
            <a href="https://github.com/k2project" target="_blank" rel="noopener noreferrer">
                gitHub
                <span className="sr-only">external link</span>

            </a>
            <a href="https://twitter.com/_k2project" target="_blank" rel="noopener noreferrer" className="link_twitter">
                twitter
                <span className="sr-only">external link</span>
            </a>
        </nav>
    </header>
  );
}

export default Header;
