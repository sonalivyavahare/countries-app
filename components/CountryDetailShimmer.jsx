import React from 'react'
import "./CountryDetailShimmer.css"

const CountryDetailShimmer = () => {
  return (
    <div className="country-details-container">
        <div className="country-details">
            <div className='img-shimmer'></div>
            <div className="details-text-container">
                <h1 className='heading-text-shimmer'></h1>
                <div className="details-text">
                    <p className='text-shimmer'></p>
                    <p className='text-shimmer'></p>
                    <p className='text-shimmer'></p>
                    <p className='text-shimmer'></p>
                    <p className='text-shimmer'></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountryDetailShimmer