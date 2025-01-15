import type React from 'react';
import { Route, Routes } from 'react-router-dom';
import CountriesPage from './pages/CountriesPage';
import WeatherPage from './pages/WeatherPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<WeatherPage />} />
      <Route path={'/countries'} element={<CountriesPage />} />
    </Routes>
  );
};

export default App;
