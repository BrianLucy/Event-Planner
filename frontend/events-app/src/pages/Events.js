import React, { Component } from "react";
import Modal from "../components/Modal/Modal";
import './Events.css';

class EventsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Modal>
          {/* <P>Modal Content</P> */}
        </Modal>
      <div className="events-control">
        {/* <p>What event do you have in mind?!</p> */}
        <button className="btn">Create Event</button>
      </div>
      </React.Fragment>
    );
  }
}

export default EventsPage;
