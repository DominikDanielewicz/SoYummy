import styled, { css } from 'styled-components';
import { colors, typography } from '../../styles/themes';

const StyledHeading = styled.h1`
  color: ${colors.mainLight};
  font-feature-settings: 'liga' off;
  font-size: ${typography.size.substantial};
  font-weight: ${typography.weight.semiBold};
  line-height: 1;
  letter-spacing: -0.56px;
  text-align: center;

  ${props =>
    props.$variant === 'section' &&
    css`
      color: ${props => props.theme.color.heading.primary};
      font-size: 4.4rem;
      letter-spacing: -0.88px;
      text-align: left;
    `}
`;

export default StyledHeading;
