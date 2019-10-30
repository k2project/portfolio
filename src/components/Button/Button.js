import React from 'react';
import './Button.scss';

function Button(props) {
    let btnClass = props.centered? 'Button Button_centered' : 'Button';
    btnClass = props.secondary? `${btnClass} secondary` : btnClass;

  return (
    <button className={btnClass}
        data-gen={props.dataSet? props.dataSet : null}
        aria-pressed={props.toggle? 'false' : undefined}>
            <span className="Button_span_top"></span>
            <span className="Button_span_bottom"></span>
            <span className="Button_unhovered">
                <span className="Button_content">
                    {props.children}
                </span>
            </span>
            <span className="Button_hovered" aria-hidden="true">
                <span className="Button_content">
                    {props.children}
                </span>
            </span>
            {props.toggle && <span className="Button_toggle">&times;</span>}
    </button>
  );
}

export default Button;
