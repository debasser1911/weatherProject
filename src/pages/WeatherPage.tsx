import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../api/api';
import { RootState } from '../store/rootReducer';
import { weatherActions } from '../store/weatherActions';
import { IWeatherData } from '../types/weatherTypes';

const WeatherPage = () => {
  const dispatch = useDispatch();
  const [weatherData, setWeatherDate] = useState<IWeatherData | undefined>(
    undefined
  );
  const weatherDataa = useSelector((weatherData: RootState) => weatherData);

  useEffect(() => {
    fetchWeatherData('Kiev').then((res) => {
      setWeatherDate(res);
      dispatch(weatherActions.success(res));
    });
  }, []);

  return (
    <>
      {weatherData && weatherData.sys && (
        <div>
          <button onClick={() => dispatch(weatherActions)}></button>
          <p>{JSON.stringify(weatherData)}</p>
          <ul>
            <li>Name: {weatherData.name}</li>
            <li>Долгота: {weatherData.coord?.lon}</li>
            <li>Широта: {weatherData.coord?.lat}</li>
            <li>Feels like: {weatherData.main?.feels_like}</li>
            <li>Температура: {weatherData.main?.temp}</li>
            <li>Видимость: {weatherData.visibility}</li>
            <li>Wind speed: {weatherData.wind?.speed}</li>
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

export default WeatherPage;
