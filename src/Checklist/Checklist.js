import React, {useState, useEffect} from 'react';
import './Checklist.scss';

function Checklist() {
    useEffect(()=>{
      const selectedItemsArr = JSON.parse(localStorage.getItem("checklist"));
      const listItems = document.getElementsByClassName('checklist__item');
      if(selectedItemsArr){
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
  return(
    <section className="checklist__section">
        <h2 className="checklist__caption">Page Semantic Structure</h2>
        <ul className="checklist__list">
          <h3 className="checklist__list-caption">Page Regions</h3>
          <ChecklistLiEl id="item-1"> first item</ChecklistLiEl>
          <ChecklistLiEl id="item-2"> second item</ChecklistLiEl>
        </ul>
        <ul className="checklist__list">
          <h3 className="checklist__list-caption">Labeling Regions</h3>
          <li></li>
        </ul>
        <ul className="checklist__list">
          <h3 className="checklist__list-caption">Headings</h3>
          <li></li>
        </ul>
        <ul className="checklist__list">
          <h3 className="checklist__list-caption">Content Structure</h3>
          <li></li>
        </ul>
    </section>
  )
}