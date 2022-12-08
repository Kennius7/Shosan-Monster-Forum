import React from 'react';
import "./SearchBoxStyle.css";



function SearchBox({ placeholder, handleChange }) {
  return (
    <input 
    className="search" 
    onChange={handleChange} 
    type='search' 
    placeholder={placeholder}
    />
  )
}

export default SearchBox

