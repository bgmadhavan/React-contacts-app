// import React from 'react';

// const SearchBar = ({ searchTerm, onSearch }) => (
//   <input
//     type="text"
//     value={searchTerm}
//     onChange={e => onSearch(e.target.value)}
//     placeholder="Search contacts..."
//   />
// );

// export default SearchBar;

import React from 'react'

export default function Search({ searchTerm, onSearch }) {
  return (
    <div className='searchCon'>
    <input
    type="text"
    value={searchTerm}
    onChange={e => onSearch(e.target.value)}
    placeholder="Search contacts..."
    />
    </div>

  )
}
