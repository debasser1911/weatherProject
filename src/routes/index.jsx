import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WeatherPage from '../pages/WeatherPage';
import CountriesPage from '../pages/CountriesPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/'} element={<WeatherPage />}></Route>
        <Route path={'/countries'} element={<CountriesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
