import type React from 'react';
import { Route } from 'react-router-dom';
import CountriesPage from './pages/CountriesPage';
import WeatherPage from './pages/WeatherPage';

const App: React.FC = () => {
  return (
    <>
      <Route path={'/'} element={<WeatherPage />} />
      <Route path={'/countries'} element={<CountriesPage />} />
    </>
  );
};

export default App;
