import React from 'react';
import './Resume.scss';
import Button from './../../components/Button/Button';
import KrisKopczynskiResume from './../../media/KrisKopczynskiResume.pdf';

function Resume() {
  return (
    <div className="Resume" id="resume">
        <p className="p_larger">Let's make the internet a better place together!</p>
        <Button centered>
            <a href={KrisKopczynskiResume} download className="fill fill_centered">
                Download Resume
            </a>
        </Button>
    </div>
  );
}

export default Resume;
