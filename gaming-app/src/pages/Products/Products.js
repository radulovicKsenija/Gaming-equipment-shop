import React, {useState} from "react";
import "./Products.css";
import SidebarFilter from "./SidebarFilter";
import Card from "./Card";
import {proizvodi} from "../../proizvodi";


const Products = () => {

    //state
    const [activeFilter, setActiveFilter] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    //za sada podatke uzimamo iz ovog js fajla dok ne dobijemo bazu iz backenda
    const products = proizvodi;

    const handleChange = (e) => {
        //handle change for checkbox
    }

    return (
        <div className="products-main-container">
            <SidebarFilter 
                checked={isChecked}
                onChange={handleChange}
            />
            <div className="display-products">
                {products.map(proizvod => 
                    <Card 
                    key={proizvod.id} 
                    src={proizvod.src} 
                    name={proizvod.name} 
                    opis={proizvod.opis} 
                    cijena={proizvod.cijena} 
                    />
                )}
            </div>
            
        </div>
    )
}


export default Products;