import React, { useState } from "react";
import "./Card.css";
import { UilInfo } from '@iconscout/react-unicons';
import { UilShoppingCartAlt } from '@iconscout/react-unicons';
import Modal from "../../components/Modal/Modal";

const Card = (props) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="card-container">
                <img src={props.src} alt="product-img" onClick={() => setOpenModal(true)} />
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className="shop-this-item">
                    <div className="icons">
                        <UilInfo size="40" color="#000000" cursor="pointer" onClick={() => setOpenModal(true)}/>
                        <UilShoppingCartAlt size="25" color="#000000" cursor="pointer"/>
                    </div>
                    <div className="price">
                        <h3>{props.price + "€"}</h3>
                    </div>
                </div>
            </div>
            {openModal && 
                <Modal 
                    onClick={() => setOpenModal(false)}
                    name={props.name}
                    src={props.src}
                    description={props.description}
                />
            }
        </>
        
    )
}

export default Card;