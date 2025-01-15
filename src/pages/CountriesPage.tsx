import axios from 'axios';
import type React from 'react';
import { type ReactElement, useEffect, useState } from 'react';
import { API_URL } from '../api/constants';

const CountriesPage = (): React.JSX.Element => {
  const [countriesData, setCountriesData] = useState<[]>([]);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setCountriesData(res.data);
      })
      .catch((err) => err);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Countries list</h1>
      <ul className="countries">
        {countriesData?.sort().map(
          (
            country: { name: { common: string } },
            idx: number,
          ): ReactElement => (
            <li key={`key-${country.name.common}`}>{country.name.common}</li>
          ),
        )}
      </ul>
    </div>
  );
};

export default CountriesPage;
