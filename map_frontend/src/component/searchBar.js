import React, { useState } from "react";
import "../stylings/searchbarStyle.css";

const SearchBar = () =>{
    const [city, setCity] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
        setCity(e.target.value);
        handleSubmit(e);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/map/search?query=${city}`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            console.log(data);
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    //http://localhost:5000/map/Cities

    return (
        <div className="search-bar">
            <form>
                <input type="text"
                placeholder="Search an American City"
                value = {city}
                onChange={handleChange} />
            </form>
            <div className="searchResults">
                {searchResults && searchResults.map((cities) => {
                    <ul className="City">{cities.City}</ul>
                })
            }
            </div>
        </div>
    )
}

export default SearchBar;