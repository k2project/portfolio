import React, { useState, useEffect } from 'react';
import './AccessibilitySettings.scss';

export default function AccessibilitySettings() {
    let [on, toggleAnima] = useState(true);
    function toggleAnimations(e) {
        toggleAnima((on = !on));
        const btn = e.target.closest('.btn-toggle');
        btn.classList.toggle('btn-toggle--animation-is-on');
    }
    useEffect(() => {
        on
            ? localStorage.removeItem('anim-off')
            : localStorage.setItem('anim-off', 'true');
    });
    function handleOnFocus(e) {
        e.target.classList.add('accessibility-settings--in-focus');
    }
    function handleOnBlur(e) {
        e.target.classList.remove('accessibility-settings--in-focus');
    }
    return (
        <div
            className='accessibility-settings'
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
        >
            <p id='web-access-settings'>ACCESSIBILITY SETTINGS.</p>
            <ul aria-labelledby='web-access-settings'>
                <li>
                    Website's animations :
                    <button
                        className='btn-toggle btn-toggle--animation-is-on'
                        onClick={toggleAnimations}
                    >
                        <span className='btn-toggle__switch-container'>
                            <span className='sr-only'>
                                Toggle website's animations. Right now they are{' '}
                            </span>
                            <span className='btn-toggle__text'>
                                {on ? 'ON' : 'OFF'}
                            </span>

                            <span className='btn-toggle__switch-btn'></span>
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    );
}
