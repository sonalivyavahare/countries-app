import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = (props) => {
    const { name, population, region, capital, flag, data} = props
  return (
    <Link to={name} className= "country-card" state={data}>
        <img src={flag} alt={name + " Flag"}/>
          <div className="card-text">
              <h3 className="card-title">{name}</h3>
              <p><b>Population: </b>{population.toLocaleString(
                'en-IN'
              )}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital?.[0]}</p>
          </div>
    </Link>
  )
}

export default CountryCard