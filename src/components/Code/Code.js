import React from 'react';
import './Code.scss';

function Code(props) {
    
  return (
    <figure className="code"> 
      {props.figcaption && <figcaption>{props.figcaption}</figcaption>}
      <pre>
        {props.children}
      </pre>
    </figure>
  );
}

export default Code;
