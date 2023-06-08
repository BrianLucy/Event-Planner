import React from "react";
<<<<<<< HEAD
import './Modal.css'


const modal = props => (
    <div className="modal">
    <header>{props.title}</header>
    <section className="modal_content">
        {props.children}

    </section>
    <section className="modal-actions">
        {props.canCancel && <button className="btn">Cancel</button>}
        {props.canConfirm &&<button className="btn">Confirm</button>}
    </section>
    </div>
);

export default modal;
=======

import "./Modal.css";

const modal = (props) => (
  <div className="modal">
    <header className="modal__header">
      <h1>{props.title}</h1>
    </header>
    <section className="modal__content">{props.children}</section>
    <section className="modal__actions">
      {props.canCancel && (
        <button className="btn" onClick={props.onCancel}>
          Cancel
        </button>
      )}
      {props.canConfirm && (
        <button className="btn" onClick={props.onConfirm}>
          Confirm
        </button>
      )}
    </section>
  </div>
);

export default modal;
>>>>>>> 37dedce1189e1df69d001f100c2ebc9b31e09272
