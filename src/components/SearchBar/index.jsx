import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for ${searchText}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
