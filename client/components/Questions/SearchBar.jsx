import React, { useState } from 'react';

const SearchBar = (props) => {
  const [input, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.filteredQuestions(input);
  };

  return (
    <form className="search-bar">
      <input
        className="search"
        type="text"
        value={input}
        placeholder="Have a question? Search for Answers"
        onChange={handleChange}
      />
      <img className="search-icon" src="https://img.icons8.com/android/24/000000/search.png" alt="" />
    </form>
  );
};

export default SearchBar;
