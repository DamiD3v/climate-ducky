import express from 'express'
import cors from 'cors'
import cityWeather from './routes/cityWeather.js'

const app = express();

app.use(cors());
app.use('/weather', cityWeather);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});

export default app