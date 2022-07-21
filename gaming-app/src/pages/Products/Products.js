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
    // console.log(uniqueCategories);
    // let uniqueProviders = [...new Set(filteredProducts.map(product => product.proizvodjac))]

    useEffect(() => {
        let selectedCategories = {};
        uniqueCategories.forEach(category => selectedCategories[category] = false);
        setFilters(selectedCategories)
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
        // Uzmi odabrane kategorije
        // Uzmi sve proizvode
        // Kreiraj varijablu za filterovane proizvode
        // Prelazi proizvod po proizvod i ubaci u filterovane ako kategorija match-uje neku odabranu
        // vrati fitlerovane 

        // Da li je odabrana ijedna kategorija
        let showAllProducts = true
        for (let category in filters) {
            if (filters[category] === true) { showAllProducts = false }
        }
        // Ako nije, prikazi sve proizvode
        if (showAllProducts) {
            setFilteredProducts(proizvodi)
        } else {
            // //svi filterovani proizvodi 
            var allFilteredProducts = [];
            // Filteruj proizvode
           
            for (let category in filters) {
                if (filters[category] === true) {
                    filteredProducts.forEach((product) => {
                        if (product.category === category) {
                            allFilteredProducts.push(product);
                        }
                    })
                    console.log(allFilteredProducts);
                    setFilteredProducts(allFilteredProducts);
                }
            }
        }
    }, [filters]);

console.log(filteredProducts)
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