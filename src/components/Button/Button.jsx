import PropTypes from 'prop-types';
import StyledButton from './Button.styled';

const Button = ({ type, children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;
