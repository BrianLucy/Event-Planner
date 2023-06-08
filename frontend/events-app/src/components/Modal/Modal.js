import React from "react";
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