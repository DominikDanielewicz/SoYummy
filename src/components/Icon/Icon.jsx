import icons from '../../assets/icons/sprite.svg';
import PropTypes from 'prop-types';
import { StyledIcon } from './Icon.styled';

export const Icon = ({ className, icon }) => {
  return (
    <StyledIcon className={className}>
      <use href={icons + `#${icon}`} />
    </StyledIcon>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};
