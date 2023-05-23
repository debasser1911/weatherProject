import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WeatherPage from '../pages/WeatherPage'
import CountriesPage from '../pages/CountriesPage'

const Router = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<WeatherPage />}></Route>
        <Route path={'/countries'} element={<CountriesPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
