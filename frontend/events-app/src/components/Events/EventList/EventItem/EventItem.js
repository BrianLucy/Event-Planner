import React from 'react';
import './EventItem.css';

const eventItem = props => (
    <li key={props.event._id} className="events__list-item">
          <div>
            <h1>{props.event.title}</h1>
            </div>
        <div>
            
            {props.userId === props.creatorId ? (
            <p>You are the host of this event.</p>
             ) : (
             <button className="btn">View Event Details</button>
             )}

        </div>
        </li>
);

export default eventItem;
