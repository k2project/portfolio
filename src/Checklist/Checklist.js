import React, {useState, useEffect} from 'react';
import './Checklist.scss';
import AccordionWidget from './../components/AccordionWidget/AccordionWidget';
import Accordion from '../components/Accordion/Accordion';

function Checklist() {
    useEffect(()=>{
      const selectedItemsArr = JSON.parse(localStorage.getItem("checklist"));
      const listItems = document.getElementsByClassName('checklist__item');
      if(selectedItemsArr && listItems){
        Array.from(listItems).forEach((item)=>{
            const itemId = item.getAttribute('id');
            if(selectedItemsArr.includes(itemId)){
              item.classList.add('checklist__item--selected')
            }
        })
      }
    })
    return(
        <article className="checklist">
          <h2 className="checklist__title">Web Accesibilty Checklist</h2>
          <SemanticStructure/>
        </article>
    )
}

export default Checklist;

function ChecklistLiEl(props){
  const [title, setTitle] = useState('Click to select item');
  const selectedItemsArr = JSON.parse(localStorage.getItem("checklist")) || [];
  function handleClick(e){
    const btn = e.target.closest('button');
    btn.parentElement.classList.toggle('checklist__item--selected');

    if(btn.parentElement.classList.contains('checklist__item--selected')){
      setTitle('Click to unselect item')
      if (!selectedItemsArr.includes(props.id)){
        selectedItemsArr.push(props.id)
      }
      localStorage.setItem("checklist", JSON.stringify(selectedItemsArr));
    }else{
      setTitle('Click to select item')
      const index = selectedItemsArr.indexOf(props.id);
      if (index !== -1) selectedItemsArr.splice(index, 1);
      localStorage.setItem("checklist", JSON.stringify(selectedItemsArr));
    }
    
  }
  return(
    <li className="checklist__item" id={props.id}>
      <button onClick={handleClick} title={title} className="checklist__button">
      </button>
      <span className="checklist__text">{props.children}</span>
    </li>
  )
}

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