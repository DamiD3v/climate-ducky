import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express();

let apiRequestCount = 0;
let lastApiRequestTime = 0;

router.get('/:city', async (req, res) => {
  const apiKey = process.env.KEY;
  const currentTime = new Date().getTime();
  const timeSinceLastRequest = currentTime - lastApiRequestTime;

  if (timeSinceLastRequest < 1000) {
    const requestsPerSecond = apiRequestCount / (timeSinceLastRequest / 1000);
    if (requestsPerSecond >= 100) {
      return res.status(429).json({ message: "Rate limit exceeded. Please try again later." });
    }
  }

  apiRequestCount++;
  lastApiRequestTime = currentTime;

  try {
    const cityName = req.params.city;
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching weather data' });
  }
});

export default router;