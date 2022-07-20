import React from "react";
import "./Products.css";
import SidebarFilter from "./SidebarFilter";
import Card from "./Card";
import {proizvodi} from "../../proizvodi";


const Products = () => {

    //za sada podatke uzimamo iz ovog js fajla dok ne dobijemo bazu iz backenda
    const products = proizvodi;

    return (
        <div className="products-main-container">
            <SidebarFilter />
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