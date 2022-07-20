import React from "react";
import "./Card.css";
import { UilInfo } from '@iconscout/react-unicons';
import { UilShoppingCartAlt } from '@iconscout/react-unicons';

const Card = (props) => {
    return (
        <div className="card-container">
            <img src={props.src} alt="product-img"/>
            <h3>{props.name}</h3>
            <p>{props.opis}</p>
            <div className="shop-this-item">
                <div className="icons">
                    <UilInfo size="40" color="#000000" cursor="pointer" />
                    <UilShoppingCartAlt size="25" color="#000000" cursor="pointer"/>
                </div>
                <div className="price">
                    <h3>{props.cijena + "€"}</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Card;