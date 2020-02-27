import React from 'react';
import './Stickers.scss';
import gitHub from './../../media/icons/gitHub.png';
// import LinkNewTab from './../LinkNewTab';

// function Stickers(props) {
//     const {git,cml,featured, liked, sm}=props;
//     const gitLink = {
//         href:git,
//         icon:gitHub,
//     }
//     return (
//         <div className={"Stickers " + (sm?"small":"")}>
//             {git && <span className="Stickers__git">
//                 <LinkNewTab link={gitLink}/>
//             </span>}
//             {cml && <span className="Stickers__cml">cml.</span>}
//             {featured && <span className="Stickers__featured">
//                 <span className="star" aria-hidden="true">&#x2605;</span>
//                 <span className="sr-only">featured post</span>
//             </span>}
//             {liked && <span className="Stickers__liked">
//                 <span className="heart" aria-hidden="true">&#9825;</span>
//                 <span className="sr-only">featured post</span>
//             </span>}

//         </div>
//     );
// }

// export default Stickers;

export default function Stickers({ git, cml, name }) {
    function handleOnFocus(e) {
        e.target.classList.add('sticker--in-focus');
        const project = e.target.closest('.project');
        if (project) {
            project.classList.add('project--out-of-focus');
        }
    }
    function handleOnBlur(e) {
        e.target.classList.remove('sticker--in-focus');
        const project = e.target.closest('.project');
        if (project) {
            project.classList.remove('project--out-of-focus');
        }
    }
    function handleOnMouseEnter(e) {
        const projectDesc = e.target.closest('.stickers').previousSibling;
        if (projectDesc) {
            projectDesc.style.backgroundColor = 'transparent';
            projectDesc.style.color = 'transparent';
        }
    }
    function handleOnMouseLeave(e) {
        const projectDesc = e.target.closest('.stickers').previousSibling;
        if (projectDesc) {
            projectDesc.style.backgroundColor = '#51cefa';
            projectDesc.style.color = '#fff';
        }
    }
    return (
        <div
            className='stickers'
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            {git && (
                <a
                    href={git}
                    target='_blank'
                    rel='noopener noreferrer'
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    className='sticker sticker__git'
                >
                    <span className='sr-only'>
                        source code for {name} (opens gitHub page in a new tab)
                    </span>
                    <img src={gitHub} alt='' className='sticker__img' />
                </a>
            )}
            {cml && <span className='sticker sticker__cml'>cml</span>}
        </div>
    );
}
