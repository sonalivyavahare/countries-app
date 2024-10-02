import React from 'react'

const SearchBar = ({setQuery}) => {
  return (
    <div className="search-container">
        <i className="fa-solid fa-magnifying-glass" />
        <input onInput={(e)=>{
            setQuery(e.target.value)
        }}  type="search" placeholder="Search for a country..." />
    </div>
  )
}
export default SearchBar