import React, { useEffect } from 'react';
import './AnimatedSection.scss';

function AnimatedSection({ title, subtitle, children }) {
    function handleAnimationOnScroll() {
        const animatedEls = document.querySelectorAll('.animated-section');
        Array.from(animatedEls).forEach(section => {
            const heading = section.firstElementChild;
            const body = section.lastElementChild;
            const sectionScrollTop = section.getBoundingClientRect().top;
            //offset for animation to start when elemnt appears half way through teh screen
            //takes into account parent's padding
            const offset = document.documentElement.clientHeight / 2;
            let top = offset - sectionScrollTop;
            //top === 0 : anim element half way from top of the screen
            //past this point: top > 0
            //animated-section__heading styling: top:50%
            //animated-section__heading styling: transform: translateY(-50%);

            heading.style.top = top - 20 + '%';
            //heading fades in when top reaches 30
            //heading fades out when top > 60 after distance of 30
            heading.style.opacity =
                top < 30 ? top  / 30 : 1 - (top - 60) / 30;
            //text fades in after top > 50
            body.style.opacity = top < 50 ? 0 : (top - 50) / 100;
            //text gets fixed when top > 100
            body.style.top = top < 100 ? (100 - top) * 2 + 'px' : '0px';
        });
    }
    useEffect(() => {
        window.addEventListener('scroll', handleAnimationOnScroll);
        return () => {
            window.removeEventListener('scroll', handleAnimationOnScroll);
        };
    });
    return (
        <div className='animated-section'>
            <div className='animated-section__heading'>
                <span className='animated-section__sqr'></span>
                <h2>{title}</h2>
                {subtitle && <p>{subtitle}</p>}
            </div>
            <div className='animated-section__body'>{children}</div>
        </div>
    );
}

export default AnimatedSection;
