import React, {useState, useEffect} from "react";
import "./Products.css";
import SidebarFilter from "./SidebarFilter";
import Card from "./Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import {proizvodi} from "../../proizvodi";


const Products = () => {
    //za sada podatke uzimamo iz ovog js fajla dok ne dobijemo bazu iz backenda
    const [filteredProducts, setFilteredProducts] = useState(proizvodi);
    const [filters, setFilters] = useState({});
    const [searchValue, setSearchValue] = useState("");
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

    useEffect(() => {
        //filtrirati proizvode na search

        //niz gdje ce se ubaciti proizvodi koji sadrze zeljenu rijec
        let searchFilteredProducts = {};

        //prikazi sve proizvode ako je search prazan
        if(searchValue === "") {
            setFilteredProducts(proizvodi);
        } else {
            //filtriraj proizvode koji sadrze ukucanu rijec
            searchFilteredProducts = proizvodi.filter(proizvod => proizvod.name.includes(searchValue.toLocaleUpperCase()));
            // console.log(searchFilteredProducts);
            setFilteredProducts(searchFilteredProducts);
        }
    }, [searchValue]);

    // za sada su proizvodi filtrirani po cijeni, od manje prema vecoj, ali treba dodati neki sort feature gdje se proizvodi mogu sortirati proizvoljno
    filteredProducts.sort((a,b) => parseInt(a.price) > parseInt(b.price) ? 1 : parseInt(a.price) < parseInt(b.price) ? -1 : 0);

    return (
        <div>
            <div className="searchbar">
                <SearchBar 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
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
        </div>
        
    )
}


export default Products;