import React, { useEffect } from 'react';
import './Checklist.scss';

import SemanticStructure from './accordions/SemanticStructure';
import Menus from './accordions/Menus';
import Images from './accordions/Images';
import DynamicContent from './accordions/DynamicContent';

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

          //check for duplicte ids
          const elWithIds = document.querySelectorAll('[id]');
          const idsArr = [];
          Array.prototype.forEach.call(elWithIds, function (el, i) {
               if (!idsArr.includes(el.id)) {
                    idsArr.push(el.id)
               } else {
                    console.log('WARNING! DUPLICATED [ID]:', '@@@--->' + el.id + '<---@@@', el)
               }
          });
     })
     return (
          <article className="checklist">
               HELLO WORLD
               <h2 className="checklist__title">Web Accesibilty Checklist</h2>
               <SemanticStructure />
               <Menus />
               <Images />
               <DynamicContent />
          </article>
     )
}

export default Checklist;