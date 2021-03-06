import React from "react";
import "./SidebarFilter.css";
import Checkbox from "../../components/Checkbox/Checkbox";
import { proizvodi } from "../../proizvodi";

//filtriranje po kategorijama : racunari, laptopovi, monitori, tastature, misevi, stolice, podloge, slusalice, zvucnici, mikrofoni, kamere, torbe, satovi, telefoni, gamepad, konzole, igrice
//filtriranje po proizvodjacima

const SidebarFilter = (props) => {

    let products = proizvodi;
    //remove duplicates
    let uniqueCategories = [...new Set(products.map(product => product.category))]
    let uniqueProviders = [...new Set(products.map(product => product.provider))]

    return (
        <div className="sidebar-container">
            <h2>Filteri</h2>

            <div className="filter-div">
                <h3>Kategorije</h3>

                <div className="checkboxes">
                    {uniqueCategories.map((cat, i) => 
                    <Checkbox 
                        key={i}
                        id={i}
                        name={cat}
                        onSelect={props.onSelect}
                    />)}
                </div>
            </div>

            <div className="filter-div">
                <h3>Proizvodjaci</h3>
                
                <div className="checkboxes">
                    {uniqueProviders.map((prov, i) => 
                    <Checkbox 
                        key={i}
                        id={i}
                        name={prov}
                        onSelect={props.onSelect}
                    />)}
                </div>
            </div>
            
        </div>
    )
}

export default SidebarFilter;