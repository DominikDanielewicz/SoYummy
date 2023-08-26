import { StyledSearchInput } from './SearchInput.styled';
import { PropTypes } from 'prop-types';

const SearchInput = ({ handleChange, value, placeholder }) => {
  return (
    <StyledSearchInput onChange={e => handleChange(e)} value={value} placeholder={placeholder} />
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

export default SearchInput;
