import { StyledSearchInput } from './SearchInput.styled';
import { PropTypes } from 'prop-types';

const SearchInput = ({ placeholder }) => {
  return <StyledSearchInput placeholder={placeholder} />;
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchInput;
