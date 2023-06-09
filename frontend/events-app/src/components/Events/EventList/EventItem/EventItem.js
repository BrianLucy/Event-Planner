import React from 'react';
import './EventItem.css';

const eventItem = props => (
        <div>
            {props.userId === props.creatorId ? (
            <p>You are the host of this event.</p>
             ) : (
             <button className="btn">View Event Details</button>
             )}
        </div>      
);

export default eventItem;
