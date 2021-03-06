import React from 'react';

const jobHunting_module = {
    title: 'Job Hunting',
    completed: false,
    content: [
        {
            title: 'Create a LinkedIn account',
            completed: false,
            reference: [],
        },
        {
            title: 'Create cover letter for FED position',
            completed: true,
            reference: [],
        },
        {
            title: 'Create cover letter for internship',
            completed: true,
            reference: [],
        },
        {
            title: 'Update Resume and Portfolio',
            completed: true,
            reference: [],
        },
        {
            title:
                'Enquire about the internship experience (preferably to expand on web accessibility knowledge)',
            completed: true,
            bold: true,
            reference: [],
        },
        {
            title: 'Coding interview preparation',
            completed: false,
            reference: [],
        },
    ],
};
const reactMobile_module = {
    title: 'React Mobile',
    completed: false,
    content: [],
};
const coding_module = {
    title: 'Coding best practise',
    completed: true,
    content: [
        {
            title: 'Naming conventions and CSS methodology',
            completed: true,
            reference: [],
        },

        {
            title: 'Applied Visual Design',
            completed: true,
            reference: [],
        },
        {
            title: 'Applied Accessibility',
            completed: false,
            bold: true,
            reference: [],
        },
        {
            title: 'Designing accessible and reusable React components',
            completed: true,
            reference: [],
        },
        {
            title: 'Data Structuring and Algorithms',
            completed: true,
            bold: true,
            reference: [],
        },
        {
            title: 'Refactoring existing applications',
            completed: true,
            reference: [],
        },
    ],
};
const mern_module = {
    title: 'MERN Application with Authorisation',
    completed: true,
    content: [
        {
            title: 'Building an extensive backend API with Node.js & Express',
            completed: true,
            reference: [],
        },
        {
            title: 'Using Stateless JWT authentication practices',
            completed: true,
            bold: true,
            reference: [],
        },
        {
            title: 'Extensive API testing with Postman',
            completed: true,
            reference: [],
        },
        {
            title: 'Integrate React with an Express backend',
            completed: true,
            reference: [],
        },
        {
            title: 'RESTfull API and/or GraphQL modern practices ',
            completed: true,
            bold: true,
            reference: [],
        },

        {
            title: 'Using Redux for app state management',
            completed: true,
            reference: [],
        },
        {
            title: 'Information Security and Quality Assurance',
            completed: true,
            bold: true,
            reference: [],
        },
        {
            title: 'Deploy to Heroku with a post-build script',
            completed: true,
            reference: [],
        },
        {
            title:
                'Building a full stack social network app with React, Redux, Node, Express & MongoDB',
            completed: true,
            reference: [],
        },
        {
            title:
                'Building a pdf file invoice generator with MERN and authorisation',
            completed: true,
            reference: [],
        },
    ],
};
const testing_module = {
    title: 'Testing best practice',
    completed: false,
    content: [],
};
const bootcamp_moduls = [
    coding_module,
    testing_module,
    mern_module,
    //     reactMobile_module,
    jobHunting_module,
];
const ModuleContent = (props) => {
    const { title, completed, bold, reference } = props.content;
    return (
        <div className='module__content'>
            <div
                className={
                    completed
                        ? 'module__tickBox_sml completed'
                        : 'module__tickBox_sml'
                }
            >
                <span>&#10004;</span>
            </div>
            <div
                className={
                    bold
                        ? 'module__content_title bold'
                        : 'module__content_title'
                }
            >
                {title}
            </div>
            {reference.length > 0 && (
                <div className='module__content_btn'>
                    <button></button>
                </div>
            )}
        </div>
    );
};
const Module = (props) => {
    const { title, completed, bold, content } = props.module;
    return (
        <div className='module'>
            <div
                className={
                    completed ? 'module__tickBox completed' : 'module__tickBox'
                }
            >
                <span>&#10004;</span>
            </div>
            <div className={bold ? 'module__title bold' : 'module__title'}>
                {title}
            </div>
            {content.length > 0 &&
                content.map((content) => (
                    <ModuleContent content={content} key={content.title} />
                ))}
        </div>
    );
};

const post7 = {
    id: '7',
    featured: true,
    title: 'My Tailored Web Developer Bootcamp',
    subtitle: 'Working on interviews fedback.',
    date: '2020-01-14',
    image: {
        path: 'bootcamp.png',
        position: 'center ',
    },
    tags: ['Coding', 'Bootcamp', 'MERN', 'Testing'],
    body: (
        <div className='Post_body'>
            <p className='Post_subtitle'>
                Each interview will bring you one-stop closer to your dream job
                if you are willing to learn from the experience.
            </p>
            <p>
                I have recently started job hunting for the position of the
                front end web developer. Being able to secure a few interviews
                was a great experience for someone who is just about to start
                their career. Even though I didn’t get the position, it
                presented me with the chance of reaching out and proactively
                asking for feedback. I am grateful to everyone, who has been
                willing to help me out as I am always looking for ways to
                develop, learn, and grow. On that note, I have come up with my
                personalised bootcamp plan to improve my skills and to show my
                potential employer how capable I am of handling a constructive
                assessment.
            </p>

            <p className='Post_subtitle'>
                Feedback: the positive and constructive ones.
            </p>

            <p>
                Overall I have received a great number of positive comments on
                my commercial experience and design capabilities. On the other
                hand, me - being a self-taught developer, it raised a few
                concerns about the quality of my code. I believe that they can
                be fairly justified. It's easy to fall into bad habits, without
                realising it, when learning from different sources. Therefore,
                the first part of my challenge would be to address these issues
                along with getting to know better the WCAG standards. I want to
                be able to create semantically clean websites that are an
                inclusive and friendly experience to all users. Also, I will be
                looking for an internship to gain experience within a developers
                team and preferable agile environment.
            </p>

            <p className='Post_subtitle'>My Bootcamp Modules.</p>
            {bootcamp_moduls.map((module) => (
                <Module module={module} key={module.title} />
            ))}
        </div>
    ),
};
export default post7;
