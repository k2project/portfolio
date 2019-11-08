import React from 'react';
import './Stickers.scss';
import LinkNewTab from './../LinkNewTab';

import gitHub from './../../media/icons/gitHub.png';

function Stickers(props) {
    const {git,cml,featured, liked}=props.data;
    const gitLink = {
        href:git,
        icon:gitHub,
        ariaHidden:true,
    }
    return (
        <div className="Stickers">
            {git && <span className="Stickers__git">
                <LinkNewTab link={gitLink}/>
            </span>}
            {cml && <span className="Stickers__cml">cml.</span>}
            {featured && <span className="Stickers__featured"></span>}
            {liked && <span className="Stickers__liked"></span>}

        </div>
    );
}

export default Stickers;
