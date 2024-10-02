import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import ContriesListShimmer from './ContriesListShimmer';
// import countriesData from '../countriesData'

const CountriesList = ({query, menu}) => {
    const [countriesData, setCountiriesData] = useState([])
    let filteredCountries;

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
            setCountiriesData(data);
        })
    }, [])


    filteredCountries = countriesData.filter(
        (country)=> country.name.common.toLocaleLowerCase().includes(query.toLowerCase())   
    )

    if(menu && query){
        filteredCountries = countriesData.filter((country)=> country.region.includes(menu)   && country.name.common.toLocaleLowerCase().includes(query.toLowerCase())  )
    }
    else if(menu){
        filteredCountries = countriesData.filter((country)=> country.region.includes(menu))
    }

   
    const countries = filteredCountries.map((country)=>{
        return <CountryCard key={country.name.common} name={country.name.common} population={country.population} region={country.region} capital={country.capital} flag={
        country.flags.svg } data={country} />
    })

    if(!countriesData.length){
        return <ContriesListShimmer />
    }


    return (
        <>
        <div className="countries-container">
            {countries}
        </div>
        
        </>
       
    )
}

export default CountriesList