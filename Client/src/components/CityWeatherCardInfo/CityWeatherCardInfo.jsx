import React from "react";
import { Element } from "react-scroll";
import windFlag from '../../assets/windFlag.svg'
import './CityWeatherCardInfo.css';

const CityWeatherCardInfo = ({ data, mobile }) => {
    if (!data) return (null);

    const { name, main, wind, weather } = data;

    const weatherIcon = weather[0].icon; // Get the weather icon
    const weatherMainInfo = weather[0].main;
    const weatherDescription = weather[0].description;

    const temperatureCelsius = Math.round(main.temp - 273.15); // Convert temperature from Kelvin to Celsius

    const windSpeedKmh = Math.round(wind.speed * 3.6); // Convert wind speed from m/s to km/h


    return (
        <>
            {mobile ? (
                <div className="mobile-weather-card-container">
                    <div className="mobile-weather-card-name-container">
                        <Element name="mobile-cityName">
                            <h2 className="mobile-weatherCityName">{name}</h2>
                        </Element>
                    </div>
                    <div className="mobile-weatherInfo-container">
                        <h3 className="mobile-weatherInfo-title">Temperature</h3>
                        <p className="mobile-weatherInfo">{temperatureCelsius}ºC</p>
                    </div>
                    <div className="mobile-weatherInfo-container">
                        <h3 className="mobile-weatherInfo-title">Weather Information</h3>
                        <p className="mobile-weatherInfo">{weatherMainInfo}</p>
                    </div>
                    <div className="mobile-weatherInfo-container-icon">
                        <h3 className="mobile-weatherInfo-title">Weather details</h3>
                        <p className="mobile-weatherInfo">{weatherDescription} <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="Weather Icon" className="mobile-weatherInfo-icon" /></p>
                    </div>
                    <div className="mobile-weatherInfo-container">
                        <h3 className="mobile-weatherInfo-title">Wind Speed</h3>
                        <p className="mobile-weatherInfo">{windSpeedKmh} km/h <img className="mobile-windFlagIcon" src={windFlag} /></p>
                    </div>
                </div >
            ) : (
                <div className="weather-card-container">
                    <div className="weather-card-name-container">
                        <Element name="cityName">
                            <h2 className="weatherCityName">{name}</h2 >
                        </Element >
                    </div>
                    <div className="weatherInfo-container">
                        <h3 className="weatherInfo-title">Temperature</h3>
                        <p className="weatherInfo">{temperatureCelsius}ºC</p>
                    </div>
                    <div className="weatherInfo-container">
                        <h3 className="weatherInfo-title">Weather Information</h3>
                        <p className="weatherInfo">{weatherMainInfo}</p>
                    </div>
                    <div className="weatherInfo-container-icon">
                        <h3 className="weatherInfo-title">Weather details</h3>
                        <p className="weatherInfo">{weatherDescription} <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="Weather Icon" className="weatherInfo-icon" /></p>
                    </div>
                    <div className="weatherInfo-container">
                        <h3 className="weatherInfo-title">Wind Speed</h3>
                        <p className="weatherInfo">{windSpeedKmh} km/h <img className="windFlagIcon" src={windFlag} /></p>
                    </div>
                </div>
            )}
        </>
    );
}

export default CityWeatherCardInfo;