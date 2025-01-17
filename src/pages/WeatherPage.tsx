import type React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UNITS, WEATHER_API_TOKEN } from '../api/constants';
// import { RootState } from '../store/rootReducer';
import { weatherActions } from '../store/weatherActions';
import type { IWeatherData } from '../types/weatherTypes';

const WeatherPage = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const [weatherData, setWeatherDate] = useState<IWeatherData | undefined>(
    undefined,
  );

  const fetchWeather = (event: React.FormEvent): void => {
    event.preventDefault();
    const city = (event.target as HTMLFormElement & { city: { value: string } })
      .city.value;
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${UNITS.METRIC}&appid=${WEATHER_API_TOKEN}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setWeatherDate(res);
        dispatch(weatherActions.success(res));
      })
      .catch((err) => err);
  };

  return (
    <>
      <form action="" onSubmit={fetchWeather}>
        <input type="text" name="city" />
        <button type="submit">Get weather</button>
      </form>
      {weatherData?.sys != null && (
        <div className="weather-page" data-testid="weather-page">
          <p>{JSON.stringify(weatherData)}</p>
          <ul>
            <li data-testid="city-label">City: {weatherData.name}</li>
            <li>Longtitude: {weatherData.coord?.lon}</li>
            <li>Latitude: {weatherData.coord?.lat}</li>
            <li>Feels like: {weatherData.main?.feels_like}</li>
            <li>Temperature: {weatherData.main?.temp}</li>
            <li>Visibility: {weatherData.visibility}</li>
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
