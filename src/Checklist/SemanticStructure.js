import React from 'react';
import './Checklist.scss';
import ChecklistLiEl from './ChecklistLiEl';
import AccordionWidget from './../components/AccordionWidget/AccordionWidget';

function SemanticStructure(){
  const accordionData={
    heading:3,
    title:'Page Semantic Structure',
    subtitle:null,
    styling:'bg-grey',
  }
  return(
    <AccordionWidget data={accordionData}>
        <ul className="checklist__list">
          <h4 className="checklist__list-caption">Page Regions</h4>
          <ChecklistLiEl id="regions-1"> Mark up different regions of applications, so that they can be identified by web browsers and assistive technologies.</ChecklistLiEl>
          <h5 className="checklist__list-subcaption">___Page Header :</h5>
          <ChecklistLiEl id="regions-2"><em>&lt;header&gt;</em> element present at the top of every page for the website logo, search function, and navigation options. </ChecklistLiEl>
          <ChecklistLiEl id="regions-3"><em>&lt;header&gt;</em> used inside <em>&lt;article&gt;</em> and <em>&lt;section&gt;</em> elements, not to be associated with the whole page, but only with that specific element.</ChecklistLiEl>
          <h5 className="checklist__list-subcaption">___Page Footer :</h5>
          <ChecklistLiEl id="regions-4"><em>&lt;footer&gt;</em> element present at the bottom of every page that contains site-wide information, such as copyright information, privacy statements, or disclaimers.</ChecklistLiEl>
          <ChecklistLiEl id="regions-5"><em>&lt;footer&gt;</em> used inside <em>&lt;article&gt;</em> and <em>&lt;section&gt;</em> elements, not to be associated with the whole page, but only with that specific element.</ChecklistLiEl>
          <ChecklistLiEl id="regions-"> </ChecklistLiEl>
        </ul>
        <ul className="checklist__list">
          <h4 className="checklist__list-caption">Labeling Regions</h4>
        </ul>
        <ul className="checklist__list">
          <h4 className="checklist__list-caption">Headings</h4>
        </ul>
        <ul className="checklist__list">
          <h4 className="checklist__list-caption">Content Structure</h4>
        </ul>
    </AccordionWidget>
  )
}
export default SemanticStructure;