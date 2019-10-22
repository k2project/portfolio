import React from 'react';
const game = {
    name:'#game_On',
    desc:(<p>A responsive SPA built with React.js. Online resume based on a vintage game "Break Out". Features:  HTML5 Canvas and SVG. Give it a go and have a ball!</p>),
    skills:[
        'CSS3', 'HTML5', 'JavaScript', 'React', 'GitHub', 'Sass', 'SVG', 'Canvas', 'CSS Grid/Flexbox', 'Responsive Design',
    ],
    imgs:[
        'gameOn_1.png',
    ],
    web:'https://k2project.github.io/game_On/',
    git:'https://github.com/k2project/game_On'
}
const rte = {
    name:(<span>Rose Theatre Edinburgh <br/><small>Schaufuss Entertainment</small></span>),
    desc:(<p>Responsive SPA built with Meteor.j and React.js. End-to-end commercial project for a local theatre. Features: dynamically created routes based on a show's name and a customised contact form. </p>),
    skills:[
        'CSS3', 'HTML5', 'JavaScript', 'React','Node.js', 'Meteor.js','Sass',  'CSS Grid/Flexbox', 'Responsive Design',
    ],
    imgs:[
        'rte_1.png',
    ],
    web:'http://www.rosetheatreedinburgh.com',
    git:null,
}
const grant = {
    name:(<span>Murray Grant <br/><small>Official Website</small></span>),
    desc:(<p>A responsive SPA built with React.js. This project featurs all businesses of a local entrepreneur. End-to-end commercial project delivered with Agile methodology. Features: multiple reusable swipeable carousels and HTML5 Video.</p>),
    skills:[
        'CSS3', 'HTML5', 'JavaScript', 'React', 'GitHub', 'Sass', 'CSS Grid/Flexbox', 'Responsive Design',
    ],
    imgs:[
        'grant_1.png',
    ],
    web:'http://www.murraygrantofficial.com/',
    git:'https://github.com/k2project/mg_official'
}
const calvocoressi = {
    name:'Nujoji Calvocoressi Counselling',
    desc:(<p>A responsive SPA built with React.js. and Node.js, hosted on Heroku. End-to-end commercial project. Features customised accordion and contact form build with Nodemailer.</p>),
    skills:[
        'CSS3', 'HTML5', 'JavaScript', 'React','Node.js', 'GitHub', 'Heroku','Sass',  'CSS Grid/Flexbox','Responsive Design',
    ],
    imgs:[
        'calvocoressi_1.png',
    ],
    web:'http://www.calvocoressi.com/',
    git:'https://github.com/k2project/nt-mern'
}
const mcBride = {
    name:(<span>Marc McBride <br/><small>Official Website</small></span>),
    desc:(<p>A responsive SPA built with React.js for an international music director. End-to-end commercial project based solely on the client's design. Marc's website features  HTML5 Video with fully customised controllers.</p>),
    skills:[
        'CSS3', 'HTML5', 'JavaScript', 'React', 'GitHub', 'CSS Grid/Flexbox','Responsive Design',
    ],
    imgs:[
        'mcBride_1.png',
    ],
    web:'http://www.marcmcbride.co.uk/',
    git:'https://github.com/k2project/marc_mcBride'
}
const amb = {
    name:' AMB Collaborative',
    desc:(<p>A responsive SPA built with React.js for a Scottish businessman. End-to-end commercial project based solely on the client's design.</p>),
    skills:[
        'CSS3', 'HTML5', 'JavaScript', 'React', 'GitHub', 'CSS Grid/Flexbox','Responsive Design',
    ],
    imgs:[
        'amb_1.png',
    ],
    web:'http://www.ambcollaborative.com/',
    git:'https://github.com/k2project/fred_mcBride'

}
const spm = {
    name:' SPM Advisors',
    desc:(<p>My first commercial end-to-end websites built only with HTML, CSS and jQuery. <br/> <small><i>While the code is far from a presentable example ( more like embarrassing! ), I have decided to feature it along with other projects to show how far I have come as a web developer. </i></small></p>),
    skills:[
        'CSS3', 'HTML5','jQuery','Responsive Design',
    ],
    imgs:[
        'spm_2.png',
    ],
    web:'http://www.spm-advisors.com/',
    git:null
}
const donutChart = {
    name:' Svg Animated Char',
    desc:(<p>An interactive and animated chart build with React and SVG. It's a donut chart where you decide on how many slice it's made of with 4 different initro animations.</p>),
    skills:[
        'CSS3', 'HTML5','JavaScript', 'React','CSS Grid/Flexbox', 'GitHub'
    ],
    imgs:[
        'donutChart_1.png',
    ],
    web:'https://k2project.github.io/donut_chart/',
    git:'https://github.com/k2project/donut_chart'
}
const cards = {
    name:' Marvel Memory Game',
    desc:(<p>A React based memory game inspired by my nephew - a huge fan of Marvel comics. </p>),
    skills:[
        'CSS3', 'HTML5','JavaScript', 'React','CSS Grid/Flexbox', 'GitHub'
    ],
    imgs:[
        'cards_1.png',
    ],
    web:'https://k2project.github.io/cards/',
    git:'https://github.com/k2project/cards'
}
// 'CSS3', 'HTML5', 'JavaScript', 'React','jQuery','Node.js', 'Meteor.js', 'GitHub', 'Heroku','Sass', 'SVG', 'Canvas', 'CSS Grid/Flexbox', 'Responsive Design',
const projects = [
    grant,
    donutChart,
    cards,
    game,
    rte,
    calvocoressi,
    amb,
    mcBride,
    spm,

]
export default projects;
