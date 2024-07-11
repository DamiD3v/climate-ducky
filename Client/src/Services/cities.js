import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const getCityWeather = async (city) => {
    try {
        const { data } = await axios.get(`${API_URL}/api/weather/${city}`);
        return data;
    } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
        throw error; // re-throw the error so that useQuery can catch it
    }
};