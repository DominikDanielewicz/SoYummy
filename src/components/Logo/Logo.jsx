import { StyledLogo } from './Logo.styled';
import { PropTypes } from 'prop-types';

const Logo = ({ footer }) => {
  return <StyledLogo footer={footer} icon="icon-logo" />;
};

Logo.propTypes = {
  footer: PropTypes.bool,
};

export default Logo;
