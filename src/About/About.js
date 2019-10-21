import React from 'react';
import './About.scss';

function About() {
  return (
    <div className="About" id="about">
        <div className="wrapper">
            <p className="p_larger">
                <b>
                    Hello!  <br/>
                    I'm Kris, an Edinburgh based front-end web developer passionate about <span className="color_themed_secondary">React</span> and <span className="color_themed_secondary">WebAccessibility</span>.
                </b>
            </p>
            <p className="p_larger">
                     I enjoy turning complex problems into simple, beautiful and intuitive applications. My goal is to make my work a better experience for every user.
            </p>
        </div>
    </div>
  );
}

export default About;
