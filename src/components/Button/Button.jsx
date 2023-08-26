import PropTypes from 'prop-types';
import StyledButton from './Button.styled';

const Button = ({ type, children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

Button.propTypes = {
  props: PropTypes.any,
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;
