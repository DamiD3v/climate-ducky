import React, { useState } from "react";
import SearchIcon from '../../assets/ClimateHubSearchIcon.svg'
import './newSearchBar.css';

const Searchbar = ({ onSearch, mobile }) => {
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
            {mobile ? (
                <div className="mobile-input-wrapper">
                    <form onSubmit={handleSubmit} className="mobile-input-form" name="citySearcher">
                        <div className="mobile-input-wrapper">
                            <input
                                type="text"
                                name="text"
                                placeholder="Example: New York"
                                value={query}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>
            ) : (
                <div className="input-wrapper">
                    <form onSubmit={handleSubmit} className="input-form" name="citySearcher">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="text"
                                placeholder="Example: New York"
                                value={query}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default Searchbar;