import React, { useState } from "react";
import SearchIcon from '../../assets/ClimateHubSearchIcon.svg'
import './SearchBar.css';

const Searchbar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
        setQuery('');
    };

    return (
        <>
            <div className="input-wrapper">
                <form onSubmit={handleSubmit} className="input-form" name="citySearcher">
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Example: New York"
                        value={query}
                        onChange={handleChange}
                    />
                    <button
                        className="input-button"
                        value={query}
                        onClick={handleSubmit}

                    >
                        <img src={SearchIcon} alt="Search Icon" className="input-search-icon" />
                    </button>
                </form>
            </div>
        </>
    )
}

export default Searchbar;