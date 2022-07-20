import React from "react";
import "./SidebarFilter.css";
import Checkbox from "../../components/Checkbox/Checkbox";

//filtriranje po kategorijama : racunari, laptopovi, monitori, tastature, misevi, stolice, podloge, slusalice, zvucnici, mikrofoni, kamere, torbe, satovi, telefoni, gamepad, konzole, igrice
//filtriranje po proizvodjacima

const SidebarFilter = () => {
    return (
        <div className="sidebar-container">
            <h2>Filteri</h2>

            <div className="filter-div">
                <h3>Kategorije</h3>
                <Checkbox />
            </div>

            <div className="filter-div">
                <h3>Proizvodjaci</h3>
                <Checkbox />
            </div>
            
        </div>
    )
}

export default SidebarFilter;