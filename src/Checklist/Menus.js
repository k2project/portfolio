import React from 'react';
import './Checklist.scss';
import ChecklistLiEl from './ChecklistLiEl';
import AccordionWidget from '../components/AccordionWidget/AccordionWidget';

function Menus() {

     const accordionData = {
          heading: 3,
          title: 'Menus',
          subtitle: null,
          styling: 'bg-dark',
     }
     return (
          <AccordionWidget data={accordionData}>
               <section>
                    <h4 className="checklist__caption" id="#menus-functionality">Menus Functinality :</h4>
                    <ul className="checklist__list" aria-labelledby="menus-functinality">
                         <ChecklistLiEl id="menus-1">
                              Menus are used for navigation and to provide functionality for the web page operability.
                         </ChecklistLiEl>
                    </ul>
               </section>
               <section>
                    <h4 className="checklist__caption" id="#menus-structure">Menus Semantic Structure :</h4>
                    <ul className="checklist__list" aria-labelledby="menus-structure">
                         <ChecklistLiEl id="menus-2">
                              Use semantic markup to convey the menu structure to users.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-3">
                              Convey the menu structure, typically by using a list to allow <abbr title="assistive technologies">AT</abbr> to announce the number of items in the menu and provide corresponding navigation functionality.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-4">
                              Unordered list used when the menu items are not in a specific order (navigational menus).
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-5">
                              Ordered list used when the sequence of the menu items is important (menus for manuals).
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-6">
                              Identify the menu, by using the HTML5 elements for page structuring and content to allow users access to the menu directly (egz. nav) or by labeling them ARIAs to allow users to distinguish between multiple menus on a web page.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-7">
                              To indicate the current item use visually hidden text if the item's functionality can be disabled (eg,not clickable). Otherwise use <b><i>aria-current=""</i></b> attribute to improve orientation in the menu.
                         </ChecklistLiEl>

                    </ul>
               </section>
               <section>
                    <h4 className="checklist__caption" id="#menus-styling">Menu Styling :</h4>
                    <ul className="checklist__list" aria-labelledby="menus-styling">
                         <ChecklistLiEl id="menus-8">
                              Apply clear and consistent styling to allow users to find and recognize menus quickly and to guarantee consistency across a website.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-9">
                              When using images (icons) in the menu, ensure they follow accessibility standards regarding their functionality.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-10">
                              Display the menu where the target audience of the website expects it.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-11">
                              Ensure that menus and their items are identifiable as such, not only by the structural markup but with the color scheme too.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-12">
                              For readabilty ensure appropriate sizing of menus and menu items to fit all text.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-13">
                              The menu size should also adapt to varying text sizes, to accommodate languages with longer words and people who need larger text.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-13.1">
                              Make sure that menu's items do not overlap themselves and other content of the page when users increase the text size or zoom the page.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-14">
                              Where possible avoid all uppercase text, line breaks, and hyphenation,as these are often distracting and hard to read.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-15">
                              Provide sufficient white space, like padding, to support people with reduced dexterity and small touch screens on mobile devices.
                         </ChecklistLiEl>

                    </ul>
               </section>

               <section>
                    <h4 className="checklist__caption" id="#menus-state">Menu Item's States :</h4>
                    <ul className="checklist__list" aria-labelledby="menus-state">
                         <ChecklistLiEl id="menus-16">

                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-17">

                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-18">

                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-19">

                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-20">

                         </ChecklistLiEl>
                    </ul>
               </section>
          </AccordionWidget>
     )
}
export default Menus;