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
            const offset = document.documentElement.clientHeight / 3;
            let top = offset - sectionScrollTop;

            //top === 0 : anim element half way from top of the screen
            //past this point: top > 0
            //animated-section__heading styling: top:50%
            //animated-section__heading styling: transform: translateY(-50%);
            heading.style.top = getNumBetweenRangeOnly(top, 0, 100, 10) + '%';
            //heading fades in when top reaches 30
            //heading fades out when top > 40 after distance of 20
            let headingOpacity = top < 30 ? top / 30 : 1 - (top - 40) / 20;
            heading.style.opacity = getNumBetweenRangeOnly(
                headingOpacity,
                0,
                1
            );
            //text fades in after top > 40
            body.style.opacity =
                top < 40 ? 0 : getNumBetweenRangeOnly((top - 40) / 100, 0, 1);
            //text gets fixed when top > 100
            body.style.top = top < 100 ? (100 - top) * 2 + 'px' : '0px';
        });
    }
    function getNumBetweenRangeOnly(value, min, max, offset = 0) {
        return value < min ? min : value > max ? max : value + offset;
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
