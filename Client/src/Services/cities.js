import axios from 'axios';

/* const LOCAL_URL = 'http://localhost:3001'; */
const API_URL = 'https://climate-hub-api.vercel.app/'

export const getCityWeather = async (city) => {
    try {
        const { data } = await axios.get(`${API_URL}/weather/${city}`);
        return data;
    } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
        throw error; // re-throw the error so that useQuery can catch it
    }
};