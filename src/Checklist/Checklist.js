import React, { useEffect } from 'react';
import './Checklist.scss';

import SemanticStructure from './SemanticStructure';
import AccordionWidget from './../components/AccordionWidget/AccordionWidget';

function Checklist() {
     useEffect(() => {
          const selectedItemsArr = JSON.parse(localStorage.getItem("checklist"));
          const listItems = document.getElementsByClassName('checklist__item');
          if (selectedItemsArr && listItems) {
               Array.from(listItems).forEach((item) => {
                    const itemId = item.getAttribute('id');
                    if (selectedItemsArr.includes(itemId)) {
                         item.classList.add('checklist__item--selected')
                    }
               })
          }
     })
     return (
          <article className="checklist">
               <h2 className="checklist__title">Web Accesibilty Checklist</h2>
               <SemanticStructure />
          </article>
     )
}

export default Checklist;
