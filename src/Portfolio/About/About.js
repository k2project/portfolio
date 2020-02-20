import React from 'react';
import './About.scss';
import '../../components/AnimatedSection/AnimatedSection';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

function About() {
    return (
        <section className='about' id='about'>
            <div className='about__heading'>
                <div className='wrapper'>
                    <h1>
                        Edinburgh based front-end web developer passionate about
                        coding with{' '}
                        <span className='color_themed_secondary'>React</span>.{' '}
                        <br />
                        <span className='color_themed_secondary'>
                            Web Accessibility
                        </span>
                        , Usability, and Inclusion advocate.
                    </h1>
                </div>
            </div>
            <div className='about__desc'>
                <div className='wrapper'>
                    <AnimatedSection
                        title='Find out more about me...'
                        subtitle='Keep scrolling down.'
                    >
                        <p>
                            {' '}
                            <b>Hello, I'm Kris! </b>
                        </p>
                        <p>
                            I take proud in being self-taught developer. I enjoy
                            turning complex problems into simple, beautiful and
                            intuitive applications. Currrently learning how to
                            make my work a better experience to every user!
                        </p>
                        <p>
                            <b>On the lookout for a team.</b> A team that I can
                            learn from, grow with and contribute to it success.{' '}
                        </p>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

export default About;
