import React, { Component } from "react";
import './Events.css';

class EventsPage extends Component {
  render() {
    return (
      <h1>Time to create some magic</h1>
    <h3>click the wand to begin</h3>
  <div className="events-control">
        <button className="btn"><img src="/transparent wand.png"></button>
  </div>
    );
  }
}

export default EventsPage;
