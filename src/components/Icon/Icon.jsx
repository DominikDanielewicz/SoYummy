import icons from '../../assets/icons/sprite.svg';
import PropTypes from 'prop-types';

export const Icon = ({ className, icon }) => {
  return (
    <svg className={className}>
      <use href={icons + `#${icon}`} />
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};
