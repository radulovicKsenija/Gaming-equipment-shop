import React from "react";
import "./Modal.css";
import { UilInfo } from '@iconscout/react-unicons';
import { UilShoppingCartAlt } from '@iconscout/react-unicons';

const Modal = (props) => {
    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-title">
                    <h3>{props.name}</h3>
                    <button className="exit-btn" onClick={props.onClick}>X</button>
                </div>

                <div className="modal-img">
                    <img src={props.src} />
                </div>
                
                <div className="product-description">
                    <p>{props.description}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Modal;