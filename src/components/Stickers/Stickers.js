import React from 'react';
import './Stickers.scss';
import LinkNewTab from './../LinkNewTab';

import gitHub from './../../media/icons/gitHub.png';

function Stickers(props) {
    const {git,cml,featured, liked, sm}=props;
    const gitLink = {
        href:git,
        icon:gitHub,
    }
    return (
        <div className={"Stickers " + (sm?"small":"")}>
            {git && <span className="Stickers__git">
                <LinkNewTab link={gitLink}/>
            </span>}
            {cml && <span className="Stickers__cml">cml.</span>}
            {featured && <span className="Stickers__featured">
                <span className="star" aria-hidden="true">&#x2605;</span>
                <span className="sr-only">featured post</span>
            </span>}
            {liked && <span className="Stickers__liked">
                <span className="heart" aria-hidden="true">&#9825;</span>
                <span className="sr-only">featured post</span>
            </span>}

        </div>
    );
}

export default Stickers;