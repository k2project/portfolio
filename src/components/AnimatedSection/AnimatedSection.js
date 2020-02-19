import React, { useEffect } from 'react';
import './AnimatedSection.scss';

function AnimatedSection({ title, subtitle, children }) {
    function handleAnimationOnScroll() {
        const animatedEls = document.querySelectorAll('.animated-section');
        Array.from(animatedEls).forEach(section => {
            const sectionScrollTop = section.getBoundingClientRect().top;
            const heading = section.firstElementChild;
            const body = section.lastElementChild;

            const offset = 300;
            //animated-section__heading styling: top:50%
            //animated-section__heading styling: transform: translateY(-50%);
            let top = offset - sectionScrollTop + 50;
            let opacity = 0;
            if (top < 30) {
                opacity = top / 50 + 1;
            } else {
                opacity = 1 - (top - 30) / 20;
            }
            console.log(top, opacity);

            heading.style.top = top + '%';
            heading.style.opacity = opacity;
            body.style.opacity = top < 60 ? 0 : (top - 60) / 100;
            body.style.top = top < 100 ? 100 - top + 'px' : '0px';

            if (sectionScrollTop < offset) {
                console.log('@@@@@@@@________200');
            }
            if (sectionScrollTop < offset / 2) {
                console.log('________________100');
            }
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
