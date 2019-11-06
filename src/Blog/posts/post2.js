import React from 'react';

const post2={
    id:'2',
    featured:false,
    title:' Event Delagation, Event Bubbling and Event Capturing in JS',
    subtitle:'JavaScript\'s Interview Q&A.',
    date:'2019-11-05',
    image:{
        path:'js.png',
        position:'right center '
    },
    tags:['JavaScript', 'Q&A'],
    body:(<div className="Post_body">
        <p className="Post_subtitle">Q: Explain Event Delagation (ED) , Event Bubbling (EB) and Event Capturing(EC) in JavaScript.</p>

        <p><b>A: Event Delagation is a technique, Event Bubbling is what the event does itself and Event Capturing is a way of using ED on events that don’t bubble. </b> </p>

        <p>Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.</p>

        <p>Bubbling is what the event itself does. The event starts are the element that triggered it. Then, it bubbles up to each of it’s parent elements until it reaches the html element. Any listeners on any of those parent elements would get triggered as it bubbles up.</p>

        <p>Most events bubble. But some, like the focus event, do not. There’s a trick you can use to capture the event, though. The last argument in addEventListener() is called useCapture. We almost always set it to false. For events that don’t bubble, set it to true to capture the event anyways.</p>

        <p> There are two types of event delegation; bubbling and capturing. Using bubbling the developer can send a signal from the child element to the parent element. The signal flows upstream, bubbling up. Using capturing the developer can send a signal from the parent element to the child element. The signal flows down stream.</p>

    </div>),

}
export default post2;
