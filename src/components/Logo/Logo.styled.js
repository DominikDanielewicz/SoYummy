import styled, { css } from 'styled-components';
import { Icon } from '../Icon/Icon';
import { colors } from '../../styles/themes';

export const StyledLogo = styled(Icon)`
  fill: ${colors.mainLight};
  background-color: ${colors.brand};
  width: 4.4rem;
  height: 4.4rem;
  padding: 0.8rem;
  border-radius: 1.2rem;
  cursor: pointer;

  ${props =>
    props.$secondary &&
    css`
      fill: ${colors.brand};
      background-color: ${colors.brandVariant};
    `}
`;
