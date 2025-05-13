import type React from 'react';
import { useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchWeatherData } from '../api/api';
import { useForm } from 'react-hook-form';

const WeatherPage = (): React.JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);
  const { handleSubmit, register } = useForm<{ city: string }>()

  const city = ref.current?.value;

  const {data, error, refetch} = useQuery({
    queryKey: ['weatherData', city],
    queryFn: () => fetchWeatherData(city ?? ''),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  console.log(city)

  const { mutate } = useMutation({
    mutationFn: (city: string) => fetchWeatherData(city),
  })

  return (
    <>
    <form action="\" onSubmit={handleSubmit((data) => mutate(data.city))}>
        <input type="text" {...register('city')} />
        <button type="submit">Get weather</button>


    </form>
      {data?.sys != null && (
        <div className="weather-page" data-testid="weather-page">
          <p>{JSON.stringify(data)}</p>
          <ul>
            <li data-testid="city-label">City: {data?.name}</li>
            <li>Longtitude: {data.coord?.lon}</li>
            <li>Latitude: {data.coord?.lat}</li>
            <li>Feels like: {data.main?.feels_like}</li>
            <li>Temperature: {data.main?.temp}</li>
            <li>Visibility: {data.visibility}</li>
            <li>Wind speed: {data.wind?.speed}</li>
            <li>
              Sunrise: {new Date(data.sys.sunrise * 1000).toString()}
            </li>
            <li>
              Sunset: {new Date(data.sys.sunset * 1000).toString()}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default WeatherPage;
