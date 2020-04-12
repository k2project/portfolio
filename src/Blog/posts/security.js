import React from 'react';
import bem from './../../media/blog/bem-sass.png';
import bemEg from './../../media/blog/bemEg.png';

const post8 = {
    id: '13',
    cls: 'security',
    featured: true,
    title: 'Security',
    subtitle: 'Production Best Practices',
    date: '2020-04-10',
    image: {
        path: 'security.jpg',
        position: 'right top ',
    },
    tags: ['Security'],
    body: (
        <div className='Post_body'>
            <p>
                Development and production environments are usually set up
                differently and have vastly different requirements. What’s fine
                in development may not be acceptable in production. For example,
                in a development environment you may want verbose logging of
                errors for debugging, while the same behavior can become a
                security concern in a production environment. And in
                development, you don’t need to worry about scalability,
                reliability, and performance, while those concerns become
                critical in production.
            </p>
            <p className='Post_subtitle'>
                Security best practices for Express applications in production
                include:
            </p>
            <ul className='post__list'>
                <li>Ensure all your dependencies are secure</li>
                <li>Don’t use deprecated or vulnerable versions of Express</li>
                <li>Helmet</li>
                <li>BCrypt</li>
                <li>CSURF</li>
                <li>TLS</li>
                <li>Use cookies securely (express-session)</li>
                <li>Prevent brute-force attacks against authorization</li>
                <li>
                    Always filter and sanitize user input to protect against
                    cross-site scripting (XSS) and command injection attacks
                </li>
            </ul>
            <p>
                More about the subject{' '}
                <a
                    href='https://expressjs.com/en/advanced/best-practice-security.html#additional-considerations'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {' '}
                    here.
                </a>
            </p>
        </div>
    ),
};
export default post8;
