import React, {useState} from 'react';
import './Checklist.scss';

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

export default ChecklistLiEl;