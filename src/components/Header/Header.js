import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';


function Header() {
  return (
    <header className="Header">
        <nav>
            <NavLink exact to={'/'} className="link_portfolio">portfolio</NavLink>
            <a href="#skills">skills</a>
            <a href="#projects">projects</a>
            <NavLink  to={'/blog'} className="link_blog">blog</NavLink>
            <a href="#resume" className="link_resume">resume</a>
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
