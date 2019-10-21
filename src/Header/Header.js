import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="Header">
        <nav>
            <a href="#skills">skills</a>
            <a href="#projects">projects</a>
            <a href="#resume">resume</a>
            <a href="https://github.com/k2project" target="_blank" rel="noopener noreferrer">
                gitHub
                <span className="sr-only">external link</span>

            </a>
            <a href="https://twitter.com/_k2project" target="_blank" rel="noopener noreferrer">
                twitter
                <span className="sr-only">external link</span>
            </a>
        </nav>
    </header>
  );
}

export default Header;
