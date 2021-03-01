import React from 'react';

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
        <input className="search" type="text" placeholder="Have a question? Search for Answers"/>
        <img className="search-icon" src="https://img.icons8.com/android/24/000000/search.png"/>
    </div>
  )
}

export default SearchBar; 