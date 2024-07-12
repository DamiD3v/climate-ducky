import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomeInput from './components/HomeInput/HomeInput.jsx';
import CityWeatherCardInfo from './components/CityWeatherCardInfo/CityWeatherCardInfo.jsx';
import { useQuery } from '@tanstack/react-query';
import { getCityWeather } from "./Services/cities.js";
import ArrowImage from './assets/DownArrowImage.svg';
import { scroller } from 'react-scroll';
import './Home.css';

const Home = () => {
  const [city, setCity] = useState('');
  
  const { data, isLoading, error, refetch, isRefetching } = useQuery({
    queryKey: ['cityWeather', city],
    queryFn: async () => {
      return getCityWeather(city);
    },
    retry: true,
    retryDelay: 1000,
    enabled: !!city,
  });

  const handleCityChange = (value) => {
    setCity(value);
  };

  const handleRefresh = () => {
    refetch();
    scroller.scrollTo('cityName', {
      smooth: true,
      duration: 1000,
      offset: -60,
    })
  };

  const handleScrollArrow = () => {
    scroller.scrollTo('cityName', {
      smooth: true,
      duration: 1000,
      offset: -60,
      })
  }

  useEffect(() => {
    if (data) {
      scroller.scrollTo('cityName', {
        smooth: true,
        duration: 1000,
        offset: -60,
      })
    }
  }, [data])

  return (
    <div>
      <NavBar />
      <header className='home-header'>
        <HomeInput onCityChange={handleCityChange} />
        <div className='home-weather-container'>
          {isLoading || isRefetching ? (
            <div>Loading...</div>
          ) : (
            <React.Fragment>
              {data && <button className='scrollArrow-button' onClick={handleScrollArrow}><img className='scrollArrow-image' src={ArrowImage} alt='Scroll Down Arrow' /></button>}
              {data && <CityWeatherCardInfo data={data} />}
              {data && <button className='home-refreshButton' onClick={handleRefresh}>Refresh city data</button>}
            </React.Fragment>
          )}
          {error && <div>Error: {error.message}</div>}
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default Home;