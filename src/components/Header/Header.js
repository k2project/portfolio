import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

function Header() {
    return (
        <header className='header'>
            <MainNav />
            {/* <NavLink exact to={'/'} className='link_portfolio'>
                    portfolio
                </NavLink> */}
            {/* <a href='#skills' onClick={scrollToHash}>
                    skills
                </a> */}
            {/* <a href='#projects' onClick={scrollToHash}>
                    projects
                </a> */}
            {/* <NavLink to={'/blog'} className='link_blog'>
                    blog
                </NavLink> */}
            {/* <a
                    href='#resume'
                    className='link_resume'
                    onClick={scrollToHash}
                >
                    resume
                </a> */}
            {/* <a
                    href='https://github.com/k2project'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    gitHub
                    <span className='sr-only'>external link</span>
                </a> */}
            {/* <a
                    href='https://twitter.com/_k2project'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link_twitter'
                >
                    twitter
                    <span className='sr-only'>external link</span>
                </a> */}
        </header>
    );
}

export default Header;

function MainNav() {
    function scrollToHash(e) {
        e.preventDefault();
        const hash = e.target.getAttribute('href');
        document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <nav aria-label='website naviagation'>
            <ul className='nav' aria-label='website main menu'>
                <li className='link-portfolio'>
                    <span className='link-portfolio__link'>
                        <NavLink exact to={'/'}>
                            portfolio
                        </NavLink>
                    </span>
                    <ul
                        className='nav__submenu'
                        aria-label='submenu for portfolio page'
                    >
                        <li>
                            {' '}
                            <a href='#skills' onClick={scrollToHash}>
                                skills
                            </a>
                        </li>
                        <li>
                            <a href='#projects' onClick={scrollToHash}>
                                projects
                            </a>
                        </li>
                        <li>
                            <a href='#resume' onClick={scrollToHash}>
                                <abbr title='curriculum vitae'>CV</abbr>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    {' '}
                    <NavLink to={'/notes'}>notePad</NavLink>
                </li>
                <li>
                    {' '}
                    <a
                        href='https://github.com/k2project'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        gitHub
                        <span className='sr-only'>opens in a new tab</span>
                    </a>
                </li>
                <li>
                    {' '}
                    <a
                        href='https://twitter.com/_k2project'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        twitter
                        <span className='sr-only'>opens in a new tab</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
