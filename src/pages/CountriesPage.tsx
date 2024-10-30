import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../api/constants'

const CountriesPage = (): React.JSX.Element => {
  const [countriesData, setCountriesData] = useState<[]>([])
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setCountriesData(res.data)
      })
      .catch((err) => err)
  }, [])

  return (
    <div className="container">
      <h1 className="title">Countries list</h1>
      <ul className="countries">
        {countriesData?.sort().map((country: any, idx: number): any => (
          <li key={idx}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  )
}

export default CountriesPage
