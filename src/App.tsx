import React, { useEffect, useState } from 'react';
import { weatherApi } from './api/api';
import { IWeatherData } from './types/weatherTypes';

const App: React.FC = () => {
  const [weatherData, setWeatherDate] = useState<IWeatherData | undefined>(
    undefined
  );

  useEffect(() => {
    weatherApi().then((res) => setWeatherDate(res));
  }, []);

  return (
    <>
      {weatherData && (
        <div>
          <p>{JSON.stringify(weatherData)}</p>
          <ul>
            <li>Name: {weatherData.name}</li>
            <li>Долгота: {weatherData.coord.lon}</li>
            <li>Широта: {weatherData.coord.lat}</li>
            <li>Feels like: {weatherData.main.feels_like}</li>
            <li>Температура: {weatherData.main.temp}</li>
            <li>Видимость: {weatherData.visibility}</li>
            <li>Wind speed: {weatherData.wind.speed}</li>
            <li>
              Sunrise: {new Date(weatherData.sys.sunrise * 1000).toString()}
            </li>
            <li>
              Sunset: {new Date(weatherData.sys.sunset * 1000).toString()}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default App;
