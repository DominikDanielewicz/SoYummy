import { StyledHeading } from './Heading.styled';
import PropTypes from 'prop-types';

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

Heading.propTypes = {
  children: PropTypes.node,
};

export default Heading;
