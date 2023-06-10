import React from 'react';

import "./EventItem.css";

const eventItem = props => (
    <li className='events-list'>
        <div className='title'>
            <h1>{props.title}</h1>
        </div>
        <div>
        {props.userId === props.creatorId ? (
        <p>You are the host of this event</p>
         ) : (
         <button className="btn" onClick={props.onDetail.bind(this, props.eventId)}>View Event Details</button>
         )}
    </div>   
    </li>   
);

export default eventItem;
