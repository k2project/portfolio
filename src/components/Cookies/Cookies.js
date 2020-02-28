import React from 'react';
import './Cookies.scss';
import Button from './../Button/Button';

export default function Cookies() {
    function handleClick(e) {
        //onmousedown e stops focus e
        e.preventDefault();
    }
    function onEnterClick(e) {
        if (e.keyCode === 13) {
            handleClick(e);
        }
        return;
    }
    function handleOnFocus(e) {
        e.target.classList.add('btn--in-focus');
    }
    function handleOnBlur(e) {
        e.target.classList.remove('btn--in-focus');
    }
    return (
        <article className='cookies'>
            <div className='cookies__box'>
                <h2>Use of Cookies</h2>
                <p>
                    This website does not use cookies. We only use Local Storage
                    to improve user experience and deliver personalised content.
                    The Local Storage stores the data with no expiration date.
                    Please refer to your browser specifics on how to clear them.{' '}
                </p>
                <Button
                    data={{ name: 'Continue' }}
                    onMouseDown={handleClick}
                    onKeyDown={onEnterClick}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                />
            </div>
        </article>
    );
}
