import React, { useState } from 'react';
import './Button.scss';

// function Button(props) {
//     let btnClass = props.centered ? 'Button Button_centered' : 'Button';
//     btnClass = props.secondary ? `${btnClass} secondary` : btnClass;

//     return (
//         <button
//             className={btnClass}
//             data-gen={props.dataSet ? props.dataSet : null}
//             aria-pressed={props.toggle ? 'false' : undefined}
//         >
//             <span className='Button_span_top'></span>
//             <span className='Button_span_bottom'></span>
//             <span className='Button_unhovered'>
//                 <span className='Button_content'>{props.children}</span>
//             </span>
//             <span className='Button_hovered' aria-hidden='true'>
//                 <span className='Button_content'>{props.children}</span>
//             </span>
//             {props.toggle && (
//                 <span className='Button_toggle' aria-hidden='true'>
//                     &times;
//                 </span>
//             )}
//         </button>
//     );
// }

// export default Button;

export default function Button({ data: { value, updateSelection } }) {
    let [clicked, toggleClickedState] = useState(false);
    let [selectedArray, updateSelectedArray] = useState([]);
    let active = '';
    function handleClick(e) {
        updateSelectedArray(updateSelection(value));
        //    updateSelection(value);
        e.target.closest('.btn').classList.toggle('btn--is-active');
        toggleClickedState(!clicked);
    }
    function handleOnFocus(e) {
        e.target.closest('.btn').classList.add('btn--in-focus');
    }
    function handleOnBlur(e) {
        e.target.closest('.btn').classList.remove('btn--in-focus');
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
                    <span className='sr-only'>
                        . Other items selected:
                        {selectedArray.length > 0
                            ? selectedArray.toString()
                            : 'none'}
                    </span>
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
