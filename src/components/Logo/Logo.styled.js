import styled from 'styled-components';
import { Icon } from '../Icon/Icon';
import { colors } from '../../styles/themes';

export const StyledLogo = styled(Icon)`
  fill: ${colors.mainLight};
  background-color: ${colors.brand};
  width: 4.4rem;
  height: 4.4rem;
  padding: 0.8rem;
  border-radius: 1.2rem;
`;
