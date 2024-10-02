import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import './country.css'
import CountryDetailShimmer from './CountryDetailShimmer'
import { ThemeContext } from '../contexts/ThemeContext'

const CountryDetails = () => {
    const params = useParams()
    const countryName = params.country;

    const {state } = useLocation()
    console.log(state)

    const [country, setCountry] = useState(null)
    const [notFound, setNotFound] = useState(false)

    const [isDark, setIsDark] = useContext(ThemeContext)


    function updateContryData(country){
        setCountry({
            flag: country.flags.svg,
            name: country.name.common,
            population: country.population.toLocaleString(
                'en-IN'
              ),
            region: country.region,
            subregion: country.subregion,
            capital: country.capital.join(', '),
            currencies: Object.values(country.currencies)
                .map((currency) => currency.name)
                .join(', '),
            languages: Object.values(country.languages).join(' ,'),
            tld: country.tld.join(' ,'),
            borders:[]
            
        })

        if(!country.borders){
            country.borders = []
        }
        Promise.all(country.borders.map((border)=>{
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=>res.json()).then(([borderCountry])=>borderCountry.name.common)
        })).then(borders => {
            setCountry((prevState)=>({...prevState, borders}))
        })
    }


    useEffect(()=>{

        if(state){
            updateContryData(state)
            return
        }

        fetch(`https://restcountries.com/v3.1/name/${countryName}` )
        .then((res)=>res.json())
        .then((data)=>{
            const country = data[0]
            updateContryData(country)
            
        })
        .catch((e)=>{
            console.log(e);
            setNotFound(true)
        })
    }, [countryName])

    if(notFound){
        return <div className='country-details-container'>No matching records found</div>
    }

    return (
        // notFound ? <div>No matching records found</div> :
        country === null ?  <CountryDetailShimmer /> : (<main className={`${isDark?'dark':''}`}>
           
        <div className="country-details-container">
            <span className="back-button" onClick={()=>{
                history.back()
            }}>
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            
            <div className="country-details">
            <img src={country.flag} alt="" />
            <div className="details-text-container">
                <h1>{country.name}</h1>
                <div className="details-text">
                <p><b>Native Name: </b><span className="native-name"></span></p>
                <p><b>Population: </b><span className="population">{country.population}</span></p>
                <p><b>Region: </b><span className="region">{country.region}</span></p>
                <p><b>Sub Region: </b><span className="sub-region">{country.subregion}</span></p>
                <p><b>Capital: </b><span className="capital">{country.capital}</span></p>
                <p>
                    <b>Top Level Domain: </b><span className="top-level-domain">{country.tld}</span>
                </p>
                <p><b>Currencies: </b><span className="currencies">{country.currencies}</span></p>
                <p><b>Languages: </b><span className="languages">{country.languages}</span></p>
                </div>
                
                {country.borders?.length > 0 &&
                <div className="border-countries"><b>Border Countries: </b>&nbsp;
                {country.borders?.map(border =>  <Link to={`/${border}`} key={border}>{border}</Link>)}
               
                 </div>
                }
               
            </div>
            </div>
        </div>
        
        </main>)
    )
}

export default CountryDetails