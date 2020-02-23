import React, { useState } from 'react';
import './Button.scss';

export default function Button({ data: { value, updateSelection } }) {
    let [clicked, toggleClickedState] = useState(false);

    function handleClick(e) {
        updateSelection(value);
        e.target.closest('.btn').classList.toggle('btn--is-active');
        toggleClickedState(!clicked);
    }
    function handleOnFocus(e) {
        e.target.classList.add('btn--in-focus');
        e.target.closest('.animated-section').scrollIntoView();
    }
    function handleOnBlur(e) {
        e.target.classList.remove('btn--in-focus');
    }

    return (
        <button
            className='btn'
            onClick={handleClick}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
        >
            {/* main content */}
            <span className='btn__content-box'>
                <span className='btn__content'>
                    <span className='sr-only'>
                        {clicked ? 'Unselect:' : 'Select:'}
                    </span>
                    {value}
                    {/* additional aria txt updated dynamically */}
                    <span className='sr-only btn__content-dynamic'></span>
                </span>
            </span>
            {/* animated elements */}
            <span className='btn___anim-top'></span>
            <span className='btn___anim-btm'></span>
            <span className='btn__content-box--animated'>
                <span className='btn__content' aria-hidden='true'>
                    {value}
                </span>
            </span>
        </button>
    );
}
