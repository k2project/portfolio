import React from 'react';
import './Resume.scss';
import Button from './../../components/Button/Button';
import KrisKopczynskiResume from './../../media/KrisKopczynskiResume.pdf';

function Resume() {
    const text = 'Download CV';
    return (
        <section className='resume' id='resume'>
            <h2>Let's work together!</h2>
            <a href={KrisKopczynskiResume} download className='resume__link'>
                {/* main content */}
                <span className='link__content-box'>
                    <span className='link__content'>{text}</span>
                    <span className='sr-only'>in pdf format</span>
                </span>
                {/* animated elements */}
                <span className='link___anim-top'></span>
                <span className='link___anim-btm'></span>
                <span className='link__content-box--animated'>
                    <span className='link__content' aria-hidden='true'>
                        {text}
                    </span>
                </span>
            </a>
        </section>
    );
}

export default Resume;
