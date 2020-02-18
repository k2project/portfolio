import React from 'react';
import './AccordionWidget.scss';

function AccordionWidget({
    data: { heading, title, subtitle, styling, id },
    children
}) {
    let CustomHeading = 'h4';
    if (!isNaN(heading) && heading > 1 && heading < 7) {
        CustomHeading = 'h' + heading;
    }
    styling = styling ? styling : null;
    const widgetID = id ? id : null;
    return (
        <details
            className={'accordion-widget accordion-widget--' + styling}
            id={widgetID}
        >
            <summary className='accordion-widget__head'>
                <CustomHeading className='accordion-widget__title'>
                    {title}
                </CustomHeading>
                {subtitle && (
                    <div className='accordion-widget__title'>{subtitle}</div>
                )}
            </summary>
            <div className='accordion-widget__body'>{children}</div>
        </details>
    );
}
export default AccordionWidget;
