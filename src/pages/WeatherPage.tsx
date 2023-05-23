import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeatherData } from '../api/api'
// import { RootState } from '../store/rootReducer';
import { weatherActions } from '../store/weatherActions'
import { type IWeatherData } from '../types/weatherTypes'

const WeatherPage = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const [weatherData, setWeatherDate] = useState<IWeatherData | undefined>(
    undefined
  )
  // const weatherDataa = useSelector((weatherData: RootState) => weatherData);

  useEffect(() => {
    fetchWeatherData('Kiev')
      .then((res) => {
        setWeatherDate(res)
        dispatch(weatherActions.success(res))
      })
      .catch((err) => err)
  }, [dispatch])

  return (
    <>
      {weatherData?.sys != null && (
        <div className="weather-page">
          <button onClick={() => dispatch(weatherActions)}></button>
          <p>{JSON.stringify(weatherData)}</p>
          <ul>
            <li>City: {weatherData.name}</li>
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
  )
}

export default WeatherPage
