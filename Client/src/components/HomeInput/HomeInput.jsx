import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import './HomeInput.css';

const HomeInput = ({ onCityChange }) => {
    const handleSubmit = (value) => {
        onCityChange(value);
    };

    return (
        <div className="home-container">
            <div className="home-input">
                <h1 className="home-title">Climate Ducky</h1>
                <h3 className="home-subtitle">"Instantly check any city's weather information."</h3>
                <div className="home-searchBar-container">
                    <p className="home-searchBar-legend">(Type below the city you want to get the weather information)</p>
                    <SearchBar onSearch={handleSubmit} />
                </div>
            </div>
        </div>
    );
}

export default HomeInput;