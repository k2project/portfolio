import React from 'react';
import './AccordionWidget.scss';

function AccordionWidget(props) {
     let { heading, title, subtitle, styling } = props.data;
     let CustomHeading = 'h4';
     if (!isNaN(heading) && heading > 1 && heading < 7) {
          CustomHeading = 'h' + heading;
     }
     styling = styling ? styling : null;


     return (
          <details className={"accordion-widget accordion-widget--" + styling}>
               <summary className="accordion-widget__head">
                    <CustomHeading className="accordion-widget__title">{title}</CustomHeading>
                    {subtitle && <div className="accordion-widget__title">{subtitle}</div>}
               </summary>
               <div className="accordion-widget__body">
                    {props.children}
               </div>
          </details>
     )
}
export default AccordionWidget;
