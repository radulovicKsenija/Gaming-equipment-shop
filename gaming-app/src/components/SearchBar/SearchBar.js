import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    return (
        <input 
            className="search-input"
            type="search"
            placeholder="Pretrazite proizvode"
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default SearchBar;