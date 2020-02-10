import React from 'react';
import '../Checklist.scss';
import ChecklistLiEl from '../ChecklistLiEl';
import AccordionWidget from '../../components/AccordionWidget/AccordionWidget';

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
                    <ul className="checklist__list" aria-label="menus functinality">
                         <ChecklistLiEl id="menus-1">
                              Menus are used for navigation and to provide functionality for the web page operability.
                         </ChecklistLiEl>
                    </ul>
               </section>
               <section>
                    <h4 className="checklist__caption" id="#menus-structure">Menus Semantic Structure</h4>
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

                    </ul>
               </section>
               <section>
                    <h4 className="checklist__caption" id="#menus-styling">Menu Styling</h4>
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
                    <h4 className="checklist__caption" id="#menus-state">Menu Item's States</h4>
                    <ul className="checklist__list" aria-labelledby="menus-state">
                         <ChecklistLiEl id="menus-16">
                              Convey menu items and their states by using color and other styling options.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-17">
                              Don’t rely on color alone as some users will be unable to perceive such changes.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-18">
                              Use distinct styling to visually indicate menu items that can be activated.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-21">
                              Visually indicate the current menu item in addition to the structural markup.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-19">
                              <strong>Change hovered or focused menu items, which gives users visual guidance when navigating the menu.</strong>
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-20">
                              Indicate the menu item that was activated through clicking, tapping,or keyboard selection so users can identify unintended activation.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-22">
                              For some types of menus, such as instructional steps, it may be useful to indicate menu items that a user had already visited. However, most menus are not expected to change based on the visited state.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-7">
                              To indicate the current item use visually hidden text if the item's functionality can be disabled (eg,not clickable). Otherwise use <b><i>aria-current=""</i></b> attribute to improve orientation in the menu.
                         </ChecklistLiEl>
                    </ul>
               </section>
               <section>
                    <h4 className="checklist__caption" id="#flyout-menu">Drop-down Menus</h4>
                    <ul className="checklist__list" aria-labelledby="flyout-menu">
                         <ChecklistLiEl id="menus-23">
                              Indicate menu items with submenus visually (icon) and with WAI-ARIA markup: using <i>aria-haspopup="true"</i> to declare that a menu item has a submenu and <i>aria-expanded="false/true"</i> to declare that the submenu is hidden/shown.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-24">
                              <b>On mouse use.</b> Use CSS styling to show and hide the submenus when the parent menu items are hovered and scripting to slightly delay the immediate closing of submenu items when the mouse leaves the area (this delay makes it easier to use the menu when navigation by a mouse is not very precise).
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-25">
                              <b>On keyboard use.</b> Submenus should not open when using the tab key to navigate through the menu, as keyboard users would then have to step through all submenu items to get to the next top-level item.
                              Use parent or a button as toggle.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-26">
                              Use parent as toggle in situations where the parent menu item only summarizes the submenu and doesn’t have to carry out a function, such as linking to a web page.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-27">
                              Use parent as toggle in situations where the parent menu item only summarizes the submenu and doesn’t have to carry out a function, such as linking to a web page. The <i>aria-expanded</i> attribute is set to true while the submenu is open, and to false otherwise.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-28">
                              When the parent menu item needs to carry out a function, add a separate button to the parent item, to open and close the submenu. If possible, include the name of the parent menu item in the button label.
                         </ChecklistLiEl>

                    </ul>
               </section>
               <section>
                    <h4 className="checklist__caption" id="#app-menu">Application Menus</h4>
                    <ul className="checklist__list" aria-labelledby="app-menu">
                         <ChecklistLiEl id="menus-29">
                              In addition to the <i>aria-expanded</i> and <i>aria-haspopup</i> attributes, the following WAI-ARIA roles are used to provide the necessary semantics of an application menu:
                              <b>menubar</b> - to represent a (usually horizontal) menu bar, <b>menu</b> - for a set of links or commands in a menu bar (fly-out menus), <b>menuitem</b> - an individual menu item and <b>separator</b> to seperate two groups of menu items in a menu.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-30">
                              Enable the menu’s functionality and keyboard behavior with scripting. <br />
                              <small><a href="https://www.w3.org/WAI/tutorials/menus/application-menus/" className="post__link">Key mapping for application menu items.</a></small>
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-31">
                              Left and right keys are used to iterate through the top-level items,and the up and down arrows are used to navigate submenus.
                         </ChecklistLiEl>
                         <ChecklistLiEl id="menus-32">
                              Pressing the tab key focuses the next item after the menu instead of the next menu item. To allow focus to be set to menu items by keyboard,the items are given a tabindex attribute with the value -1 and the first main menu item is assigned a tabindex value of 0.
                         </ChecklistLiEl>

                    </ul>
               </section>
          </AccordionWidget >
     )
}
export default Menus;