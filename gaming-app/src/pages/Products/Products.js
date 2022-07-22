import React, {useState, useEffect} from "react";
import "./Products.css";
import SidebarFilter from "./SidebarFilter";
import Card from "./Card";
import {proizvodi} from "../../proizvodi";


const Products = () => {
    //za sada podatke uzimamo iz ovog js fajla dok ne dobijemo bazu iz backenda
    const [filteredProducts, setFilteredProducts] = useState(proizvodi);
    const [filters, setFilters] = useState({});
    // console.log(filteredProducts);

    let uniqueCategories = [...new Set(filteredProducts.map(product => product.category))]
    let uniqueProviders = [...new Set(filteredProducts.map(product => product.provider))]

    useEffect(() => {
        let selectedFilters = {};
        uniqueCategories.forEach(category => selectedFilters[category] = false);
        uniqueProviders.forEach(provider => selectedFilters[provider] = false);
        setFilters(selectedFilters);
    }, []);

    const handleFilteredProducts = (name) => { 
        if (filters.hasOwnProperty(name)) {
            setFilters((prevState) => ({
                ...prevState,
                [name]: !filters[name],
            }));
        }
    }

    useEffect(() => {

        let productsToShow = {};

        //Da li je odabrana ijedna kategorija
        //ovo radi i za proizvodjace
        let showAllProducts = true
        for (let filter in filters) {
            if (filters[filter] === true) { showAllProducts = false }
        }
        // Ako nije, prikazi sve proizvode
        if (showAllProducts) {
            setFilteredProducts(proizvodi)
        //filtriranje proizvoda
        } else {
            //niz gdje ce se pushovati odabrane kategorije
            let chosenFilters = []; // ["Monitori", "Tastature", ...]
            for (let filter in filters) {
                if (filters[filter] === true) {
                    chosenFilters.push(filter);
                }
            }
            console.log("CHOSEN FILTERSS ----", chosenFilters);
            //ako je kategorija ili proizvodjac proizvoda u odabranim filterima, prikazi taj proizvod
            productsToShow = proizvodi.filter(product => chosenFilters.includes(product.category) || chosenFilters.includes(product.provider));
            // console.log(productsToShow);
            setFilteredProducts(productsToShow);
        }
    }, [filters]);

    return (
        <div className="products-main-container">
            <SidebarFilter 
                onSelect={handleFilteredProducts}
            />
            <div className="display-products">
                {filteredProducts.map(proizvod => 
                    <Card 
                        key={proizvod.id} 
                        src={proizvod.src} 
                        name={proizvod.name} 
                        description={proizvod.description} 
                        price={proizvod.price} 
                    />
                )}
                
            </div>
        </div>
    )
}


export default Products;