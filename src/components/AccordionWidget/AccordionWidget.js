import React,{useState} from 'react';
import './AccordionWidget.scss';

function AccordionWidget(props){
  let {heading,title,subtitle,color}=props.data;
  let CustomHeading = 'h4';
  if(!isNaN(heading) && heading>1 && heading<7){
    CustomHeading = 'h'+ heading;
  }
  color = color? color : null;

  
    return(
        <article className="accordion-widget">
          <details>
            <summary className={"accordion-widget__head accordion-widget__head--"+color}>
              <CustomHeading className="accordion-widget__title">{title}</CustomHeading>
              {subtitle && <div className="accordion-widget__title">{subtitle}</div>}
            </summary>
            <div className="accordion-widget__body">
              {props.children}
            </div>
          </details>
        </article>
    )
}
export default AccordionWidget;
