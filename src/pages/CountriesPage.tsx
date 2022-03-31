import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CountriesPage = () => {
  const [countriesData, setCountriesData] = useState<[] | undefined>([]);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setCountriesData(res.data));
  }, []);

  return (
    <div className='container'>
      <h1 className='title'>Countries list</h1>
      <ul className='countries'>
        {countriesData?.sort().map((country: any, idx: number): any => (
          <li key={idx}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesPage;
