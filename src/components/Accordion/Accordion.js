import React from 'react';
import './Accordion.scss';

function Accordion(props){
  let {heading,title,subtitle,color}=props.data;
  let CustomHeading = 'h4';
  if(!isNaN(heading) && heading>1 && heading<7){
    CustomHeading = 'h'+ heading;
  }
  color = color? color : null;

  function toggleContent(e){
    let target = e.target.closest('.accordion__head');
    target.nextElementSibling.classList.toggle("accordion__body--is-shown");
    target.firstElementChild.classList.toggle("accordion__arrow--is-rotated");
  }
    return(
        <div className="accordion">
          <div className={"accordion__head accordion__head--"+color}
            onClick={toggleContent}>
            <button className="accordion__arrow" title="Open content">
            &#10148;</button>
            <CustomHeading className="accordion__title">{title}</CustomHeading>
            {subtitle}
          </div>
          <div className="accordion__body">
            {props.children}
          </div>
        </div>
    )
}
export default Accordion;
