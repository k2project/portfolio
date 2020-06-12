import React from 'react';
const game = {
    name: '#game_On',
    desc: (
        <p>
            A responsive SPA built with React.js. My first online resume built
            as a "Break Out" game. 4 levels with 3 randomly generated layouts
            each. Complete a level to unveil my skills. Give it a go and have a
            ball!
        </p>
    ),
    skills: [
        'CSS3',
        'HTML5',
        'JavaScript',
        'React',
        'GitHub',
        'Sass',
        'SVG',
        'Canvas',
        'CSS Grid/Flexbox',
        'Responsive Design',
    ],
    img: 'gameOn.gif',
    web: 'https://k2project.github.io/game_On/',
    git: 'https://github.com/k2project/game_On',
};
const rte = {
    name: (
        <span>
            Rose Theatre Edinburgh <br />
            <small>Schaufuss Entertainment</small>
        </span>
    ),
    desc: (
        <p>
            A responsive SPA built with Meteor.js and React.js. End-to-end
            commercial (cml.) project for an Edinburgh's local theatre. Content
            managed on regular bases.
        </p>
    ),
    skills: [
        'CSS3',
        'HTML5',
        'JavaScript',
        'React',
        'Node.js',
        'Meteor.js',
        'Sass',
        'CSS Grid/Flexbox',
        'Responsive Design',
    ],
    img: 'rte_1.png',
    web: 'http://www.rosetheatreedinburgh.com',
    git: null,
    cml: true,
};
const grant = {
    name: (
        <span>
            Murray Grant <br />
            <small>Official Website</small>
        </span>
    ),
    desc: (
        <p>
            A responsive SPA built with React.js. This project features all
            businesses of a local entrepreneur. End-to-end commercial (cml.)
            project delivered with Agile methodology. Features: multiple
            reusable swipeable carousels and HTML5 Video.
        </p>
    ),
    skills: [
        'CSS3',
        'HTML5',
        'JavaScript',
        'React',
        'GitHub',
        'Sass',
        'CSS Grid/Flexbox',
        'Responsive Design',
    ],
    img: 'grant_1.png',
    web: 'http://www.murraygrantofficial.com/',
    git: 'https://github.com/k2project/mg_official',
    cml: true,
};
const calvocoressi = {
    name: 'Nujoji Calvocoressi Counselling',
    desc: (
        <p>
            A responsive SPA built with React.js. and Node.js, hosted on Heroku.
            End-to-end commercial (cml.) project for counselling and
            psychotherapy business.
        </p>
    ),
    skills: [
        'CSS3',
        'HTML5',
        'JavaScript',
        'React',
        'Node.js',
        'GitHub',
        'Heroku',
        'Sass',
        'CSS Grid/Flexbox',
        'Responsive Design',
    ],
    img: 'calvocoressi_1.png',
    web: 'http://www.calvocoressi.com/',
    git: 'https://github.com/k2project/nt-mern',
    cml: true,
};
const mcBride = {
    name: (
        <span>
            Marc McBride <br />
            <small>Official Website</small>
        </span>
    ),
    desc: (
        <p>
            A responsive SPA built with React.js for an international music
            director. End-to-end commercial (cml.), accessibility compliant
            project. Marc's website features HTML5 Video with fully customised
            controllers.
        </p>
    ),
    skills: [
        'CSS3',
        'HTML5',
        'JavaScript',
        'React',
        'GitHub',
        'CSS Grid/Flexbox',
        'Responsive Design',
        'Accessibility',
    ],
    img: 'mcBride_1.png',
    web: 'http://www.marcmcbride.co.uk/',
    git: 'https://github.com/k2project/marc_mcBride',
    cml: true,
};
const amb = {
    name: ' AMB Collaborative',
    desc: (
        <p>
            A responsive SPA built with React.js for a Scottish businessman.
            End-to-end commercial (cml.), SEO compliant project.
        </p>
    ),
    skills: [
        'CSS3',
        'HTML5',
        'JavaScript',
        'React',
        'GitHub',
        'CSS Grid/Flexbox',
        'Responsive Design',
    ],
    img: 'amb_1.png',
    web: 'http://www.ambcollaborative.com/',
    git: 'https://github.com/k2project/fred_mcBride',
    cml: true,
};
const spm = {
    name: ' SPM Advisors',
    desc: (
        <p>
            My first commercial (cml.) end-to-end websites built only with HTML,
            CSS and jQuery. <br />{' '}
            <small>
                <i>
                    While the code is far from a presentable example ( more like
                    embarrassing! ), I have decided to feature it along with
                    other projects to show how far I have come as a web
                    developer.{' '}
                </i>
            </small>
        </p>
    ),
    skills: ['CSS3', 'HTML5', 'jQuery', 'Responsive Design'],
    img: 'spm_1.png',
    web: 'http://www.spm-advisors.com/',
    git: null,
    cml: true,
};
const donutChart = {
    name: ' SVG Animated Chart',
    desc: (
        <p>
            An interactive and animated chart build with React and SVG. It's a
            doughnut chart where you decide on how many slices it's made of. 4
            different animations.
        </p>
    ),
    skills: [
        'CSS3',
        'HTML5',
        'JavaScript',
        'React',
        'CSS Grid/Flexbox',
        'GitHub',
    ],
    img: 'donutChart.gif',
    web: 'https://k2project.github.io/donut_chart/',
    git: 'https://github.com/k2project/donut_chart',
};
const cards = {
    name: ' Multilevel Memory Game',
    desc: (
        <p>
            A React-based memory game inspired by my nephew - a huge fan of
            Marvel comics.
        </p>
    ),
    skills: [
        'CSS3',
        'HTML5',
        'JavaScript',
        'React',
        'CSS Grid/Flexbox',
        'GitHub',
    ],
    img: 'cards.gif',
    web: 'https://k2project.github.io/cards/',
    git: 'https://github.com/k2project/cards',
};
const invoice = {
    name: ' PDF Invoice Generator',
    desc: (
        <p>
            Full-stack MERN application with (back-end generated cookie) user
            authentication for creating and storing pdf-formatted invoices.
            Takes advantage of well developed RESTfull API and Redux for the
            state management. Features custom-built window prompt that monitors
            unsaved changes.
        </p>
    ),
    skills: [
        'CSS3',
        'HTML5',
        'MERN',
        'Redux',
        'User Authentication',
        'Accessibility',
        'CSS Grid/Flexbox',
        'Sass',
        'GitHub',
        'Heroku',
    ],
    img: 'invoice.png',
    web: 'https://invoice-pdf-generator.herokuapp.com/',
    git: 'https://github.com/k2project/invoice-with-session',
};
// 'CSS3', 'HTML5', 'JavaScript', 'React','jQuery','Node.js', 'Meteor.js', 'GitHub', 'Heroku','Sass', 'SVG', 'Canvas', 'CSS Grid/Flexbox', 'Responsive Design','MERN',
const projects = [
    grant,
    donutChart,
    //     spm,
    rte,
    invoice,
    cards,
    calvocoressi,
    mcBride,
    game,
    amb,
];
export default projects;
