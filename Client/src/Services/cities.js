import axios from 'axios';

export const getCityWeather = async (city) => {
    try {
        /* const { data } = await axios.get(`https://weather-app-api-mu.vercel.app/weather/${city}`); */
        const { data } = await axios.get(`http://localhost:3001/weather/${city}`);
        return data;
    } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
        throw error; // re-throw the error so that useQuery can catch it
    }
};