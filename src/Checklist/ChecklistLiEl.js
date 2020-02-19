import React, { useState, useEffect } from 'react';
import './Checklist.scss';

function ChecklistLiEl(props) {
    const [title, setTitle] = useState('Select item');
    const selectedItemsArr =
        JSON.parse(localStorage.getItem('checklist')) || [];

    function handleClick(e) {
        const btn = e.target.closest('button');
        btn.parentElement.classList.toggle('checklist__item--selected');

        if (btn.parentElement.classList.contains('checklist__item--selected')) {
            setTitle('Unselect item');
            if (!selectedItemsArr.includes(props.id)) {
                selectedItemsArr.push(props.id);
            }
            localStorage.setItem('checklist', JSON.stringify(selectedItemsArr));
        } else {
            setTitle('Select item');
            const index = selectedItemsArr.indexOf(props.id);
            if (index !== -1) selectedItemsArr.splice(index, 1);
            localStorage.setItem('checklist', JSON.stringify(selectedItemsArr));
        }
    }
    useEffect(() => {
        if (selectedItemsArr.includes(props.id)) {
            setTitle('Unselect item');
        }
    }, [selectedItemsArr, props.id]);

    return (
        <li className='checklist__item' id={props.id}>
            <button
                onClick={handleClick}
                //  title={title}
                className='checklist__button'
            >
                <span className='sr-only'>{title}</span>
            </button>
            <span className='checklist__text'>{props.children}</span>
        </li>
    );
}

export default ChecklistLiEl;
