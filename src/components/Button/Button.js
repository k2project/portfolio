import React from 'react';
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
    function handleClick() {
        updateSelection(value);
    }
    return (
        <button className='btn' onClick={handleClick}>
            <InnerBtnAnimated />
            <span className='btn__name'>{value}</span>
        </button>
    );
}

function InnerBtnAnimated() {
    return (
        <span className='btn-inner'>
            <span className='btn-inner__top'></span>
            <span className='btn-inner__btm'></span>
        </span>
    );
}
