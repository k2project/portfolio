import React, { useState, useEffect } from 'react';
import './Button.scss';

export default function Button({
    data: { name, updateSelection, selectionArr }
}) {
    let [clicked, toggleClickedState] = useState(false);
    let [active, setActive] = useState('');

    function handleClick(e) {
        //onmousedown e stops focus e
        e.preventDefault();
        if (updateSelection) updateSelection(name);
        e.target.closest('.btn').classList.toggle('btn--is-active');
        toggleClickedState(!clicked);
    }
    function onEnterClick(e) {
        if (e.keyCode === 13) {
            if (updateSelection) updateSelection(name);
            e.target.classList.toggle('btn--is-active');
            toggleClickedState(!clicked);
        }
        return;
    }
    function handleOnFocus(e) {
        e.target.classList.add('btn--in-focus');
        const animSection = e.target.closest('.animated-section');
        if (animSection) animSection.scrollIntoView();
    }
    function handleOnBlur(e) {
        e.target.classList.remove('btn--in-focus');
    }
    useEffect(() => {
        //to keep tab on active btns on resize
        if (selectionArr && selectionArr.includes(name)) {
            setActive('btn--is-active');
        }
    }, [active, name, selectionArr]);

    return (
        <button
            className={'btn ' + active}
            onMouseDown={handleClick}
            onKeyDown={onEnterClick}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
        >
            {/* main content */}
            <span className='btn__content-box'>
                <span className='btn__content'>
                    <span className='sr-only'>
                        {clicked ? 'Unselect:' : 'Select:'}
                    </span>
                    {name}
                    {/* additional aria txt updated dynamically */}
                    <span className='sr-only btn__content-dynamic'></span>
                </span>
            </span>
            {/* animated elements */}
            <span className='btn___anim-top'></span>
            <span className='btn___anim-btm'></span>
            <span className='btn__content-box--animated'>
                <span className='btn__content' aria-hidden='true'>
                    {name}
                </span>
            </span>
        </button>
    );
}
