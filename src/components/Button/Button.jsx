import PropTypes from 'prop-types';
import StyledButton from './Button.styled';

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
