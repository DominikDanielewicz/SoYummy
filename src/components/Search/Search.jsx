import SearchInput from './../SearchInput/SearchInput';
import Button from '../Button/Button';
import { StyledSearch } from './Search.styled';
import { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <StyledSearch onSubmit={handleSubmit}>
      <SearchInput handleChange={handleChange} value={searchQuery} placeholder="Enter the text" />
      <Button type="submit">Search</Button>
    </StyledSearch>
  );
};

export default Search;
