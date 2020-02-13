import React, { useEffect } from 'react';
import './Checklist.scss';

import PerceivableInformation from './PrinciplesComponents/PerceivableInformation';
import Operable from './PrinciplesComponents/Operable';
import Understandable from './PrinciplesComponents/Understandable';
import RobustContent from './PrinciplesComponents/RobustContent';
import SemanticStructure from './ContentComponents/SemanticStructure';
import Menus from './ContentComponents/Menus';
import Images from './ContentComponents/Images';
import Links from './ContentComponents/Links';
import Tables from './ContentComponents/Tables';
import DynamicContent from './ContentComponents/DynamicContent';
import Title from './EasyCheckComponents/Title';

function Checklist() {
    useEffect(() => {
        const selectedItemsArr = JSON.parse(localStorage.getItem('checklist'));
        const listItems = document.getElementsByClassName('checklist__item');
        if (selectedItemsArr && listItems) {
            Array.from(listItems).forEach(item => {
                const itemId = item.getAttribute('id');
                if (selectedItemsArr.includes(itemId)) {
                    item.classList.add('checklist__item--selected');
                }
            });
        }

        //check for duplicte ids
        const elWithIds = document.querySelectorAll('[id]');
        const idsArr = [];
        Array.prototype.forEach.call(elWithIds, function(el, i) {
            if (!idsArr.includes(el.id)) {
                idsArr.push(el.id);
            } else {
                console.log(
                    'WARNING! DUPLICATED [ID]:',
                    '@@@--->' + el.id + '<---@@@',
                    el
                );
            }
        });
    });
    return (
        <article className='checklist'>
            <section>
                <h1 className='checklist__title checklist__title--lg'>
                    Accessibility, Usability, and Inclusion
                </h1>
                <p>
                    <b>Accessibility</b> addresses discriminatory aspects
                    related to equivalent user experience for people with
                    disabilities.{' '}
                </p>
                <p>
                    <b>Usability</b> is about designing products to be
                    effective, efficient, and satisfying. Usability includes{' '}
                    <abbr title='user experience design'>UX</abbr>.
                </p>
                <p>
                    <b>Inclusion</b> is about diversity, and ensuring
                    involvement of everyone to the greatest extent possible,
                    regardless to computer literacy and skills, economic
                    situation, education, geographic location, culture, age, and
                    language...{' '}
                </p>
            </section>
            <section>
                <h2 className='checklist__title'>
                    Web Accessibilty Principles
                </h2>
                <PerceivableInformation />
                <Operable />
                <Understandable />
                <RobustContent />
            </section>
            <section>
                <h2 className='checklist__title'>
                    Web Content Accessibilty (WCAG)
                </h2>
                <SemanticStructure />
                <Menus />
                <Images />
                <Links />
                <Tables />
                <DynamicContent />
            </section>
            <section>
                <h2 className='checklist__title'>
                    Accessibilty Easy Checklist
                </h2>
                <Title />
            </section>
        </article>
    );
}

export default Checklist;
